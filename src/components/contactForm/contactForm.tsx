"use client"

import styles from "./styles/form.module.css"
import { useState } from "react"; 
import SuccessMessage from "./components/SuccessMessage";
import Form from "./components/Form";

export default function ContactForm(){

    const [activeIndex, setActiveIndex] = useState(0);

    const incIndex = () => setActiveIndex(1);
    const decIndex = () => setActiveIndex(0);

    return (
        <div className={styles.container}>
            <h1 className={styles.header}>Contact Me</h1>
            <Form isActive={ activeIndex === 0}  incIndex={incIndex} />
            <SuccessMessage isActive={ activeIndex === 1} decIndex={decIndex}/>
        </div>
    );
}



