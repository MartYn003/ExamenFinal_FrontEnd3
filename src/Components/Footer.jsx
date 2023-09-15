import React from 'react'
import '../Styles/Footer.css'

const Footer = () => {
    return (
        <footer className='Footer'>

            <div className='RedBar'>
                <p>Powered by</p>
            </div>
            
            <div className='FOOT-img'>
                <div className='DH-Logo'>
                    <img src="/images/DH.png" alt='DH-logo' />
                </div>
                <div className='Redes'>
                    <img src="/images/ico-facebook.png" alt='Facebook-logo' />
                    <img src="/images/ico-instagram.png" alt='Instagram-logo' />
                    <img src="/images/ico-tiktok.png" alt='Tiktok-logo' />
                    <img src="/images/ico-whatsapp.png" alt='Whatsapp-logo' />
                </div>
            </div>

        </footer>
    )
}

export default Footer