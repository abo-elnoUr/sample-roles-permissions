import { Permission, Screens } from "../enum/role-permession.enum";

export interface Role {
    name: string;
    screens: Screens[]
    permissions: Permission[];
}