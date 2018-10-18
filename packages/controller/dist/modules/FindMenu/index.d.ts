import { FindMenusQuery_findMenus, DeleteMenuMutationVariables } from "../../schemaTypes";
export declare const findMenusQuery: any;
export declare const deleteMenuMutation: any;
export interface WithFindMenus {
    menus: FindMenusQuery_findMenus[];
    loading: boolean;
}
export interface WithDeleteMenuProps {
    deleteMenu: (variables: DeleteMenuMutationVariables) => void;
}
export declare const withFindMenus: any;
