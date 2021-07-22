import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Typography } from '@material-ui/core';
import React, { SyntheticEvent } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch, ActionCreatorsMapObject } from 'redux';
import { IConfirmationAction, IConfirmationState } from './ConfirmationModel';
import * as confirmActions from './ConfirmationActions';
import { IAppStore } from '../Shared/Redux';

export interface IConfirmationProps {
    confirmation?: IConfirmationState;
    actions: ActionCreatorsMapObject;
}

export const ConfirmationDialog: React.FC<IConfirmationProps> = ({ confirmation, actions }) => {
    const handleCancel = (e: SyntheticEvent) => {
        if (e) {
            e.preventDefault();
        }

        // TODO
        actions.hideConfirmation();
    };

    const handleOk = (e: SyntheticEvent) => {
        if (e) {
            e.preventDefault();
        }

        // TODO
        actions.hideConfirmation();
    };

    return (
        <Dialog
            open={!!(confirmation && confirmation.visible)}
            disableBackdropClick
            disableEscapeKeyDown
            maxWidth="xs"
            aria-labelledby="confirmation-dialog-title"
        >
            <DialogTitle id="confirmation-dialog-title">{confirmation && confirmation.title}</DialogTitle>
            <DialogContent>
                <Typography variant="body1">{confirmation && confirmation.message}</Typography>
            </DialogContent>
            <DialogActions>
                <div>
                    <Button onClick={handleCancel} color="primary" style={{ marginRight: 8 }}>
                        Cancel
                    </Button>
                    <Button variant="contained" onClick={handleOk} color="primary">
                        Ok
                    </Button>
                </div>
            </DialogActions>
        </Dialog>
    );
};

function mapStateToProps(store: IAppStore) {
    return {
        confirmation: store.confirmation,
    };
}

function mapDispatchToProps(dispatch: Dispatch<IConfirmationAction>) {
    return {
        actions: bindActionCreators(confirmActions.actions, dispatch),
    };
}

// middleware
export default connect(mapStateToProps, mapDispatchToProps)(ConfirmationDialog);
