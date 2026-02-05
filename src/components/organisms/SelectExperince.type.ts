
export interface IExperince {
    buttonTitle: string;
    position: string,
    dataInital: string;
    dataEnd: string | "current";
    enterprise: string;
    description: string; 
}

export interface ISelectExperince {
    experience: IExperince[];
}