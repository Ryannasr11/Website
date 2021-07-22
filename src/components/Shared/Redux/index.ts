import { combineReducers } from 'redux';

// Confirmation
import { confirmationReducer } from '../../Confirmation/ConfirmationReducers';
import { IConfirmationState } from '../../Confirmation/ConfirmationModel';

// Notification
import { notifications } from '../../Notifications/NotificationReducer';
import { INotificationState } from '../../Notifications/notificationModel';

// Root Reducer
const index = combineReducers({
    confirmation: confirmationReducer,
    notifications,
});

export interface IAppStore {
    confirmation?: IConfirmationState;
    notifications?: INotificationState;
}

export default index;
