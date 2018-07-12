export interface Error {
    path: string;
    message: string;
}
export declare const normalizeErros: (errors: Error[]) => {
    [key: string]: string;
};
