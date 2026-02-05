import { Text } from "../atoms/Text/text";
import { ISelectExperince } from "./SelectExperince.type";
import styles from "./selectExperience.module.scss";


export const SelectExperince = ({experience}: ISelectExperince) => {
    
    return (
        <div className={styles.selectExperinceContainer} data-pt-select-experince-container>
            <Text isTitle={true} variant="secondary" >Experiência</Text>
        </div>
    )
}