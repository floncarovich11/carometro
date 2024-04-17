import React, { useState } from 'react';
import Logo from '../img/senaiLogo.png';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const isValidEmail = (email) => {
    // Expressão regular para validar email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleLogin = () => {
    if (isValidEmail(email) && password.trim() !== '') {
      // Aqui você pode adicionar a lógica para fazer login, por exemplo, redirecionar para a página inicial
      window.location.href = '/home';
    } else {
      if (!isValidEmail(email)) {
        alert('Por favor, insira um email válido.');
      } else {
        alert('Por favor, preencha a senha.');
      }
    }
  };

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
            <p>Aqui está o Carômetro do SENAI, onde exploraremos sua personalidade e competências com tecnologia avançada. Prepare-se para descobrir seu potencial de crescimento e desenvolvimento. Seja bem-vindo à jornada de autoconhecimento guiada pelos princípios do SENAI</p>
          </div>
          <form className='form'>
            <div className="email">
              <label htmlFor="email">Email:</label> <br />
              <input type="email" value={email} onChange={handleEmailChange} />
            </div>

            <div className="senha">
              <label htmlFor="password">Senha:</label> <br />
              <input type="password" value={password} onChange={handlePasswordChange} />
            </div>

            <div className='botao'>
              <button type="button" onClick={handleLogin}>Entrar</button>
            </div>
          </form>
        </div>
      </div>
    </body>
  );
}

export default Login;
