import React from "react";
import '../Styles/Card.css'
import { Link } from "react-router-dom";
import { useContextGlobal } from "./utils/global.context";

const Card = ({ dentist }) => {

    const {state, dispatch} = useContextGlobal()

    const addFav = () => {

        // Aqui iria la logica para agregar la Card en el localStorage
        if (!state.favs.some((fav) => fav.id === dentist.id)) {
            dispatch({type: 'ADD_FAV', payload: dentist})

        }

    }

    return (
        <div className="card">

            {/* En cada card deberan mostrar en name - username y el id */}
            <div className="box">
                <Link className='link' to={`/details/${dentist.id}`}>
                    <img src="./images/doctor.jpg" alt="doc-img" />
                    <h4>{dentist.name}</h4>
                    <p>{dentist.username}</p>
                </Link>
            </div>
            <button onClick={addFav} className="favButton">⭐</button>
            {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

            {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}

        </div>
    );
};

export default Card;