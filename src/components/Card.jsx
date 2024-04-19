import React from 'react'
import IconPessoa from "../../img/iconePessoa.png"


function Card({nome, dataNascimento}) {
    return (
        <>
            <div>
                <form action="" className="form-idev2" >
                    <div className="retangulo-idev2">
                        <a href="/home">
                        <img src={IconPessoa} alt="" width="200px" />
                        </a>
                    </div>
                    <div className="nomeAluno">{nome}</div>
                    <div className="dataNascimento">{dataNascimento}</div>
                </form>
            </div>
        </>
    )
}

export default Card;