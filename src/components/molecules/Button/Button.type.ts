import { ReactNode } from "react";
import { IIcon } from "../../atoms/icon/icon.type";


export interface IButton {
    children: ReactNode;
    variant: "primary" | "secondary";
    iconButton?: IIcon;
}