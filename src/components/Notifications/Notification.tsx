import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert, { AlertProps } from '@material-ui/lab/Alert';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { IAppStore } from '../Shared/Redux';
import { INotificationAction, INotificationState } from './notificationModel';
import { ActionCreatorsMapObject, bindActionCreators, Dispatch } from 'redux';

import * as notificationActions from './NotificationActions';
import { connect } from 'react-redux';

function Alert(props: AlertProps) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        width: '100%',
        '& > * + *': {
            marginTop: theme.spacing(2),
        },
    },
}));

export interface NotificationProps {
    notification?: INotificationState;
    actions: ActionCreatorsMapObject;
}

const Notification: React.FC<NotificationProps> = ({ notification, actions }) => {
    const classes = useStyles();

    if (notification) {
        const { open = false, severity = 'success', message = 'Success!' } = notification;
        const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
            if (reason === 'clickaway') {
                return;
            }

            actions.hideNotification();
        };

        return (
            <div className={classes.root}>
                <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                    <Alert onClose={handleClose} severity={severity}>
                        {message}
                    </Alert>
                </Snackbar>
            </div>
        );
    }
    return null;
};

function mapStateToProps(store: IAppStore) {
    return {
        notification: store.notifications,
    };
}

function mapDispatchToProps(dispatch: Dispatch<INotificationAction>) {
    return {
        actions: bindActionCreators(notificationActions.actions, dispatch),
    };
}

// middleware
export default connect(mapStateToProps, mapDispatchToProps)(Notification);
