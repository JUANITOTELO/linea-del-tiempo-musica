import grecia from "./grecia.jpg"
import medieval from "./medieval.jpg"
import barroco from "./barroco.jpg";
import clasicismo from "./clasicismo.jpg";
import buffa from "./buffa.jpg";
import romanticismo from "./romanticismo.jpg";
import nacionalismo from "./nacionalismo.jpg";
import siglo_xx from "./siglo_xx.jpg";
import siglo_xxi from "./siglo_xxi.jpg";
import hoy from "./hoy.jpg";
import wave from "./radio.svg";

function Epoca(title, imagen) {
    return {
        title: title,
        media: {
          type: "IMAGE",
          source: {
            url: imagen
          },
        }
      };
}
export default Epoca

export var imagen = [
                        wave, grecia, medieval, 
                        barroco, clasicismo, buffa, 
                        romanticismo, nacionalismo, siglo_xx,
                        siglo_xxi, hoy
                    ];

