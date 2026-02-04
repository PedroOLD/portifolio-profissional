import { ReactNode } from "react";

export interface IText {
    children: ReactNode,
    variant: 'primary' | 'secondary',
    isTitle: boolean
}