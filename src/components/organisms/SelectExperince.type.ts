import { ICtaSelect } from "../molecules/CtaSelect/CtaSelect.type";

export interface IExperience {
    buttonTitle: string;
    position: string,
    dataInital: string;
    dataEnd: string | "current";
    enterprise: string;
    description: string; 
}

export interface ISelectExperience {
    experience: IExperience[];
    title: string;
}