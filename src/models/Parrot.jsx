import { useAnimations, useGLTF } from '@react-three/drei'
import React, { useRef, useEffect } from "react";
import ParrotScene from "../assets/3d/parrots.glb"


const Parrot = ({positionParrot, rotationParrot, scaleParrot}) => {
    const parrotref = useRef();
    const {scene,animations} = useGLTF(ParrotScene)
    const {actions} = useAnimations(animations, parrotref);

  
    useEffect(() => {
        actions['Animation'].play();
    }, [actions])


  return (
    <mesh position={positionParrot} rotation={rotationParrot} scale={scaleParrot} ref={parrotref}>
        <primitive object={scene}/>
    </mesh>
  )
}

export default Parrot