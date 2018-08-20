export interface MeQuery_me {
    email: string;
}
export interface MeQuery {
    me: MeQuery_me | null;
}
export interface ForgotPasswordChangeMutation_forgotPasswordChange {
    path: string;
    message: string;
}
export interface ForgotPasswordChangeMutation {
    forgotPasswordChange: ForgotPasswordChangeMutation_forgotPasswordChange[] | null;
}
export interface ForgotPasswordChangeMutationVariables {
    newPassword: string;
    key: string;
}
export interface CreateListingMutation {
    createListing: boolean;
}
export interface CreateListingMutationVariables {
    picture?: any | null;
    name: string;
    category: string;
    description: string;
    price: number;
    latitude: number;
    longitude: number;
    amenities: string[];
}
export interface FindListingsQuery_findListings_owner {
    id: string;
    email: string;
}
export interface FindListingsQuery_findListings {
    id: string;
    name: string;
    pictureUrl: string;
    owner: FindListingsQuery_findListings_owner;
}
export interface FindListingsQuery {
    findListings: FindListingsQuery_findListings[];
}
export interface SendForgotPasswordEmailMutation {
    sendForgotPasswordEmail: boolean | null;
}
export interface SendForgotPasswordEmailMutationVariables {
    email: string;
}
export interface LoginMutation_login_errors {
    path: string;
    message: string;
}
export interface LoginMutation_login {
    errors: LoginMutation_login_errors[] | null;
    sessionId: string | null;
}
export interface LoginMutation {
    login: LoginMutation_login;
}
export interface LoginMutationVariables {
    email: string;
    password: string;
}
export interface LogoutMutation {
    logout: boolean | null;
}
export interface RegisterMutation_register {
    path: string;
    message: string;
}
export interface RegisterMutation {
    register: RegisterMutation_register[] | null;
}
export interface RegisterMutationVariables {
    email: string;
    password: string;
    name: string;
    lastname: string;
}
