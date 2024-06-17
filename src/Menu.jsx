import React from "react";
import Idev2 from "../img/idev2.jpg";
import Idev1 from "../img/idev1.jpg";
import Idev3 from "../img/idev3.jpg";
import Ieleimec2 from "../img/ieleimec-2.jpg";
import Ieleimec1 from "../img/ieleimec1.jpg";

function Menu() {
    return (
        <>
            <div className="forms-conteiner1">
                <div>
                    <form action="" className='form-2'>
                        <div>
                            IDEV-1 2022
                        </div>
                    </form>
                </div>
                <div>
                    <form action="" className='form-2'>
                        <div>
                            IDEV-2 2023
                        </div>
                    </form>
                </div>
                <div>
                    <form action="" className='form-2'>
                        <div>
                            IDEV-3 2024
                        </div>
                    </form>
                </div>
            </div>

            <div className="forms-conteiner">
                <div>
                    <form action="" className='form-1'>
                        <div className="img-form">
                            <   img src={Idev1} alt="" width="200px" height="150px" />
                        </div>

                        <div onClick={() => window.location.href = `/alunosIdev1`} className="alunoSala">
                            <a href="alunosIdev1">Alunos</a>
                        </div>
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
                            <img src={Idev2} alt="" width="200px" height="150px" />
                        </div>

                        <div onClick={() => window.location.href = `/alunosIdev2`} className="alunoSala">
                            <a href="alunosIdev2">Alunos</a>
                        </div>
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
                            <img src={Idev3} alt="" width="200px" height="150px" />
                        </div>

                        <div onClick={() => window.location.href = `/alunosIdev3`} className="alunoSala">
                            <a href="alunosIdev3">Alunos</a>
                        </div>
                        <div className="instagramSala">
                            <a href="https://www.instagram.com/idev__3/" target="_blank" rel="noopener noreferrer">Instagram</a>
                        </div>
                        <div className="classroomSala" >
                            <a href="https://classroom.google.com" target="_blank" rel="noopener noreferrer">Classroom</a>
                        </div>
                    </form>
                </div>

            </div>

            <div className="forms-conteiner1">
                <div>
                    <form action="" className='form-3'>
                        <div>
                            IELE/IMEC-1 2022
                        </div>
                    </form>
                </div>
                <div>
                    <form action="" className='form-3'>
                        <div>
                            IELE/IMEC-2 2023
                        </div>
                    </form>
                </div>
                <div>
                    <form action="" className='form-3'>
                        <div>
                            IELE/IMEC-3 2024
                        </div>
                    </form>
                </div>
            </div>

            <div className="forms-conteiner">
                <div>
                    <form action="" className='form-1'>
                        <div className="img-form">
                            <img src={Ieleimec1} alt="" width="200px" height="150px" />
                        </div>
                        <div onClick={() => window.location.href = `/alunosIlecImec1`} className="alunoSala">
                            <a href="alunosIlecImec1">Alunos</a>
                        </div>
                        <div className="instagramSala">
                            <a href="https://www.instagram.com/tigroesdosenai/" target="_blank" rel="noopener noreferrer">Instagram</a>
                        </div>
                        <div className="classroomSala" >
                            <a href="https://classroom.google.com" target="_blank" rel="noopener noreferrer">Classroom</a>
                        </div>
                    </form>
                </div>

                <div>
                    <form action="" className='form-1'>
                        <div className="img-form">
                            <img src={Ieleimec2} alt="" width="200px" height="150px" />
                        </div>
                        <div onClick={() => window.location.href = `/alunosIlecImec2`} className="alunoSala">
                            <a href="alunosIlecImec2">Alunos</a>
                        </div>
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
                        {/* <div className="img-form">
                            <img src={Ieleimec2} alt="" width="200px" height="150px" />
                        </div> */}
                        <div onClick={() => window.location.href = `/alunosIlecImec3`} className="alunoSala">
                            <a href="alunosIlecImec3">Alunos</a>
                        </div>
                        <div className="instagramSala">
                            <a href="https://www.instagram.com/elemec.pererecos/" target="_blank" rel="noopener noreferrer">Instagram</a>
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