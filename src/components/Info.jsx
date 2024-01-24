import React from 'react'
import {arrow} from '..//assets/icons'
import {Link} from 'react-router-dom';
// Ici, on retrouve les differents texts qui seront affichés lorsqu'on fait tourner l'ile.
// Chaque text est associé à un stage, et est affiché lorsque le stage est atteint.
const render = {
    1: (<div className='info'> 
    "Bonjour! je m'appelle Andrea, je suis une jeune développeuse web junior.
    Bienvenue dans mon univers, je vous invite à découvrir mon portfolio en 3D."
    </div>),

    2: (
        <div className='info relative'> 
            "J'aime beaucoup la programmation! Jettons un coup d'oeil à mes autres projets!" <br/>
            <div className='bg-white rounded-md w-fit px-2 ml-[27vh] flex absolute  '>
                <Link to = {"/Projects"} className="info2 flex  "> 
                    Allons-y !  <img className="w-4 h-4 mt-1 ml-2" src={arrow}/>
                </Link>
            </div>
        </div>
    ),    

    3: (
        <div className='info relative'> 
            Et si on parlait un peu de moi ? <br/>
            <div className='bg-white rounded-md w-fit px-2 ml-[7vh] flex absolute '>
                <Link to={"/About"} className="info2 flex"> 
                    Allons-y !  <img className="w-4 h-4 mt-1 ml-2" src={arrow}/>
                </Link>
            </div>
        </div>
    ),
    4: (        
        <div className='info relative'> 
            Attention la tête!! <br/> Vous voulez en savoir plus? Contactez  moi!! <br/>
            <div className='bg-white rounded-md w-fit px-2 ml-[12vh] flex absolute '>
                <Link to={"/Contact"} className="info2 flex"> 
                    Allons-y !  <img className="w-4 h-4 mt-1 ml-2" src={arrow}/>
                </Link>
            </div>
        </div>),
}
const Info = ({currentStage}) => {
    return (
    render[currentStage] || null
    )
}

export default Info