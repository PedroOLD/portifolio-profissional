import { HTMLAttributes ,ReactNode } from "react";

export interface ICtaSelect extends HTMLAttributes<HTMLDivElement> {
    children: ReactNode;
    isSelected: boolean;
}