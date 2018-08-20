import * as React from "react";
export interface Props {
    children: (data: {
        logout: () => void;
    }) => JSX.Element | null;
}
export declare const LogoutController: React.SFC<Props>;
