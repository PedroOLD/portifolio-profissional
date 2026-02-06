import { Text } from "../../atoms/Text/text";
import { ICtaSelect } from "./CtaSelect.type";
import styles from "./cta.module.scss";

export const CtaSelect = ({children, isSelected, ...props}: ICtaSelect) => {
    return (
        <div 
            className={styles.containerCtaSelect} 
            data-pt-cta-select 
            data-pt-cta-select-selected={isSelected}
            {...props}
        >
            <Text isTitle={false} variant="secondary">{children}</Text>
        </div>
    );
}