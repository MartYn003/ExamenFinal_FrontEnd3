import React, { useState } from "react";
import '../Styles/Form.css'

const Form = () => {
    //Aqui deberan implementar el form completo con sus validaciones
    const [user, setUser] = useState('')
    const [email, setEmail] = useState('')
    const [mensaje, setMensaje] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();

        if(user.length < 5){
            setMensaje("Por favor verifique su información nuevamente")
        }else if(!email.includes("@") || !email.endsWith('.com') || email.startsWith("@")){
            setMensaje("Por favor verifique su información nuevamente")
        }else{
            console.log("user: " + user + " " + "email: " + email )
            setMensaje('Gracias ' + user + ', te contactaremos cuanto antes vía mail')
            setUser('')
            setEmail('')

            setTimeout(() => {
                setMensaje('')
            }, 3000);
        }
        
    }

    return (
        <div>
            <form>
                <input type="text" placeholder="Full Name" value={user} onChange={(e) => setUser(e.target.value)}/>
                <input type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                <button onClick={handleSubmit}> Enviar</button>
            </form>
            <div className="mensaje">{mensaje}</div>
            
        </div>
    );
};

export default Form;