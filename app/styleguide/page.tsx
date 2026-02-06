import { Text } from "@/src/components/atoms/Text/text";
import styles from "./styleguide.module.scss";
import { Icon } from "@/src/components/atoms/Icon/icon";
import { Button } from "@/src/components/molecules/Button/Button";
import { Imagept } from "@/src/components/atoms/Image/Image";
import { CtaSelect } from "@/src/components/molecules/CtaSelect/CtaSelect";
import { SelectExperince } from "@/src/components/organisms/SelectExperience";
import { IExperience } from "@/src/components/organisms/SelectExperince.type";

const mockedSelecExperience: IExperience[] = [
    {
        buttonTitle: "Corebiz",
        dataInital: "20/01/2026",
        dataEnd: "01/01/2028",
        description: "fiz isso isso e isso",
        enterprise: "Corebiz",
        position: "Frontend develop"
    },
    {
        buttonTitle: "Whirpool",
        dataInital: "20/01/2026",
        dataEnd: "01/01/2028",
        description: "fiz isso isso e isso",
        enterprise: "Corebiz",
        position: "Frontend develop"
    },
    {
        buttonTitle: "Hibrido",
        dataInital: "20/01/2026",
        dataEnd: "01/01/2028",
        description: "fiz isso isso e isso",
        enterprise: "Corebiz",
        position: "Frontend develop"
    }
]

export default function documentationComponents() {
    return (
        <div className={styles.containerstyleguide}>
            <section>
                <h1>Component Select Experince - Organismo</h1>
                <p>Experince</p>
                <div  className={styles.containerContentComponent}>
                    <div className={styles.containerComponent}>
                        <h3>Select Experince</h3>
                        <SelectExperince experience={mockedSelecExperience} />
                    </div>
                </div>
            </section>

            <section>
                <h1>Component Cta select (cta) - Molecula</h1>
                <p>Component Cta select</p>
                <div  className={styles.containerContentComponent}>
                    <div className={styles.containerComponent}>
                        <h3>CtaSelect</h3>
                        <CtaSelect isSelected={false}>Test</CtaSelect>
                    </div>

                    <div className={styles.containerComponent}>
                        <h3>CtaSelect</h3>
                        <CtaSelect isSelected={true}>Test</CtaSelect>
                    </div>
                </div>
            </section> 

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
                <h1>Component Image - Atom</h1>
                <p>Component de image</p>
                <div  className={styles.containerContentComponent}>
                    <div className={styles.containerComponent}>
                        <h3>Image test with width and height</h3>
                        <Imagept alt="imagem test" src="https://picsum.photos/id/237/200/300" width={200} height={300} />
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