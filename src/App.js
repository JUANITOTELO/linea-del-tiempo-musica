import React from "react"
import wave from "./images/radio.svg"
import { Chrono } from "react-chrono"
import grecia from "./images/copa.png"

var images = [grecia];

const Home = () => {
  const items = [{
    title: "650 AC",
    cardTitle: "Teatro Griego",
    cardDetailedText:
    [
      "El teatro griego comenzó en el siglo VI a. C. en Atenas y \
      fue uno de los primeros expectaculos que se conocen",
      "La expresion artistica siempre ha sido importante para el bienestar humano, \
      esta era una de las cosas que los griegos siempre tenian presente."
    ],
    media: {
      type: "IMAGE",
      source: {
        url: images[0]
      },
    }
  }
];

  return (
    <div style={{
      padding: "2%"
    }}>
      <h1 textAlign="center">Linea de tiempo</h1>
      <Chrono 
        items={items} 
        mode="VERTICAL_ALTERNATING" 
        allowDynamicUpdate="true"
        theme={{
          primary: "black",
          secondary: "#EF9F55", 
      }}>
        <div className="chrono-icons">
          <img style={{width:"5%"}} src={wave} alt="image1" />
          
        </div>
      </Chrono>
      <div >
        Icons made by 
        <a href="https://www.flaticon.com/authors/bqlqn" title="bqlqn">bqlqn</a> 
        from 
        <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>
      </div>
    </div>
  )
}

export default Home;
