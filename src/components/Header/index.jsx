import React, { useState } from 'react'
import './styles.css'

export const Header = () => {

    const [titulo, setTitulo] = useState('Liga da Justiça')

    function handleClickButton() {
        setTitulo('Filmes da Liga')
    }

    return (
        <header
            className='header'
        >
            <h1>{titulo}</h1>
            <button onClick={() => { handleClickButton() }}>Clique aqui</button>
        </header>
    )
}