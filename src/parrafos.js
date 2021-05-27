import CustomCard from "./customCol.js";
function Ficha(props) {
    return (
    <div>
        <h3><strong>{props.titulo}</strong></h3>
        <CustomCard text={props.text} />
    </div>);

}
export default Ficha

export var parrafos =
    [

        <div>
            <div>El teatro griego comenz&oacute; en el siglo VI a. C. en Atenas y fue uno de los primeros expectaculos que se conocen.</div>
            <div>
                <div>La expresi&oacute;n art&iacute;stica siempre ha sido importante para el bienestar humano, esta era una de las cosas que los griegos siempre ten&iacute;an presente, tanto as&iacute; que crearon varias teor&iacute;as, estas siempre fueron inspiradas en los dioses Apolo y Dionisio.</div>

                <h4><strong>Modos griegos</strong></h4>
                <p>Los modos griegos son sucesiones de notas los cuales dependiendo su orden estos expresan diferentes sentimientos y tienen los siguientes nombres seg&uacute;n el orden de sus notas:</p>
                <ul>
                    <li>D&oacute;rico</li>
                    <li>Frigio</li>
                    <li>Lidio</li>
                    <li>Mixolidio</li>
                </ul>
                <h4><strong>Musas</strong></h4>
                <img src="https://sobregrecia.com/files/Musas.jpg" />
                <p>En la mitolog&iacute;a griega las musas eran divinidades femeninas. Para los escritores m&aacute;s antiguos, eran las diosas inspiradoras de la m&uacute;sica, en ellas representan los siguientes atributos:</p>
                <ul>
                    <li>Lirica</li>
                    <li>Drama</li>
                    <li>Comedia</li>
                    <li>Danza Coral</li>
                    <li>Astronomia</li>
                    <li>Historia</li>
                    <li>Artes</li>
                    <li>M&uacute;sica</li>
                    <li>Oficios visuales</li>
                </ul>
                <h4><strong>Simposios dionisiacos y apolinios</strong></h4>
                <p>Eran reuniones donde dependiendo cual fuera (dionisiaca o apolinia) eran para charlar y divertirse, cantar y tocar instrumentos ya fueran liras y cuerdas en las apolinias o tambores y estridentes en las dionisiacas; en estas reuniones se discutian temas de ciencias y m&uacute;sica.</p>
                <p><strong>Personajes</strong></p>
                <p>Existieron muchos autores que hicieron parte de la historia del teatro musical de grecia, estos fueron Safo de lesbo, Esquilo, Sofocles, euripides y demas, consideras poetas.</p>
            </div>
        </div>,
        
    ];