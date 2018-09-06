// tslint:disable
// graphql typescript definitions

declare namespace GQL {
interface IGraphQLResponseRoot {
data?: IQuery | IMutation | ISubscription;
errors?: Array<IGraphQLResponseError>;
}

interface IGraphQLResponseError {
/** Required for all errors */
message: string;
locations?: Array<IGraphQLResponseErrorLocation>;
/** 7.2.2 says 'GraphQL servers may provide additional entries to error' */
[propName: string]: any;
}

interface IGraphQLResponseErrorLocation {
line: number;
column: number;
}

interface IQuery {
__typename: "Query";
findListings: Array<IListing>;
viewListing: IListing | null;
messages: Array<IMessage>;
me: IUser | null;
}

interface IViewListingOnQueryArguments {
id: string;
}

interface IMessagesOnQueryArguments {
listingId: string;
}

interface IListing {
__typename: "Listing";
id: string;
name: string;
category: string;
description: string;
price: number;
latitude: number;
longitude: number;
amenities: Array<string>;
pictureUrl: string;
owner: IUser;
}

interface IUser {
__typename: "User";
id: string;
email: string;
name: string;
lastname: string;
roles: Array<string>;
}

interface IMessage {
__typename: "Message";
text: string;
user: IUser;
listingId: string;
}

interface IMutation {
__typename: "Mutation";
createListing: boolean;
deleteListing: boolean;
createMessage: boolean;
sendForgotPasswordEmail: boolean | null;
forgotPasswordChange: Array<IError>;
login: ILoginResponse;
logout: boolean | null;
register: Array<IError>;
subscribeToList: boolean;
}

interface ICreateListingOnMutationArguments {
input: ICreateListingInput;
}

interface IDeleteListingOnMutationArguments {
id: string;
}

interface ICreateMessageOnMutationArguments {
message: IMessageInput;
}

interface ISendForgotPasswordEmailOnMutationArguments {
email: string;
}

interface IForgotPasswordChangeOnMutationArguments {
newPassword: string;
key: string;
}

interface ILoginOnMutationArguments {
email: string;
password: string;
}

interface IRegisterOnMutationArguments {
email: string;
password: string;
name: string;
lastname: string;
}

interface ISubscribeToListOnMutationArguments {
input: ISubscribeToListInput;
}

interface ICreateListingInput {
name: string;
picture?: any | null;
category: string;
description: string;
price: number;
latitude: number;
longitude: number;
amenities: Array<string>;
}

interface IMessageInput {
text: string;
listingId: string;
}

interface IError {
__typename: "Error";
path: string;
message: string;
}

interface ILoginResponse {
__typename: "LoginResponse";
errors: Array<IError>;
sessionId: string | null;
}

interface ISubscribeToListInput {
email: string;
name: string;
lastname: string;
}

interface ISubscription {
__typename: "Subscription";
newMessage: IMessage;
}

interface INewMessageOnSubscriptionArguments {
listingId: string;
}
}

// tslint:enable
