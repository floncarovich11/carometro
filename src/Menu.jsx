import React from "react";
import Idev2 from "../img/idev2.jpg";
import Idev1 from "../img/idev1.jpg";
import Ieleimec2 from "../img/ieleimec-2.jpg";
import Ieleimec1 from "../img/ieleimec1.jpg";

function Menu() {
    return (
        <>
            <div className="forms-conteiner1">
                <div>
                    <form action="" className='form-2'>
                        <div>
                            IDEV-2
                        </div>
                    </form>
                </div>

                <div>
                    <form action="" className='form-2'>
                        <div>
                            IELE/IMEC-2
                        </div>
                    </form>
                </div>

                <div>
                    <form action="" className='form-2'>
                        <div>
                            IDEV-1
                        </div>
                    </form>
                </div>

                <div>
                    <form action="" className='form-2'>
                        <div>
                            IELE/IMEC-1
                        </div>
                    </form>
                </div>
            </div>

            <div className="forms-conteiner">
                <div>
                    <form action="" className='form-1'>
                        <div className="img-form">
                            <img src={Idev2} alt="" width="200px" height="150px"/>
                        </div>
                        <div className="anoSala" >2023</div>
                        <div className="alunoSala" >Alunos</div>
                        <div className="instagramSala">
                            <a href="https://www.instagram.com/fenix_idev2/" target="_blank" rel="noopener noreferrer">Instagram</a>
                        </div>
                        <div className="classroomSala" >
                            <a href="https://classroom.google.com" target="_blank" rel="noopener noreferrer">Classroom</a>
                        </div>
                    </form>
                </div>

                <div>
                    <form action="" className='form-1'>
                        <div className="img-form">
                            <img src={Ieleimec2} alt="" width="200px" height="150px"/>
                        </div>
                        <div className="anoSala" >2023</div>
                        <div className="alunoSala" >Alunos</div>
                        <div className="instagramSala">
                            <a href="https://www.instagram.com/elemec.pererecos/" target="_blank" rel="noopener noreferrer">Instagram</a>
                        </div>
                        <div className="classroomSala" >
                            <a href="https://classroom.google.com" target="_blank" rel="noopener noreferrer">Classroom</a>
                        </div>
                    </form>
                </div>

                <div>
                    <form action="" className='form-1'>
                        <div className="img-form">
                        <   img src={Idev1} alt="" width="200px" height="150px"/>
                        </div>
                       
                        <div className="anoSala" >2022</div>
                        <div className="alunoSala" >Alunos</div>
                        <div className="instagramSala">
                            <a href="https://www.instagram.com/ferasdoterceiro/" target="_blank" rel="noopener noreferrer">Instagram</a>
                        </div>
                        <div className="classroomSala" >
                            <a href="https://classroom.google.com" target="_blank" rel="noopener noreferrer">Classroom</a>
                        </div>
                    </form>
                </div>

                <div>
                    <form action="" className='form-1'>
                        <div className="img-form">
                            <img src={Ieleimec1} alt="" width="200px" height="150px" />
                        </div>
                        <div className="anoSala" >2022</div>
                        <div className="alunoSala" >Alunos</div>
                        <div className="instagramSala">
                            <a href="https://www.instagram.com/tigroesdosenai/" target="_blank" rel="noopener noreferrer">Instagram</a>
                        </div>
                        <div className="classroomSala" >
                            <a href="https://classroom.google.com" target="_blank" rel="noopener noreferrer">Classroom</a>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Menu