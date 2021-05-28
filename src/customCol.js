import React, { useState, useRef } from 'react';
function CustomCard(props) {
	const [estado, set_estado] = useState(false);
	const toggle = () => set_estado(!estado);
	const boton1 = (<button onClick={toggle}>Leer más</button>);
	const boton2 = (<button onClick={toggle}>Leer menos</button>);
	const parentRef = useRef();
	if (parentRef.current) {
		console.log(parentRef.current.scrollHeight);
	}
	return (
		<div className="content-parent" ref={parentRef}>
			<div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
				{(!estado && boton1)}
			</div>
			<div className="openContainer">
				{(estado && props.text)}
				<div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
					{(estado && boton2)}
				</div>
			</div>
		</div>

	);
}

export default CustomCard