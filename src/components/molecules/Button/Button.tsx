import { Text } from "../../atoms/Text/text";
import { Icon } from "../../atoms/icon/icon";
import { IButton } from "./Button.type";
import styles from "./button.module.scss"

export const Button = ({children, iconButton, variant, ...props}:IButton) => {
    return (
        <button className={styles.button} data-pt-button data-pt-button-variant={variant} {...props}>
            {iconButton && <Icon icon={iconButton.icon} size={iconButton.size} />}
            <Text isTitle={false} variant="secondary" >{children}</Text>
        </button>
    )
}