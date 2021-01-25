import React from 'react'
//Icon Component
import { BiCommentError } from 'react-icons/bi';
//Particular Css
import './NotExists.css'

const NotExists = ({title}) => {
    return (
        <>
            <div className="not-exist-item">
                <BiCommentError className="coment-error"/>
                <h4>{title}</h4>
            </div>
        </>
    )
}

export default NotExists
