import React from 'react'
import IconPessoa from "../../img/iconePessoa.png"


function Card({nome, dataNascimento}) {
    return (
        <>
            <div>
                <form action="" className="form-idev2" >
                    <div className="retangulo-idev2">
                        <img src={IconPessoa} alt="" width="200px" />
                    </div>
                    <div className="nomeAluno">{nome}
                    <div>{dataNascimento}</div> </div>
                </form>
            </div>
        </>
    )
}

export default Card;