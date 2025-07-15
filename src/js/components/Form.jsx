import { useEffect, useState } from "react"
import { Pokemon } from "./Pokemon"

export const Form = ({ pedirLista, }) => {
    const [id, setId] = useState("")
    const [name, setName] = useState("")
    const [image, setImage] = useState("")
    const [type, setType] = useState("")
    const [stats, setStats] = useState({})

    const [pokemonList, setPokemonList] = useState(Pokemon)


    const handleSumit = (e) => {
        e.preventDefault();
        const newPokemon = {
            id,
            name,
            image,
            type: type.split(),
            stats,
        }
        setPokemonList([...pokemonList, newPokemon])
        setId("")
        setName("")
        setImage("")
        setType("")
        setStats({})

    }
    useEffect(() => { pedirLista(pokemonList) }, [pokemonList])




    return (
        <form onSubmit={handleSumit} className="" >
            <label htmlFor="id" >ID:</label>
            <input type="text" className="form-label" name="id" onChange={(e) => setId(e.target.value)} placeholder="ID:" />
            <label htmlFor="name"  >Name: </label>
            <input type="text" className="form-label" name="name" onChange={(e) => setName(e.target.value)} placeholder="Name:" />
            <label htmlFor="image" >Image:</label>
            <input type="text" className="form-label" name="image" onChange={(e) => setImage(e.target.value)} placeholder="Image:" />
            <label htmlFor="type" >Type:</label>
            <input type="text" className="form-label" name="type" onChange={(e) => setType(e.target.value)} placeholder="Type:" />
            <h4>Stats</h4>
            <label htmlFor="" >Hp:</label>
            <input type="text" className="form-label" name="hp" onChange={(e) => setStats(prev => ({ ...prev, [e.target.name]: e.target.value }))} placeholder="Hp:" />
            <label htmlFor="" >Attack:</label>
            <input type="text" className="form-label" name="attack" onChange={(e) => setStats(prev => ({ ...prev, [e.target.name]: e.target.value }))} placeholder="Attack:" />
            <label htmlFor="" >Defense:</label>
            <input type="text" className="form-label" name="defense" onChange={(e) => setStats(prev => ({ ...prev, [e.target.name]: e.target.value }))} placeholder="Defense:" />
            <label htmlFor="" >Speed:</label>
            <input type="text" className="form-label" name="speed" onChange={(e) => setStats(prev => ({ ...prev, [e.target.name]: e.target.value }))} placeholder="Speed:" />
            <button type="submit" class="btn btn-primary">Guardar</button>

        </form>

    )
}