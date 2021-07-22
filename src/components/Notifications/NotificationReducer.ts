import { Reducer } from 'redux';
import { types } from './NotificationActions';
import { INotificationAction, INotificationState } from './notificationModel';

export const notifications: Reducer<INotificationState, INotificationAction> = (
    state: INotificationState = {},
    action: INotificationAction,
) => {
    switch (action.type) {
        case types.DISPLAY_SNACKBAR_MESSAGE: {
            return {
                ...state,
                message: action.message,
                open: true,
                severity: action.notificationType,
                update: action.update,
            };
        }

        case types.HANDLE_SNACKBAR_CLOSE: {
            return {
                ...state,
                message: '',
                open: false,
            };
        }

        default:
            return state;
    }
};
