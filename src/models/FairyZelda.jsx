import { useAnimations, useGLTF } from '@react-three/drei'
import React, { useRef, useEffect } from "react";
import fairyZeldascene from '../assets/3d/fairyZelda.glb'

const FairyZelda = ({ isRotating, fairyscale, fairyposition, fairyrotation }) => {
    const fairyref = useRef();
    const {scene, animations} = useGLTF(fairyZeldascene);
    const {actions} = useAnimations(animations, fairyref);

    useEffect(() => {
      console.log(isRotating);
        if(isRotating){
            actions['idle'].play();
        }
        else{
            actions['idle'].stop();
        }
    }, [isRotating , actions])

  return (
    <mesh position={fairyposition} scale={fairyscale} rotation={fairyrotation} ref={fairyref}>
        <primitive object={scene}/>
    </mesh>
  )
}

export default FairyZelda