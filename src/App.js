import React from 'react';
import { imagen } from "./images/imgs"
import { Chrono } from "react-chrono"
import Ficha, { parrafos } from "./parrafos"


const Home = () => {

  const items = [
    {
      title: "650 AC",
      media: {
        type: "IMAGE",
        source: {
          url: imagen[1]
        },
      }
    },
    {
      title: "650 AC",
      media: {
        type: "IMAGE",
        source: {
          url: imagen[2]
        },
      }
    },
  ];
  return (
    <div style={{
      padding: "2%"
    }}>
      <h1 textAlign="center">Linea de tiempo</h1>
      <Chrono
        scrollable={{ scrollbar: false }}
        items={items}
        mode="VERTICAL_ALTERNATING"
        allowDynamicUpdate="true"
        theme={{
          primary: "black",
          secondary: "#EF9F55",
        }}>
        <div className="chrono-icons">
          <img style={{ width: "5%" }} src={imagen[0]} alt="image1" />
        </div>
        <Ficha
        titulo="Teatro Griego"
        text={parrafos[0]} 
        />
        <Ficha
        titulo="Música medieval y renacentista"
        text={parrafos[0]} 
        />
        
      </Chrono>
      {/* <div >
        Icons made by
        <a href="https://www.flaticon.com/authors/bqlqn" title="bqlqn">bqlqn</a>
        from
        <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>
      </div> */}
    </div>
  )
}

export default Home;
