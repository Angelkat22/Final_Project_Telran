import React from 'react'
import styles from './Footer.module.css'
import Contacts from '../Contacts/Contacts'

function Footer() {
    return (
        <div className={styles.footer_section}>
            <Contacts />
                <div className={styles.map}>
                    <iframe title='googleMaps' src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Linkstra%C3%9Fe%202,%2010785,%20Berlin+(Starta%20Institute%20by%20Tel-Ranusiness%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
                    </iframe>
            </div>
        </div>
    )
}

export default Footer
