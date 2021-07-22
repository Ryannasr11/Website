import { Reducer } from 'redux';
import { types } from './ConfirmationActions';
import { IConfirmationAction, IConfirmationState } from './ConfirmationModel';

export const confirmationReducer: Reducer<IConfirmationState, IConfirmationAction> = (
    state: IConfirmationState = {},
    action: IConfirmationAction,
) => {
    switch (action.type) {
        case types.DISPLAY_CONFIRMATION_MESSAGE: {
            return {
                ...state,
                title: action.title,
                message: action.message,
                type: action.confirmationType,
                id: action.id,
                userId: action.userId,
                visible: true,
            };
        }

        case types.HANDLE_CONFIRMATION_CLOSE: {
            return {
                ...state,
                title: '',
                message: '',
                type: '',
                visible: false,
                id: '',
                userId: '',
            };
        }

        default:
            return state;
    }
};
