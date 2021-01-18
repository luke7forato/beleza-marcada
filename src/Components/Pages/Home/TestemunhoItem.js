import React from 'react'

export function TestemunhoItem(props) {
    return (
        <div className="slide slide-1">
                <div className="slide-text">
                    <p className="testimonial-text">
                        {props.paragrafo}
                    </p>
                    <p className="author-text">{props.nome}
                    <span>{props.cargo}</span></p>
                </div>

                <div className="slide-img">
                    <img src={props.foto} alt="img"/>
                </div>
            </div>
    )
}
