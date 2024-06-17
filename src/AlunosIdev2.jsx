import React from "react"
import Logo from "../img/senaiLogo.png"
import PessoaIcon from "../img/iconePessoa.png"
import IconPessoa from "../img/iconePessoa.png"
import "./idev2.css"
import Card from "./components/Card"

function Idev2()  {
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

                <Card nome="ALEXANDRE MAGALHAES DEBOLETTA " dataNascimento={"18/07/2007"}></Card>
                <Card nome="CAMILLY BIANCA DE MORAES REIS " dataNascimento={"10/10/2010"}></Card>
                <Card nome="CAROLINA ROMANO TEIXEIRA" dataNascimento={"09/11/2007"}></Card>
                <Card nome="CLAUDETE CARMO MACHADO" dataNascimento={"09/05/2007"}></Card>
            </div>

            <div className="alunosIdev2" >
                <Card nome="EDUARDA RODRIGUES MONTEIRO" dataNascimento={"03/08/2007"}></Card>
                <Card nome="ENZO RAFAEL DOMINGUES BUSSI " dataNascimento={"31/03/2008"}></Card>
                <Card nome="FELIPE LONCAROVICH DOS SANTOS" dataNascimento={"17/12/2007"}></Card>
                <Card nome="GABRIEL DE OLIVEIRA RODRIGUES" dataNascimento={"26/10/2007"}></Card>
            </div>

            <div className="alunosIdev2" >
                <Card nome='GABRIEL DE SOUZA NETO PIRES ' dataNascimento={'29/06/2007'}></Card>
                <Card nome='GABRIELLE DE LIMA QUINQUIO' dataNascimento={'27/03/2008'}></Card>
                <Card nome='GIOVANI CANELLA DE SOUZA' dataNascimento={'18/07/2006'}></Card>
                <Card nome='GUILHERME DE SOUZA TREVISAN' dataNascimento={'24/02/2007'}></Card>
            </div>

            <div className="alunosIdev2" >
                <Card nome='GUILHERME FERRARESI DALLACQUA ' dataNascimento={'10/06/2008'}></Card>
                <Card nome='HENRIQUE BUSSI DOS SANTOS' dataNascimento={'08/01/2008'}></Card>
                <Card nome='HENRY GABRIEL RODRIGUES BARBOSA' dataNascimento={'22/01/2008'}></Card>
                <Card nome='ISABELA CUNHA MANZANO' dataNascimento={'05/01/2008'}></Card>
            </div>


            <div className="alunosIdev2" >
                <Card nome='JHUAN MEDEIROS CORDEIRO' dataNascimento={'16/01/2008'}></Card>
                <Card nome='JUAN MIGUEL MAURO RODRIGUES ' dataNascimento={'14/02/2008'}></Card>
                <Card nome='KAUAN DUARTE FLAUZINO' dataNascimento={'02/04/2007'}></Card>
                <Card nome='LUCAS DIAS LETZEL' dataNascimento={'26/02/2008'}></Card>
            </div>

            <div className="alunosIdev2" >
                <Card nome='LUCAS MARTINS ALVES' dataNascimento={'30/05/2008'}></Card>
                <Card nome='LUCAS ZANELLO MANZANO' dataNascimento={'18/02/2008'}></Card>
                <Card nome='MANUELA MATTOS SOTRATE' dataNascimento={'05/06/2008'}></Card>
                <Card nome='MATEUS SILVERIO DE OLIVEIRA' dataNascimento={'26/04/2008'}></Card>
            </div>

            <div className="alunosIdev2" >
                <Card nome='MATHEUS RODOLPHO DE ALMEIDA' dataNascimento={'16/05/2008'}></Card>
                <Card nome='PEDRO GABRIEL RIBEIRO LIMA' dataNascimento={'28/07/2007'}></Card>
                <Card nome='PEDRO HENRIQUE MAGALHAES DOS SANTOS' dataNascimento={'17/01/2008'}></Card>
                <Card nome='TOMÁS HEIZO DOMINGUES YAMAKAWA' dataNascimento={'01/06/2007'}></Card>
            </div>

            <div className="alunosIdev2" >
                <Card nome='VINICIUS LIMA SULPICIO' dataNascimento={'08/02/2008'}></Card>
                <Card nome='VITÓRIA MUNIZ DE SOUZA' dataNascimento={'14/12/2007'}></Card>
                <Card nome='YASMIM MORENO CAVERIANI' dataNascimento={'25/09/2007'}></Card>
            </div>
        </>
    )
}

export default Idev2;