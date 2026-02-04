import { Text } from "@/src/components/atoms/Text/text";
import styles from "./styleguide.module.scss";
import { Icon } from "@/src/components/atoms/icon/icon";
import { Button } from "@/src/components/molecules/Button/Button";

export default function documentationComponents() {
    return (
        <div className={styles.containerstyleguide}>
            <section>
                <h1>Component Button (cta) - Molecula</h1>
                <p>Component de Button  base</p>
                <div  className={styles.containerContentComponent}>
                    <div className={styles.containerComponent}>
                        <h3>Button whithout icon primary</h3>
                        <Button variant="primary">Test Button</Button>
                    </div>

                    <div className={styles.containerComponent}>
                        <h3>Button whith icon primary</h3>
                        <Button variant="primary" iconButton={{icon: "icon-default", size: 30}}>Test Button</Button>
                    </div>

                    <div className={styles.containerComponent}>
                        <h3>Button whithout icon secondary</h3>
                        <Button variant="secondary">Test Button</Button>
                    </div>

                    <div className={styles.containerComponent}>
                        <h3>Button whith icon secondary</h3>
                        <Button variant="secondary" iconButton={{icon: "icon-default", size: 30}}>Test Button</Button>
                    </div>
                </div>
            </section> 


            <section>
                <h1>Component Icon - Atom</h1>
                <p>Component de Icon  base</p>
                <div  className={styles.containerContentComponent}>
                    <div className={styles.containerComponent}>
                        <Icon size={30} icon="icon-default" />
                    </div>
                </div>
            </section> 


            <section>
                <h1>Component text - Atom</h1>
                <p>Component de texto  base</p>
                <div  className={styles.containerContentComponent}>
                    <div className={styles.containerComponent}>
                        <h3>Default text primary</h3>
                        <Text isTitle={false} variant="primary">My text exemple primary default</Text>
                    </div>
                    <div className={styles.containerComponent}>
                        <h3>Default text secondary</h3>
                        <Text isTitle={false} variant="secondary">My text exemple secondary default</Text>
                    </div>
                    <div className={styles.containerComponent}>
                        <h3>Title true primary</h3>
                        <Text isTitle={true} variant="primary">My Title exemple primary</Text>
                    </div>
                    <div className={styles.containerComponent}>
                        <h3>Title true secondary</h3>
                        <Text isTitle={true} variant="secondary">My Title exemple secondary</Text>
                    </div>
                </div>
            </section> 
        </div>
    )
}