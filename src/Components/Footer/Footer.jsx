import React from 'react';
import footercss from './Footer.module.css';
import twitterIcon from '../../assets/twitter_icon.png';
import facebookIcon from '../../assets/facebook_icon.png';
import linkedin from '../../assets/linkedin_icon.png';

function Footer() {
    return (
        <div className={footercss.container1}>
            <div className={footercss.container}>
                <div className={footercss.container2}>
                <div className={footercss.logo}>
                    <h1>Tomato.</h1>
                    <div className={footercss.logoSection}>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur sint dolorum nesciunt odio culpa facere cupiditate autem cumque cum libero, nobis ipsam dolor, velit officiis voluptatibus dicta ad eum beatae deleniti repellat quod vitae. Deserunt odit veniam doloribus accusantium nesciunt eaque distinctio eum.</p>
                        <div className={footercss.socialMedia}>
                            <img src={facebookIcon} />
                            <img src={twitterIcon} />
                            <img src={linkedin} />
                        </div>
                    </div>
                </div>
                <div className={footercss.navSection}>
                    <h1>COMPANY</h1>
                    <div className={footercss.navlink}>
                        <ul>
                            <li>Home</li>
                            <li>About us</li>
                            <li>Delivery</li>
                            <li>Privacy policy</li>
                        </ul>
                    </div>
                </div>
                <div className={footercss.contactSection}>
                    <h1>GET IN TOUCH</h1>
                    <div className={footercss.contact}>
                        <ul>
                            <li>+1-212-4560-7890</li>
                            <li>Contact@ckaushik593.dev</li>
                        </ul>
                    </div>
                </div>
                </div>
                <hr />
                <div className={footercss.copyrigh}>
                    <p>Copyright2024&#169;Tomato.com-All right reserved</p>
                </div>
            </div>
        </div>
    )
}

export default Footer
