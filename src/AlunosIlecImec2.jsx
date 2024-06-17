import React from "react"
import Logo from "../img/senaiLogo.png"
import PessoaIcon from "../img/iconePessoa.png"
import "./idev2.css"
import Card from './components/Card'

function IlecImec2() {
    return (
        <>
            <div className='home'>
                <div className='cabecalho-idev2'>
                    <img src={Logo} alt="" width="200px" />
                </div>
            </div>

            <div className="titulo-idev2">
                <div>
                    <form action="" className='Idev-2'>
                        <div>
                            <a href="/home">
                                VOLTAR
                            </a>
                        </div>
                    </form>
                </div>
                <div>
                    <form action="" className='Idev-2'>
                        <div>
                            ALUNOS
                        </div>
                    </form>
                </div>
            </div>

            <div className="alunosIdev2" >

                <Card nome='ana' dataNascimento={'12/04/1997'}></Card>
                <Card nome='ana' dataNascimento={'12/04/1997'}></Card>
                <Card nome='ana' dataNascimento={'12/04/1997'}></Card>
                <Card nome='ana' dataNascimento={'12/04/1997'}></Card>

            </div>

            <div className="alunosIdev2" >
                <Card nome='ana' dataNascimento={'12/04/1997'}></Card>
                <Card nome='ana' dataNascimento={'12/04/1997'}></Card>
                <Card nome='ana' dataNascimento={'12/04/1997'}></Card>
                <Card nome='ana' dataNascimento={'12/04/1997'}></Card>
            </div>

            <div className="alunosIdev2" >
                <Card nome='ana' dataNascimento={'12/04/1997'}></Card>
                <Card nome='ana' dataNascimento={'12/04/1997'}></Card>
                <Card nome='ana' dataNascimento={'12/04/1997'}></Card>
                <Card nome='ana' dataNascimento={'12/04/1997'}></Card>
            </div>

            <div className="alunosIdev2" >
                <Card nome='ana' dataNascimento={'12/04/1997'}></Card>
                <Card nome='ana' dataNascimento={'12/04/1997'}></Card>
                <Card nome='ana' dataNascimento={'12/04/1997'}></Card>
                <Card nome='ana' dataNascimento={'12/04/1997'}></Card>
            </div>

            <div className="alunosIdev2" >
                <Card nome='ana' dataNascimento={'12/04/1997'}></Card>
                <Card nome='ana' dataNascimento={'12/04/1997'}></Card>
                <Card nome='ana' dataNascimento={'12/04/1997'}></Card>
                <Card nome='ana' dataNascimento={'12/04/1997'}></Card>
            </div>

            <div className="alunosIdev2" >
                <Card nome='ana' dataNascimento={'12/04/1997'}></Card>
                <Card nome='ana' dataNascimento={'12/04/1997'}></Card>
                <Card nome='ana' dataNascimento={'12/04/1997'}></Card>
                <Card nome='ana' dataNascimento={'12/04/1997'}></Card>
            </div>

            <div className="alunosIdev2" >
                <Card nome='ana' dataNascimento={'12/04/1997'}></Card>
                <Card nome='ana' dataNascimento={'12/04/1997'}></Card>
                <Card nome='ana' dataNascimento={'12/04/1997'}></Card>
                <Card nome='ana' dataNascimento={'12/04/1997'}></Card>
            </div>

            <div className="alunosIdev2" >
                <Card nome='ana' dataNascimento={'12/04/1997'}></Card>
                <Card nome='ana' dataNascimento={'12/04/1997'}></Card>
                <Card nome='ana' dataNascimento={'12/04/1997'}></Card>
                <Card nome='ana' dataNascimento={'12/04/1997'}></Card>
            </div>
        </>
    )
}

export default IlecImec2;