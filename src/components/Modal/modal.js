import React, { useState, useEffect}from "react";
import "./modal.css"
import { useCookies } from "react-cookie";

import MovieCont from "../MovieCont/movieCont"
import SideCont from "../SideCont/sideCont"

const Modal = () =>{
    
    const [cookies, setCookie] = useCookies(['nomination']);
    const [nominationArr, setNominationArr] = useState(cookies.nomination || undefined);

    useEffect(() => {
        setCookie('nomination', nominationArr, {path: '/'})
    }, [nominationArr]);

    return<div className="modal-cont">
       <SideCont nominationArr={nominationArr} setNominationArr={setNominationArr}/>
       <MovieCont nominationArr={nominationArr} setNominationArr={setNominationArr}/>
    </div>
}

export default Modal;