import React, { useState } from "react";
import styles from "./ContactUsForm.module.css";

const ContactForm = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");

    const onSubmit = (event) => {
        event.preventDefault();

        if (!isValidEmail(email)) {
            alert("Invalid email address");
            return;
        }

        if (message.length > 1000) {
            alert("Message exceeds the 1000 characters limit");
            return;
        }

        console.log({ name, email, subject, message });
        setName("");
        setEmail("");
        setSubject("");
        setMessage("");
    };

    const isValidEmail = (email) => {
        const re = /^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,7}$/;
        return re.test(String(email).toLowerCase());
    }

    return (
        <div className={styles['contact-form']}>
            <div className={styles['info-box']}>
                <h1>Contact us</h1>
                <ul>
                    <li> <h2>EMAIL: </h2 ><p>placeholder@gmail.com </p></li>
                    <li> <h2>PHONE: </h2 ><p>+ 324 221 4214 </p></li>
                    <li> <h2>ADDRESS: </h2 ><p>address, postcode, street, number </p></li>
                </ul>
            </div>

            <div className={styles['input-box']}>
                <h1>Message us now</h1>
                <form onSubmit={onSubmit}>
                    <div className={styles['form-input-content']}>
                        <div className={styles['form-input-fields']}>
                            <div>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="NAME"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </div>
                            <div>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="EMAIL"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <div>
                                <input
                                    type="text"
                                    name="subject"
                                    placeholder="SUBJECT"
                                    value={subject}
                                    onChange={(e) => setSubject(e.target.value)}
                                />
                            </div>
                            <div>
                                <textarea
                                    name="message"
                                    placeholder="MESSAGE"
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className={styles['captcha-button']}>
                            {/* Success/failure message */}
                            <button className={styles['submit-button']} type="submit"><h3>SEND MESSAGE</h3></button>
                            {/* CAPTCHA*/}
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ContactForm;
