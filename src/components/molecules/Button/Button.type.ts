import { ReactNode } from "react";
import { IIcon } from "../../atoms/Icon/icon.type";


export interface IButton {
    children: ReactNode;
    variant: "primary" | "secondary";
    iconButton?: IIcon;
}