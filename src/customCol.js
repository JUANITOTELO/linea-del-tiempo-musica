import React, { useState } from 'react';

function CustomCard(props) {
	const [estado, set_estado] = useState(false);
	const toggle = () => set_estado(!estado);
	const boton1 = (<button onClick={toggle}>Leer mas</button>);
	const boton2 = (<button onClick={toggle}>Leer menos</button>);
	return (
		<div>
			<div style={{ display: "flex", justifyContent: "center", alignItems: "center" }} >
				{(!estado && boton1)}
			</div>
			<div>
				{(estado && props.text)}
				{(estado && boton2)}
			</div>
		</div>

	);
}

export default CustomCard