import React from "react";
import { useState } from "react"
//include images into your bundle
import { Form } from "./Form";
import { Card } from "./Card";
//create your first component
const Home = () => {
	const [listaFinal, setlistaFinal] = useState([])
	const pedirLista = (listaPokemones) => {
		setlistaFinal(listaPokemones)
	}
	return (
		<>
			<Form pedirLista={pedirLista} ></Form>
			{
				listaFinal.map(pokemon => (
					<Card pokemon={pokemon}></Card>))
			}


		</>
	);
};

export default Home;