import {useState, Suspense, useEffect,useRef} from 'react'
import {Canvas} from '@react-three/fiber'
import Load from '../components/Load'
import Island2 from '../models/Island2'
import Sky from '../models/Sky'
import FairyZelda from '../models/FairyZelda'
import Info from '../components/Info'
import song from '../assets/music.mp3'
import Parrot from '../models/Parrot'
import { soundon, soundoff } from '../assets/icons'

const Home = () => {
  const [isRotating, rotatingFunction] =  useState(false);
  const [currentstage, setCurrentStage] = useState(1);
  const [playingMusic, setPlayingMusic] = useState(false);
  const audioref = useRef(new Audio(song));
  audioref.current.loop = true; 
  audioref.current.volume = 0.1;  
  //audioref.current.play();
  const adjustscreenSize = () =>{
    let scale = null;
    let position = [12, -10.5, -50 ];
    let rotation = [-1.23, 6.24, -3];

    if(window.innerWidth < 696){
      scale = [6.2, 6.2, 6.2];
    } 
    else{
      scale = [6.2, 6.2, 6.2];
    }

    return [scale, position, rotation]
  }
  const adjustFairySize = () =>{
    let scale ;
    let position ;
    let rotation = [0,40,0];

    if(window.innerWidth < 696){
      scale = [3,3,3];
      position = [-2, -1, -20 ];
    } 
    else{
      scale = [3,3,3];
      position = [-2, -1, -20 ];
    }

    return [scale, position, rotation]
  }

  const [islandScale, IslandPostion, islandRotation] = adjustscreenSize();
  const [fairyScale, fairyPostion, fairyRotation] = adjustFairySize();
  
  return (
    <section className='w-full h-screen relative'>
      <div className= 'absolute left-1/2 top-28 transform -translate-x-1/2 -translate-y-1/2 z-10'>
        {currentstage && <Info currentStage={currentstage}/> }
      
      </div>
      <Canvas className={`w-full h-screen bg-transparent ${isRotating ? "cursor-grabbing" : "cursor-grab"}`} camera={{ near: 0.1, far: 1000 }}>
        <Suspense fallback = {<Load />}>
          <directionalLight position={[1,1,1]} intensity={3}/>
          <ambientLight intensity={0.3} />
          <hemisphereLight  skyColor = "#52D3D8" groundColor="#000000" intensity={0.5}/>

          <Sky/> 


          <Island2 
          position = {IslandPostion}
          scale = {islandScale} 
          rotation = {islandRotation}
          isRotating = {isRotating}
          rotatingFunction = {rotatingFunction}
          currentStage = {currentstage}
          setCurrentStage={setCurrentStage}/>


          <Parrot
          positionParrot = {[6, 2, -2] }
          rotationParrot = {[0,2,0]}
          scaleParrot = {[0.9,0.9,0.9]}/>

          <FairyZelda          
          isRotating={isRotating}
          fairyscale={fairyScale}
          fairyposition={fairyPostion}
          fairyrotation={fairyRotation}/>

        </Suspense>
      </Canvas>
      <div className='absolute bottom-2 left-2'>
      <img className=' w-14 h-14 cursor-pointer' 
          src={playingMusic ? soundon : soundoff}
          alt='sound'
          onClick={()=>{
          if(!playingMusic){
            audioref.current.play();
            setPlayingMusic(true);
          }
          else{
            audioref.current.pause();
            setPlayingMusic(false);
          }
        }}
      />
      </div>
    </section>
  )
}

export default Home