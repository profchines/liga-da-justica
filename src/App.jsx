import React, { useEffect, useState } from "react"
import { Card } from "./components/Card";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Loading } from "./components/Loading";
import { Modal, ModalBody, ModalHeader } from "./components/Modal";
import banner from './imagens/banner2.png'
import card1 from './imagens/card1.jpg'
import card2 from './imagens/card2.jpg'
import card3 from './imagens/card3.jpg'
import card4 from './imagens/card4.jpg'
import './styles/global.css'
// http://localhost:3000/

const requisicao = [
  {
    "id": 1,
    "titulo": "Liga da Justiça",
    "imagem": card1,
    "data": "16 de novembro de 2017",
    "direcao": "Zack Snyder",
    "elenco": "Ben Affleck, Henry Cavill, Gal Gadot",
    "sinopse": "Inspirado pelas atitudes Superman, Bruce Wayne decide se reunir com Diana Prince para conseguir enfrentar um inimigo poderoso."
  },
  {
    "id": 2,
    "titulo": "Batman",
    "imagem": card2,
    "data": "18 de julho de 2008",
    "direcao": "Christopher Nolan",
    "elenco": "Christopher Bale",
    "sinopse": "Com a ajuda de Jim Gordon e Harvey Dent, Batman tem mantido a ordem na cidade de Gotham. Mas um jovem e anárquico criminoso conhecido como Coringa ganha força e decide instaurar um verdadeiro caos na cidade."
  },
  {
    "id": 3,
    "titulo": "Mulher-Maravilha",
    "imagem": card3,
    "data": "1 de junho de 2017",
    "direcao": "Patty Jenkins",
    "elenco": "Gal Gadot, Chris Pine, Connie Nielsen",
    "sinopse": "Mulher Maravilha conta a história de Diana Prince (Gal Gadot), uma guerreira poderosa que precisa ajudar o piloto Steve Trevor (Chris Pine) a vencer uma terrível guerra. Ao entrar no conflito, ela percebe o seu verdadeiro papel no mundo."
  },
  {
    "id": 4,
    "titulo": "O Homem de Aço",
    "imagem": card4,
    "data": "1 de junho de 2017",
    "direcao": "Zack Snyder",
    "elenco": "Henry Cavill, Amy Adams, Michael Shannon",
    "sinopse": "Com a iminente destruição de Krypton, seu planeta natal, Jor-El e sua mulher procuram preservar a raça enviando o filho recém-nascido para a Terra. A nave espacial da criança aterrissa na fazenda de Jonathan e Martha Kent, que o batizam de Clark e o criam como seu próprio filho."
  },
]


export function App() {

  const [segundos, setSegundos] = useState();
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState('hidden');

  useEffect(() => {

    setLoading('visible')

    setTimeout(() => {

      setCards(requisicao)
      setLoading('hidden')

    }, 1000);

    // setInterval(() => {
    //   let date = new Date()

    //   setSegundos(date.getHours() + 
    //   ':' + date.getMinutes() + ':' + date.getSeconds())

    // }, 2000)

  }, [])

  // https://github.com/profchines

  return (
    <>
      <Loading
        loading={loading}
      />

      <Header />
      <h2 style={{ margin: 15 }}>{segundos}</h2>

      <img width="100%" src={banner} />

      <h2 style={{ margin: 15 }}>Filmes</h2>

      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexWrap: 'wrap',
        }}

      >
        {
          cards.map((card) => (
            <Card
              onClick={() => { console.log('Clicou')}}
              key={card.id}
              srcImg={card.imagem}
              titulo={card.titulo}
            />
          ))
        }

      </div>

      <Footer
        nome={'seunome'}
      />

      <Modal>
        <ModalHeader>
          <h2>Titulo do modal</h2>
        </ModalHeader>
        <ModalBody>
          <p
            style={{
              fontSize: '0.8rem',
              marginBottom: 10
            }}
          >
            10/10/2010
          </p>
          <div
            style={{
              display: 'flex',
              marginBottom: 10
            }}
          >
            <p
              style={{
                fontSize: '0.8rem',
                color: '#b3b3b3'
              }}
            >
              Direção:
            </p>
            <p
              style={{
                fontSize: '0.8rem',
              }}
            >
              Direção
            </p>
          </div>
          <div
            style={{
              display: 'flex',
              marginBottom: 10
            }}
          >
            <p
              style={{
                fontSize: '0.8rem',
                color: '#b3b3b3'
              }}
            >
              Elenco:
            </p>
            <p
              style={{
                fontSize: '0.8rem',
              }}
            >
              Elenco
            </p>
          </div>
          <p
            style={{
              fontSize: '0.8rem',
            }}
          >
            sinopse
          </p>
        </ModalBody>
      </Modal>
    </>
  );
}

