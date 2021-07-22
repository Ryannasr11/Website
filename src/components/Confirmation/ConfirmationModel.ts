export interface IConfirmationState {
    title?: string;
    message?: string;
    type?: string;
    visible?: boolean;
    id?: string;
    userId?: string;
}

export interface IConfirmationAction {
    type: string;
    title?: string;
    message?: string;
    confirmationType?: string;
    id?: string;
    userId?: string;
}
