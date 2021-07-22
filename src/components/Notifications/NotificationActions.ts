import { ActionCreator, ActionCreatorsMapObject, Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { Color } from '@material-ui/lab/Alert';
import { INotificationState, INotificationAction } from './notificationModel';

// actions & payloads for notifications
export const types = {
    DISPLAY_SNACKBAR_MESSAGE: 'DISPLAY_SNACKBAR_MESSAGE',
    HANDLE_SNACKBAR_CLOSE: 'HANDLE_SNACKBAR_CLOSE',
};
export const hideNotification: ActionCreator<
    ThunkAction<Promise<any>, INotificationState, null, INotificationAction>
> = () => async (dispatch: Dispatch) =>
    dispatch({
        type: types.HANDLE_SNACKBAR_CLOSE,
    });

export const showNotification: ActionCreator<
    ThunkAction<Promise<any>, INotificationState, null, INotificationAction>
> = (message: string, notificationType: Color, update: any) => async (dispatch: Dispatch) =>
    dispatch({
        type: types.DISPLAY_SNACKBAR_MESSAGE,
        message,
        notificationType,
        update,
    });

export const actions: ActionCreatorsMapObject<
    ThunkAction<Promise<any>, INotificationState, null, INotificationAction>
> = {
    hideNotification,
    showNotification,
};
