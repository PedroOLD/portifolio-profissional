import { Text } from "../atoms/Text/text";
import { ISelectExperience } from "./SelectExperince.type";
import styles from "./selectExperience.module.scss";


export const SelectExperince = ({experience}: ISelectExperience) => {
    
    return (
        <div className={styles.selectExperinceContainer} data-pt-select-experince-container>
            <Text isTitle={true} variant="secondary" >Experiência</Text>
            <div>
                
            </div>
            <Text isTitle={false} variant="primary" >Dimio</Text>
        </div>
    )
}