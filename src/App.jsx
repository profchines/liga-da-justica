import React, { useEffect, useState } from "react"
import { Card } from "./components/Card";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Loading } from "./components/Loading";
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
    "titulo": "Liga da justiça",
    "imagem": card1
  },
  {
    "id": 2,
    "titulo": "Batman",
    "imagem": card2
  },
  {
    "id": 3,
    "titulo": "Mulher Maravilha",
    "imagem": card3
  },
  {
    "id": 4,
    "titulo": "Super Man",
    "imagem": card4
  },
]

export function App() {

  const [segundos, setSegundos] = useState();
  const [cards, setCards] = useState([]);

  useEffect(() => {

    setTimeout(() => {
      setCards(requisicao)
    }, 2000);

    // setInterval(() => {
    //   let date = new Date()

    //   setSegundos(date.getHours() + 
    //   ':' + date.getMinutes() + ':' + date.getSeconds())

    // }, 2000)

  }, [])

  // https://github.com/profchines

  return (
    <>
      <Header />
      <Loading />
      <h2 style={{ margin: 15 }}>{segundos}</h2>

      <img width="100%" src={banner} />

      <h2 style={{ margin: 15 }}>Filmes</h2>

      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexWrap: 'wrap'
        }}

      >
        {
          cards.map((card) => (
            <Card
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
    </>
  );
}

