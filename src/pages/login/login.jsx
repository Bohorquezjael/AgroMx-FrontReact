function Login() {
  return (
    <main>
        <div className='container-fluid'>
            <h1 className='titulo'>inicia sesión</h1> <hr/>
            <div className='container-fluid'>
                <form className='form'>
                    <label htmlFor="correo">correo electronico:</label>
                    <input type="text" placeholder="example@dominio.com" id="correo"/><br/>
                    <label htmlFor="contraseña">contraseña</label>
                    <input type="password" placeholder="introduce tu contraseña" id="contraseña"/>
                    <button type="submit">iniciar sesión</button>
                </form>
            </div>
        </div>
    </main>
  )
}

export default Login
