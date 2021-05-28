import React from 'react';
import { imagen } from "./images/imgs"
import { Chrono } from "react-chrono"
import Ficha, { parrafos } from "./parrafos"
import Epoca from "./images/imgs";

const Home = () => {

  const items = [
    Epoca("650 AC", imagen[1]),
    Epoca("500 DC", imagen[2]),
    Epoca("1600 DC", imagen[3]),
    Epoca("1750 DC", imagen[4]),
    Epoca("1774 DC", imagen[5]),
    Epoca("1800 DC", imagen[6]),
    Epoca("1830 DC", imagen[7]),
    Epoca("1900 DC", imagen[8]),
    Epoca("2000 DC", imagen[9]),
    Epoca("Ahora", imagen[10])
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
        text={parrafos[1]} 
        />
        <Ficha
        titulo="El barroco"
        text={parrafos[2]}
        />
        <Ficha 
        titulo="El clasicismo"
        text={parrafos[3]}
        />
        <Ficha
        titulo="Ópera Buffa y el singspiel"
        text={parrafos[4]}
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
