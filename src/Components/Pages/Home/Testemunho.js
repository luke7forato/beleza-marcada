import React, { useState } from 'react'
import { TestemunhoItem } from './TestemunhoItem'
import { Testemunhos } from './Testemunhos'


export default function Testemunho() {
    
    const [index, setIndex] = useState(0);

    const nextSlide = () => {
        if(index === Testemunhos.length -1) {
            setIndex(0);
        } else {
            setIndex((prev) => prev + 1)
        }
    }

    const prevSlide = () => {
        if(index === 0) {
            setIndex(Testemunhos.length -1);
        } else {
            setIndex((prev) => prev - 1)
        }
    }

    return (
        <div className="slider">

            <TestemunhoItem 
            paragrafo={Testemunhos[index].paragrafo} 
            nome={Testemunhos[index].nome}
            cargo={Testemunhos[index].cargo}
            foto={Testemunhos[index].foto}
            />



            <div className="buttons">
                <div className="next" onClick={nextSlide}></div>
                <div className="prev" onClick={prevSlide}></div>
            </div>

        </div>
            
    )
}
