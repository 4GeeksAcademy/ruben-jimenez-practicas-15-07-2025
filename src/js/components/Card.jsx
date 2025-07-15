export const Card = ({pokemon}) => {
    return (
        <div className="card" style={{width: "18rem"}}>
            
                <div className="card-body">
                    <h5 className="card-title">{pokemon.name}</h5>
                    <p className="card-text">{pokemon.type}</p>
                </div>
                <img src={`${pokemon.image}`} className="card-img-top" alt="..."/>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">Hp:{pokemon.stats.hp}</li>
                    <li className="list-group-item">Attack:{pokemon.stats.attack}</li>
                    <li className="list-group-item">Defense:{pokemon.stats.defense}</li>
                    <li className="list-group-item">Speed:{pokemon.stats.speed}</li>
                </ul>
        </div>


    )
}