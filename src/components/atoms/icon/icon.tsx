import { IIcon } from "./icon.type"
import styles from "./icon.module.scss";

export const Icon = ({
    size = "auto", 
    icon
}: IIcon) => {
    return (
        <svg 
            className={styles.icon}
            data-pt-icon
            width={size} 
            height={size} 
            aria-hidden="true"
            >
            <use href={`/icons.svg#${icon}`} />
        </svg>
    )
}