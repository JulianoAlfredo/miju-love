import React from "react";
import './Text.css'

function Text(){
    return(
        <div className="App-mika">
            <div className='text-tomika'>
                <div className="textmika-area">
                    <p>LLorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ligula lectus, blandit nec tortor nec, ultrices ullamcorper lorem. Etiam sit amet dui ut nulla tempor consectetur a sit amet dolor. Duis eget lectus vitae sem tempus auctor sed ut orci. Pellentesque at urna arcu. Nunc varius dolor quis leo fringilla bibendum. Donec sodales blandit nunc et sodales. Nunc et diam non felis rutrum ullamcorper. Sed a mi ac augue tempus porta eu id ex. Pellentesque id dapibus eros. Sed condimentum tellus ut lorem luctus ornare. Integer condimentum elementum imperdiet. Sed mi ante, lobortis vel dolor vel, fermentum pulvinar massa.
                       Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ligula lectus, blandit nec tortor nec, ultrices ullamcorper lorem. Etiam sit amet dui ut nulla tempor consectetur a sit amet dolor. Duis eget lectus vitae sem tempus auctor sed ut orci. Pellentesque at urna arcu. Nunc varius dolor quis leo fringilla bibendum.
                       </p>
                </div>
                <button onClick={() =>{window.location.replace('https://miju-love.vercel.app/fotos')}}>Fotos</button>
                
            </div>
            

        </div>
    )
}

export default Text;
