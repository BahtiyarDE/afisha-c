import React from 'react';
import {Link} from "react-router-dom";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container">
                <div className="footer__column">
                    <div className="footer__title">О нас</div>
                    <Link to="/company" className="footer__link">О компании</Link>
                    <Link to="/contact" className="footer__link">Контакат</Link>
                </div>
                <div className="footer__column">
                    <div className="footer__title">Мы в соцетях</div>
                    <a href="https://www.facebook.com/campaign/landing.php?&campaign_id=1637278002&extra_1=s%7Cc%7C514542712464%7Ce%7Cfacebook%7C&placement=&creative=514542712464&keyword=facebook&partner_id=googlesem&extra_2=campaignid%3D1637278002%26adgroupid%3D62332989517%26matchtype%3De%26network%3Dg%26source%3Dnotmobile%26search_or_content%3Ds%26device%3Dc%26devicemodel%3D%26adposition%3D%26target%3D%26targetid%3Dkwd-541132862%26loc_physical_ms%3D1009827%26loc_interest_ms%3D%26feeditemid%3D%26param1%3D%26param2%3D&gclid=Cj0KCQjwvqeUBhCBARIsAOdt45YTf6tMeoT0mkrgU7pEG9gqG7_hUQTKb9dqNAVi_9KIKilHtlvs6e0aAj83EALw_wcB" className="footer__link">Facebook</a>
                    <a href="https://www.instagram.com/" className="footer__link">Instagram</a>
                    <a href="https://twitter.com/?lang=ru" className="footer__link">Twitter</a>
                    <a href="https://vk.com" className="footer__link">Vkontake</a>
                </div>
                <div className="footer__callback callback-footer">
                    <a href="tel:+996555444333" className="callback-footer__link">+996 (555) 444 333</a>
                    <a href="tel:+996502444333" className="callback-footer__link">+996 (502) 444 333</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
