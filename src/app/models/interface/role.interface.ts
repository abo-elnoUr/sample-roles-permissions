import { Permission, Screens } from "../enum/permession.enum";

export interface Role {
    name: string;
    screens: Screens[]
    permissions: Permission[];
}