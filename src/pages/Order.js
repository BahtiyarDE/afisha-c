import React from 'react';

const Order = () => {
    return (
        <div className="order">
            <div className="order__container">
                <div className="title order__title">Забронировать</div>
                <div className="order__column">
                    <div className="order__row">
                        <div className="order__subject">Имя<span>*</span></div>
                        <input type="text" className="order__input"/>
                    </div>
                    <div className="order__row">
                        <div className="order__subject">Фамиля<span>*</span></div>
                        <input type="text" className="order__input"/>
                    </div>
                    <div className="order__row">
                        <div className="order__subject">Телефон<span>*</span></div>
                        <input type="text" className="order__input"/>
                    </div>
                </div>
                <div className="order__button-div">
                    <button type="submit" className="order__button">Отправить</button>
                </div>
            </div>
        </div>
    );
};

export default Order;
