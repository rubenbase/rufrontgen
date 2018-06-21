import * as React from "react";
interface Props {
    children: (data: {
        submit: (values: any) => Promise<null>;
    }) => JSX.Element | null;
}
export declare class RegisterController extends React.PureComponent<Props> {
    submit: (values: any) => Promise<null>;
    render(): JSX.Element | null;
}
export {};
