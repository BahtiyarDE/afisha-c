import {React, useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getAbout} from "../redux/actions/actions";
import CardDescription from "./CardDescription";

const CardDetails = () => {
    const dispatch = useDispatch()
    const {allItems} = useSelector(s => s)
    console.log(allItems)
    useEffect(() => {
        dispatch(getAbout())
    }, [dispatch])
    return (
        <div>
            {
                allItems.map(el => (
                    <CardDescription key={el.id} el={el}/>
                )).slice(0, 1)
            }
        </div>
    );
};

export default CardDetails;
