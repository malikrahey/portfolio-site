import React from 'react';


export default function RoundedIcon(props) {



    return(
        <div className="rounded-icon">
            <img src={props.src} alt={props.alt} a={props.a}/>
        </div>
    );

}