import React from 'react'
//Icon Component
import { BiCommentError } from 'react-icons/bi';
//Particular Css
import './NotExists.css'

const NotExists = () => {
    return (
        <>
            <div className="not-exist-item">
                <BiCommentError className="coment-error"/>
                <h4>Ooops!!! La página que estas buscando no existe.</h4>
            </div>
        </>
    )
}

export default NotExists
