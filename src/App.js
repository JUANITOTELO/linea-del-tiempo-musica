import React from 'react';
import { imagen } from "./images/imgs"
import { Chrono } from "react-chrono"
import Ficha, { parrafos } from "./parrafos"
import Epoca from "./images/imgs";
import "./App.css";

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
    Epoca("Ahora", imagen[10])
  ];
  return (
    <div>
      <div style={{
        margin: "0.9rem"
      }}>
        <h1>Linea de tiempo</h1>
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
            <img style={{ width: "5%" }} src={imagen[0]} />
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
            titulo="Epoca barroco"
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
          <Ficha
            titulo="El Romanticismo"
            text={parrafos[5]}
          />
          <Ficha
            titulo="Nacionalismo romántico"
            text={parrafos[6]}
          />
          <Ficha
            titulo="Era industrial"
            text={parrafos[7]}
          />
          <Ficha
            titulo="Actualidad"
            text={parrafos[8]}
          />

        </Chrono>
      </div>
      <div className="Referencia">
        <blockquote>
          <p><strong>Hecho por:</strong></p>
          <p><em>Juan David Martinez Mercado</em></p>
          <p><strong><a href="https://github.com/JUANITOTELO" target="_blank">GitHub</a></strong></p>
        </blockquote>
      </div>
    </div>

  )
}

export default Home;
