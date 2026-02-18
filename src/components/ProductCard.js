export default function ProductCard(props) {

	// const prodotto = {
	// 	title: props.title || "Impossibile caricare il prodotto",
	// 	src: props.src,
	// 	time: props.time,
	// 	type: props.type
	// };

	return <div className="product-card">

		{/* {props.title ? <h3>{props.title}</h3> : <h3>Nessun titolo</h3>} */}

		{/* {props.title && <h3>{props.title}</h3>} */}

		<h3>{props.title || "Impossibile caricare il titolo"}</h3>
		<img className="product-card-img" src={props.src} alt={props.title} />
		{props.children}
	</div>

}