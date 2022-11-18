import React from 'react'

export const Footer = (props) => {
    return (
        <footer
            style={{
                backgroundColor: '#0d6efd',
                paddingTop: 15,
                paddingBottom: 15,
                marginTop: 10,
                color: '#fff',
                textAlign: 'center'
            }}
        >
            <p>{`Desenvolvido por ${props.nome} - 2022`}</p>
        </footer>
    )
}