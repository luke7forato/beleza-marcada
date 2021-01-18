import React from 'react'
import image from '../../../images/makeup.png'


export default function Busca() {
    return (
        <div className="container-busca">
            <img className="image" src={image} alt=''/>
            <form className="form" action="#">
                <input type="text" id="fbusca" className="fbusca" name="fbusca"/>
                <input type="submit" className="fsubmit" value="Submit"/>
            </form>
        </div>
    )
}
