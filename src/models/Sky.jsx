import { useGLTF } from '@react-three/drei'
import React from 'react'
import skyscene from '../assets/3d/sky2.glb'
import { useFrame } from "@react-three/fiber";

const Sky = () => {
    const sky = useGLTF(skyscene)

    //dela c'est le temps entre deux frames
    // on multiplie par 0.04 pour ralentir la rotation
    useFrame((_,delta) => { 
        sky.scene.rotation.y += delta * 0.04;
    })
  return (
    <mesh>
        <primitive object={sky.scene}/>
    </mesh>
  )
}

export default Sky