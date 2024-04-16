import React from 'react'
import Logo from '../img/senaiLogo.png'

function Login  () {
  return (
  <body>
    <div className="login">
      <div className="logo">
        <img src={Logo} alt="" width="400px" />
      </div>
      <div className="retangulo-login">
        <div className="titulo">
          <h1>BEM-VINDO!</h1>
        </div>
        <div className="subtitulo">
          <p>Aqui está o Carômetro do SENAI, onde exploraremos sua personalidade e competências com tecnologia avançada. Prepare-se para descobrir seu potencial de 
            crescimento e desenvolvimento. Seja bem-vindo à jornada de autoconhecimento guiada pelos princípios do SENAI</p>
        </div>
        <form action="" className='form'>
          <div className="email">
            <label htmlFor="email">Email:</label> <br />
            <input type="email" />
          </div>

          <div className="senha">
            <label htmlFor="password">Senha:</label> <br />
            <input type="password" />
          </div>

        <a href="/Home">
          <button>Entrar</button></a>
        </form>
      </div>
    </div>
  </body>
  )
}

export default Login
