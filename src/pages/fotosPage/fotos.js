import React from "react";
import './fotos.css'
import foto from '../../imgs/imageCar/foto1.jpeg'
import foto2 from '../../imgs/imageCar/foto2.mp4'
import foto3 from '../../imgs/imageCar/foto3.jpeg'
import foto4 from '../../imgs/imageCar/foto4.jpeg'
import foto5 from '../../imgs/imageCar/foto5.jpeg'
import foto6 from '../../imgs/imageCar/foto6.jpeg'
import foto7 from '../../imgs/imageCar/foto7.jpeg'
import foto8 from '../../imgs/imageCar/foto8.jpeg'
import foto9 from '../../imgs/imageCar/foto9.jpeg'
import Carousel from 'better-react-carousel'
let arrFoto = [
    {
        nome: 'foto001',
        link: foto
        
    },
    {
        nome: 'foto002',
        link: foto2
        
    },
    {
        nome: 'foto003',
        link: foto3
        
    },
    {
        nome: 'foto004',
        link: foto4
        
    },
    {
        nome: 'foto005',
        link: foto5
        
    },
    {
        nome: 'foto006',
        link: foto6
        
    },
    {
        nome: 'foto007',
        link: foto7
        
    },
    {
        nome: 'foto008',
        link: foto8
        
    },
    {
        nome: 'foto009',
        link: foto9
        
    },
]
function Fotos(){
    return(
        
        <div className="App-fotos">
            <div className="titulo">

                <p>Nossas fotos =) <br></br>--Algumas Só--</p>
            </div>
            <div>
                <div className="foto-area">
                    <Carousel cols={1} rows={5} gap={10} loop>
                    {
                        arrFoto.map((x) =>
                        <Carousel.Item>
                            <img width="100%" height='70%' src={x.link} />
                        </Carousel.Item>
                        )
                    }
                    </Carousel>
                    
                </div>
            </div>
            
            <button onClick={() =>{window.location.replace('https://miju-love.vercel.app/')}}>Pagina principal</button>

        </div>
    )
}

export default Fotos;