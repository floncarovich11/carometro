import React from "react"
import Logo from "../img/senaiLogo.png"
import PessoaIcon from "../img/iconePessoa.png"
import IconPessoa from "../img/iconePessoa.png"
import "./idev2.css"

function Idev2()  {
    return (
        <>
            <div className='home'>
                <div className='cabecalho-home'>
                    <img src={Logo} alt="" width="200px" />
                    <a href="/">
                        <img src={PessoaIcon} alt="" width="40px" />
                    </a>
                </div>
            </div>

            <div className="titulo-idev2">
                <div>
                    <form action="" className='Idev-2'>
                        <div>
                        <a href="/home">
                            IDEV-2
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
                <div>
                    <form action="" className="form-idev2" >
                        <div className="retangulo-idev2">
                            <img src={IconPessoa} alt="" width="200px" />
                        </div>
                        <div className="nomeAluno">Nome do aluno</div>
                        <div className="dataNascimento">Data do nascimento</div>
                    </form>
                </div>
                <div>
                    <form action="" className="form-idev2" >
                        <div className="retangulo-idev2">
                            <img src={PessoaIcon} alt="" width="200px" />
                        </div>
                        <div className="nomeAluno">Nome do aluno</div>
                        <div className="dataNascimento">Data do nascimento</div>
                    </form>
                </div>
                <div>
                    <form action="" className="form-idev2" >
                        <div className="retangulo-idev2">
                            <img src={PessoaIcon} alt="" width="200px" />
                        </div>
                        <div className="nomeAluno">Nome do aluno</div>
                        <div className="dataNascimento">Data do nascimento</div>
                    </form>
                </div>
                <div>
                    <form action="" className="form-idev2" >
                        <div className="retangulo-idev2">
                            <img src={PessoaIcon} alt="" width="200px" />
                        </div>
                        <div className="nomeAluno">Nome do aluno</div>
                        <div className="dataNascimento">Data do nascimento</div>
                    </form>
                </div>
            </div>

            <div className="alunosIdev2" >
                <div>
                    <form action="" className="form-idev2" >
                        <div className="retangulo-idev2">
                            <img src={PessoaIcon} alt="" width="200px" />
                        </div>
                        <div className="nomeAluno">Nome do aluno</div>
                        <div className="dataNascimento">Data do nascimento</div>
                    </form>
                </div>
                <div>
                    <form action="" className="form-idev2" >
                        <div className="retangulo-idev2">
                            <img src={PessoaIcon} alt="" width="200px" />
                        </div>
                        <div className="nomeAluno">Nome do aluno</div>
                        <div className="dataNascimento">Data do nascimento</div>
                    </form>
                </div>
                <div>
                    <form action="" className="form-idev2" >
                        <div className="retangulo-idev2">
                            <img src={PessoaIcon} alt="" width="200px" />
                        </div>
                        <div className="nomeAluno">Nome do aluno</div>
                        <div className="dataNascimento">Data do nascimento</div>
                    </form>
                </div>
                <div>
                    <form action="" className="form-idev2" >
                        <div className="retangulo-idev2">
                            <img src={PessoaIcon} alt="" width="200px" />
                        </div>
                        <div className="nomeAluno">Nome do aluno</div>
                        <div className="dataNascimento">Data do nascimento</div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Idev2;