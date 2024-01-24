import React from 'react'
import {Html} from '@react-three/drei'


// Ici, on retourne une page de chargeement si le modele 3d prend trop de temps à charger.
const Load = () => {
  return (
    <Html>
        <div class="flex items-center justify-center w-56 h-56 border border-gray-200 rounded-lg bg-gray-50">
            <div class="px-3 py-1 text-xs font-medium leading-none text-center text-blue-800 bg-blue-200 rounded-full animate-pulse">loading...</div>
        </div>
    </Html>
  
    
  
  )
}

export default Load