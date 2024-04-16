import React from 'react'
import Logo from "../img/senaiLogo.png"
import PessoaIcon from "../img/iconePessoa.png"
// import Config from '../img/config.png'
// import Idev2 from "../img/img-idev2"
import Menu from './Menu'
import './home.css'

function Home () {
  return (
    <body>
      <div className='home'>
        <div className='cabecalho-home'>
            <img src= {Logo} alt="" width="200px"/>
          <a href="/">
              <img src= {PessoaIcon} alt="" width="40px" />
          </a>
        </div>
      </div>
      
    <Menu></Menu>

    {/* <AlunosIdev2></AlunosIdev2> */}

    </body>
    )
}

export default Home