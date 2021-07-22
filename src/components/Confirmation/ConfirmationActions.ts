// actions that handles confirmation dialogs by performing stated action and showing confirmation message

import { ActionCreator, ActionCreatorsMapObject, Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { IConfirmationState, IConfirmationAction } from './ConfirmationModel';

export const types = {
    DISPLAY_CONFIRMATION_MESSAGE: 'DISPLAY_CONFIRMATION_MESSAGE',
    HANDLE_CONFIRMATION_CLOSE: 'HANDLE_CONFIRMATION_CLOSE',
};
// hides confirmation prompt after action is confirmed
export const hideConfirmation: ActionCreator<
    ThunkAction<Promise<any>, IConfirmationState, null, IConfirmationAction>
> = () => async (dispatch: Dispatch) =>
    dispatch({
        type: types.HANDLE_CONFIRMATION_CLOSE,
    });

// shows message confirming confirmation prompt was acted on with an affirmative response
export const showConfirmation: ActionCreator<
    ThunkAction<Promise<any>, IConfirmationState, null, IConfirmationAction>
> = (title?: string, message?: string, confirmationType?: string, id?: string, userId?: string) => async (
    dispatch: Dispatch,
) =>
    dispatch({
        type: types.DISPLAY_CONFIRMATION_MESSAGE,
        title,
        message,
        confirmationType,
        id,
        userId,
    });

export const actions: ActionCreatorsMapObject<
    ThunkAction<Promise<any>, IConfirmationState, null, IConfirmationAction>
> = {
    showConfirmation,
    hideConfirmation,
};
