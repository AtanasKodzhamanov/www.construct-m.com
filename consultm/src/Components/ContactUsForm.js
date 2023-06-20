import React from 'react'
import styles from './ContactUsForm.module.css'


const ContactUsForm = () => {
    return (
        <div className={styles.contactForm}>
            <div className={styles.infoBox}>
                <h1>Get in touch</h1>
                <h3>Don't hesitate to contact us</h3>
                <ul>
                    <li> Phone: +91 1234567890</li>
                    <li> Email: abv.bg </li>
                    <li> Address: 123, abc, xyz</li>
                </ul>
            </div>
            <div className={styles.inputBox}>
                <h1>Message us now</h1>
                <div className={styles.nameEmail}>
                    <div>
                        <h3>Name</h3>
                        <input type="text" name="" required="required" />
                    </div>
                    <div>
                        <h3>Email</h3>
                        <input type="text" name="" required="required" />
                    </div>
                </div>
                <h3>Subject</h3>
                <input type="text" name="" required="required" />
                <h3>Message</h3>
                <input type="text" name="" required="required" />

                <button>Send</button>
            </div>
        </div>
    )
}

export default ContactUsForm
