import React from 'react'
//images
import imgCard1 from '../../../images/register.svg'
import imgCard2 from '../../../images/choose.svg'
import imgCard3 from '../../../images/schedule.svg'


export default function Passos() {
    return (
        <div className="container-passos">


            <div className="card">
                <img src={imgCard1} alt=""/>
                <h2 className="title">
                    Registrar
                </h2>
                <p className="description">
                    Crie uma conta com alguns cliques e comece a utilizar os nossos serviços.
                </p>
            </div>


            <div className="card">
                <img src={imgCard2} alt=""/>
                <h2 className="title">
                    Escolher
                </h2>
                <p className="description">
                    Escolhe o melhor salão da sua região através do nosso sistema de busca.
                </p>
            </div>


            <div className="card">
                <img src={imgCard3} alt=""/>
                <h2 className="title">
                    Agendar
                </h2>
                <p className="description">
                    Escolha a melhor hora para você e evite filas desnecessárias.
                </p>
            </div>
        </div>
    )
}
