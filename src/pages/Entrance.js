import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getAbout} from "../redux/actions/actions";
import Card from "../components/Card";

const Entrance = () => {

    const dispatch = useDispatch()
    const {allItems} = useSelector(s => s)
    console.log(allItems)
    useEffect(() => {
        dispatch(getAbout())
    }, [dispatch])

    return (
        <div className="all">
            <div className="all__container">
                <div className="title">Все мироприятия</div>
                <div className="all__card">
                    {
                        allItems.map(el => (
                            <Card key={el.id} el={el}/>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default Entrance;
