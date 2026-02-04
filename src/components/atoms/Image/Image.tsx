import Imagenext from "next/image";
import { IImagept } from "./Image.type";
import styles from "./image.module.scss";

export const Imagept= ({src, alt, width, height, ...props}: IImagept) => {

    return (
        <Imagenext 
            className={styles.imagept} 
            data-pt-imagpt 
            src={src} 
            alt={alt}
            {...props}
            {...(width && {width})} 
            {...(height && {height})}
          />
    )
}