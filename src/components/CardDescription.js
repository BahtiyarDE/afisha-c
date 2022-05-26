import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faLocationDot, faArrowUpFromBracket, faEye ,faClock} from '@fortawesome/free-solid-svg-icons'
import {Link} from "react-router-dom";


const CardDescription = ({el}) => {
    const month = el.time.slice(5, 7)
    const day = el.time.slice(8, 10)
    const clock = el.time.slice(11, 16)
    const setMonth = month ===
    '01' ? 'ЯНВАРЬ' : month === '02' ? 'ФЕВРАЛЬ' :
        month === '03' ? 'МАРТ' : month === '04' ? 'АПРЕЛЬ' : month === '05' ? 'МАЙ' :
            month === '06' ? 'ИЮНЬ' : month === '07' ? 'ИЮЛЬ' : month === '08' ? 'АВГУСТ' :
                month === '09' ? 'СЕНТЯБРЬ' : month === '10' ? 'ОКТЯБРЬ' : month === '11' ? 'НОЯБРЬ' : 'ДЕКАБРЬ'
    const map = `https://www.google.ru/maps/search/${el.address},+%D0%91%D0%B8%D1%88%D0%BA%D0%B5%D0%BA/@42.8921116,74.576418,15z/data=!3m1!4b1`

    return (
        <div className="description">
            <div className="description__container">
                <div className="title description__title">{el.name}</div>
                <div className="description__column col-6 col-12">
                    <div className="description__img-div">
                        <img src={el.img} alt="card" className="description__img"/>
                    </div>
                    <div className="description__card card-description">
                        <div className="card-description__row">
                            <div className="_icon-calender card-description__calendar"><span>{day}</span></div>
                            <div className="card-description__title">{`${day} ${setMonth} ${clock}`}</div>
                        </div>
                        <div className="card-description__row">
                            <div className="card-description__currency">C</div>
                            <div className="card-description__title">{`${el.price} сом`}</div>
                        </div>
                        <div className="card-description__row">
                            <FontAwesomeIcon icon={faClock} className="card-description__clock"></FontAwesomeIcon>
                            <div className="card-description__text"><span className="card-description__title">Неизвестно</span></div>
                        </div>
                        <div className="">
                            <a href={map} className="card-description__row">
                                <FontAwesomeIcon icon={faLocationDot} className='card-description__location'></FontAwesomeIcon>
                                <div className="card-description__text">{el.address}</div>
                            </a>
                        </div>
                        <div className="card-description__row">
                            <FontAwesomeIcon icon={faArrowUpFromBracket} className="card-description__share"/>
                            <div className="card-description__text">Поделиться</div>
                        </div>
                        <div className="card-description__row">
                            <FontAwesomeIcon icon={faEye} className="card-description__eye"/>
                            <div className="card-description__text">Количества просмотров: <span className="card-description__watch">{el.fond}</span></div>
                        </div>
                        <div className="card-description__row">
                            <Link to="/order" className="card-description__link">ЗАБРОНИРОВАТЬ</Link>
                        </div>
                    </div>
                </div>
                <div className="title description__title">Описание</div>
                <div className="description__subtitle">{el.description}</div>
            </div>
        </div>
    );
};

export default CardDescription;
