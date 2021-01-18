import React from 'react'
import './Home.css';
//components
import Busca from './Busca'
import Passos from './Passos'
import Testemunho from './Testemunho'
import Footer from '../../Footer/Footer'


export default function Home() {
    return (
        <div>
            <Busca />
            <Passos />
            <Testemunho />
            <Footer />
        </div>
    )
}
