import ProductCard from "./ProductCard";

export default function ProductsList(props) {

	// Render function che crea un array, itera con ciclo for.of e popola array con elementi html
	// function getCards() {
	// 	let cards = [];

	// 	for (const prodotto of products) {
	// 		cards.push(<div key={prodotto.id} className="product-card">{prodotto.title} - {prodotto.type}</div>);
	// 	}

	// 	return cards;
	// }

	// Render function che restituisce direttamente il return di un map
	// function getCards() {
	// 	return products.map(prodotto => <div className="product-card">
	// 		<h3>{prodotto.title}</h3>
	// 		<img className="product-card-img" src={prodotto.src} alt={prodotto.title} />
	// 		<p>Pasta {prodotto.type} da {prodotto.time} minuti</p>
	// 	</div>)
	// }

	// Salvo il return di un map in un array d'appoggio per riutilizzo in componente
	// const cards = products.map(prodotto => <div>{prodotto.title}</div>);

	return <div>
		<h2>I nostri prodotti</h2>
		<div className="products-list">

			{/* Stampiamo le card tramite render function che restituisce array di elementi html*/}
			{/* {getCards()} */}

			{/* Stampiamo tramite variabile d'appoggio (generata iterando) che contiene array di elementi html */}
			{/* {cards} */}

			{/* {products.map(prodotto => <div className="product-card">
				<h3>{prodotto.title}</h3>
				<img className="product-card-img" src={prodotto.src} alt={prodotto.title} />
				<p>Pasta {prodotto.type} da {prodotto.time} minuti</p>
			</div>)} */}

			{props.products?.map(prodotto =>
				<ProductCard key={prodotto.id} title={prodotto.title} src={prodotto.src} time={prodotto.time} type={prodotto.type}>
					<ul style={{ marginLeft: "1rem" }}>
						<li>Pasta {prodotto.type}</li>
						<li>Cottura: {prodotto.time} minuti</li>
					</ul>
				</ProductCard>
			)}
		</div>
	</div>
}