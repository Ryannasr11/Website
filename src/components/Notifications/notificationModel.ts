import { Color } from '@material-ui/lab/Alert';

export interface INotificationState {
    message?: string;
    severity?: Color;
    open?: boolean;
    update?: any;
}

export interface INotificationAction {
    type: string;
    message?: string;
    notificationType?: Color;
    update?: any;
}
