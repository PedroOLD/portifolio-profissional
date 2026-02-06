"use client"

import { useState } from "react";
import { Text } from "../atoms/Text/text";
import { CtaSelect } from "../molecules/CtaSelect/CtaSelect";
import { ISelectExperience } from "./SelectExperince.type";
import styles from "./selectExperience.module.scss";


export const SelectExperince = ({experience}: ISelectExperience) => {
    
    const [currentExperienceActive, setCurrentExperienceActive] = useState<number>(0);

    return (
        <div className={styles.selectExperinceContainer} data-pt-select-experince-container>
            <Text isTitle={true} variant="secondary" >Experiência</Text>
            <div>
                {experience.map((current,index) => (
                    <CtaSelect 
                        key={index} 
                        isSelected={false} 
                        onClick={() => setCurrentExperienceActive(index)}
                    >
                        {current.buttonTitle}
                    </CtaSelect>   
                ))}
            </div>
            <Text isTitle={false} variant="primary">{experience[currentExperienceActive].enterprise}</Text>
            <Text isTitle={false} variant="primary">{experience[currentExperienceActive].description}</Text>
        </div>
    )
}