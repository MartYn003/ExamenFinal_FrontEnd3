import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import '../Styles/RoutesStyles/Detail.css'


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {

    // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico

    const [dentist, setDentist] = useState({})
    const {id} = useParams()
    const [loading, setLoading] = useState(true)
    const url = 'https://jsonplaceholder.typicode.com/users/' + id

    useEffect(() => {
        axios.get(url)
        .then(response => {
            console.log(response.data)
            setDentist(response.data)
            setLoading(false)
        })
        .catch(error => {
            console.error('Error: ', error)
        })
    }, [])

    return (
        <div className='detail-main'>
            {loading ? 'Cargando...' : <div className='detail-m'>
            <h1>{dentist.name}</h1>
            <img src="/images/doctor.jpg" alt="doc-img" />
            <h4>Ciudad: {dentist.address?.city}</h4>
            <h4>Calle: {dentist.address?.street}</h4>
            <h4>Teleffono: {dentist.phone}</h4>
            <h4>Email: {dentist.email}</h4>
            <h4>Sitio web: {dentist.website}</h4>
            {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
            {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
            </div>
        }
        </div>
    )
}

export default Detail