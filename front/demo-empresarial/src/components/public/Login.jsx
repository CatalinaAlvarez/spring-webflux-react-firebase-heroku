import React from 'react'

function Login() {
    return (
        <div className="container">
                        <form className="mt-5 py-5 px-5">
            <h1>
                Ingresar a preguntas
            </h1>
            <p className="p-mensaje">Completa los campos para ingresar.</p>
            <div >
                <input
                className="input-box"
                placeholder="Email"
                name="email"
                type="email"
                ></input>
            </div>
            <div>
                <input
                className="input-box"
                placeholder="Password"
                name="password"
                type="password"
                ></input>
            </div>
            <div className="form-group">
             
                <p className="text-danger"></p>
                
                <button className="button" type="submit">
                Registrar
                </button>
            </div>
            <div style={{margin:10}}>
                <button
                className="button"
                type="button"
                >
                Iniciar con google
                </button>
                </div>
            </form>
        </div>
    )
}

export default Login
