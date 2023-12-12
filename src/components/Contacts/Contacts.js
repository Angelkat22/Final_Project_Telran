import React from 'react'
import styles from './Contacts.module.css'
import { NavLink } from 'react-router-dom'
import iconInsta from './assets/Insta.png'
import iconWhatsApp from './assets/WhatsApp.png'

function Contacts() {
    return (
        <div className={styles.contact_section}>
            <div className={styles.contacts_wrapper}>
                <div className={styles.phone_media}>
                    <p className={styles.contacts_title}>Contacts</p>

                    <p className={styles.contacts_phone}>+49 999 999 99 99
                    </p>
                    
                    <div className={styles.soc_media}>
                        <div className={styles.insta}>
                        <NavLink to='https://www.instagram.com/startainstitute'>
                            <img src={iconInsta} className={styles.soc_media_icon} alt='instagram'></img>
                            <p>instagram</p>
                            </NavLink>
                        </div>
                        <div className={styles.whatsapp}>
                            <NavLink to='https://WA.ME/+491717788664' target='_blank'>
                                <img src={iconWhatsApp} className={styles.soc_media_icon} alt='whatsApp'></img>
                                <p>WhatsApp</p>
                            </NavLink>
                            
                        </div>
                    </div>
                </div>
                <div className={styles.address}>
                    <p className={styles.contacts_title}>Address</p>
                    <NavLink to='https://tel-ran.de/'>
                        <p className={styles.contacts_adress}>Linkstraße 2, 8 OG, 10785, </p>
                        <span className={styles.contacts_adress}>Berlin, Deutschland</span>
                    </NavLink>
                    <p className={styles.schedule}>Working Hours:</p>
                    <div className={styles.hours}>24 hours a day</div>
                </div>
            </div>
        </div>  
    )
}

export default Contacts