import React from 'react';

const Contact = () => {
    return (
        <div className="contact">
            <div className="contact__container">
                <div className="contact__title title">Контакт</div>
                <div className="contact__column">
                    <div className="contact__link-div">
                        <a href="https://web.telegram.org/k/" className="contact__link _icon-telegram"><span>+996 (555) 444 333</span></a>
                    </div>
                    <div className="contact__link-div">
                        <a href="https://www.whatsapp.com/?lang=ru" className="contact__link _icon-whatsapp"><span>+996 (502) 444 333</span></a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
