import  { IText } from "./text.type";
import  styles from "./text.module.scss" 

export const Text = ({
    children,
    variant, 
    isTitle 
}: IText) => {
    return (
        <p className={styles.text} data-pt-text-variant={variant} data-pt-text-title={isTitle}>
            {children}
        </p>
    ) 
}