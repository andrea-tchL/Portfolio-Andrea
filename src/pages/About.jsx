import React, { useEffect } from 'react';
import { feuille1,feuille2,feuille3,feuille4,feuille5,feuille6,feuille7,feuille8,about1,interet,aptitude,formation} from "../assets/Images/index.js"
import { down_arrow } from '../assets/icons/index.js';  

const About = () => {

  const handleScroll = () => {
    const text = document.getElementById('text');
    const feuille2 = document.getElementById('feuille2'); 
    const feuille3 = document.getElementById('feuille3');
    const feuille4 = document.getElementById('feuille4');
    const feuille5 = document.getElementById('feuille5');
    const feuille6 = document.getElementById('feuille6');

    let value = window.scrollY;
    if (text) text.style.marginBottom = value * 2 + 'px';
    if (feuille2) feuille2.style.left = value * (- 0.5) + 'px';
    if (feuille3) feuille3.style.left = value * 0.5 + 'px';
    if (feuille4) feuille4.style.left = value * (- 0.5) + 'px';
    if (feuille5) feuille5.style.left = value * 0.5 + 'px';
    if (feuille6) feuille6.style.left = value * 0.5 + 'px';

  };

  const cursorhold = () => {
    const carte1 = document.getElementById('carte1');
    const carte2 = document.getElementById('carte2');
    const carte3 = document.getElementById('carte3');
    const carte4 = document.getElementById('carte4');
    const bouton1 = document.getElementById('bouton1');
    const bouton2 = document.getElementById('bouton2');
    const bouton3 = document.getElementById('bouton3');
    const bouton4 = document.getElementById('bouton4');
  
    // Réinitialise la largeur et la transition pour toutes les cartes
    const resetCards = () => {
      carte1.style.width = '';
      carte1.style.transition = 'width 0.9s ease-out';
      carte1.style.backgroundImage = '';
  
      carte2.style.width = '';
      carte2.style.transition = 'width 0.9s ease-out';
      carte2.style.backgroundImage = '';
      
  
      carte3.style.width = '';
      carte3.style.transition = 'width 0.9s ease-out';
      carte3.style.backgroundImage = '';
  
      carte4.style.width = '';
      carte4.style.transition = 'width 0.9s ease-out';
      carte4.style.backgroundImage = '';
    };
  
    // Si un bouton est cliqué, la carte correspondante s'agrandit
    if (bouton1.contains(document.activeElement)) {
      resetCards();
      carte1.style.width = '50%';
      carte1.style.transition = 'width 0.9s ease-in';
      carte1.style.backgroundImage = `url(${about1})`;
      carte1.style.backgroundSize = 'contain';
      carte1.style.backgroundRepeat = 'no-repeat';
  
    }
  
    if (bouton2.contains(document.activeElement)) {
      resetCards();
      carte2.style.width = '60%';
      carte2.style.transition = 'width 0.9s ease-in';
      carte2.style.backgroundImage = `url(${aptitude})`;
      carte2.style.backgroundSize = 'contain';
      carte2.style.backgroundRepeat = 'no-repeat';

    }
  
    if (bouton3.contains(document.activeElement)) {
      resetCards();
      carte3.style.width = '50%';
      carte3.style.transition = 'width 0.9s ease-in';
      carte3.style.backgroundImage = `url(${formation})`;
      carte3.style.backgroundSize = 'contain';
      carte3.style.backgroundRepeat = 'no-repeat';
    }
  
    if (bouton4.contains(document.activeElement)) {
      resetCards();
      carte4.style.width = '50%';
      carte4.style.transition = 'width 0.9s ease-in';
      carte4.style.backgroundImage = `url(${interet})`;
      carte4.style.backgroundSize = 'contain';
      carte4.style.backgroundRepeat = 'no-repeat';
    };
  };
  
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('click', cursorhold);
  
    return () => {
      // Nettoyez les écouteurs d'événements lorsqu'il n'est plus nécessaire
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('click', cursorhold);
    };
  }, []);
  



  return (
    
    <div className='scroll-container flex-nowrap overflow-x-hidden'>
      <section className='flex relative bg-gradient-to-b from-cyan-500 to-blue-500  flex-row justify-center h-[100vh] items-center'>
        <h1 className='absolute text-5xl z-10 font-bold text-white flex gap-x-5' id="text"> 
          <p> À Propos de moi ? </p> 
          <img src={down_arrow} className='w-10 '/>  
        </h1>
        <img src={feuille1} id="feuille1" className="absolute top-0 left-0 w-screen h-screen"/>
        <img src={feuille2} id="feuille2" className="absolute top-0 left-0 w-screen h-screen"/>
        <img src={feuille3} id="feuille3" className="absolute top-0 left-0 w-screen h-screen"/>
        <img src={feuille4} id="feuille4" className="absolute top-0 left-0 w-screen h-screen"/> 
        <img src={feuille5} id="feuille5" className="absolute top-0 left-0 w-screen h-screen"/>
        <img src={feuille6} id="feuille6" className="absolute top-0 left-0 w-screen h-screen"/>
        <img src={feuille7} id="feuille7" className="absolute top-0 left-0 w-screen h-screen"/>
        <img src={feuille8} id="feuille8" className="absolute top-0 left-0 w-screen h-screen"/>
      </section>
      
      {/* bg-teal-300   bg-teal-400 */}

      <section className=' w-screen h-screen flex bg-[#003329] relative items-center justify-center'>
        <div className=' flex absolute w-3/4 h-3/4 items-center justify-center gap-x-3'>
          <div className='  bg-[#004aad] h-full w-6 rounded-lg shadow-md shadow-white flex flex-col justify-end' id="carte1">
            {/* <p className='  text-blue-500' id="p1">  </p>  */}
            <button className=' bg-white text-black rounded-full w-6' id ='bouton1'> 1 </button> 
          </div>
          <div className=' bg-[#38b6ff] h-full w-6 rounded-lg shadow-md shadow-white flex flex-col justify-end' id="carte2">
            {/* <p className='  text-blue-500' id= 'p2'>  </p>  */}
            <button className=' bg-white text-black rounded-full w-6' id ='bouton2'> 2 </button> 
          </div>
          <div className=' bg-[#5386aa] h-full w-6 rounded-lg shadow-md shadow-white flex flex-col justify-end' id="carte3">
            {/* <p className='  text-blue-500' id = 'p3'>   </p>  */}
            <button className=' bg-white text-black rounded-full w-6' id = 'bouton3'> 3 </button> 
          </div>
          <div className='  bg-[#5ce1e6] h-full w-6 rounded-lg shadow-md shadow-white flex flex-col justify-end' id="carte4">
            {/* <p className='  text-blue-500' id ='p4'>   </p>  */}
            <button className=' bg-white text-black rounded-full w-6' id='bouton4'> 4 </button> 
          </div>
        </div>
      </section>

    </div>


  )
}

export default About