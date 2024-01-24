import { useState, useRef,Suspense } from 'react';
import emailjs from '@emailjs/browser';
import {Canvas} from '@react-three/fiber'
import Load from '../components/Load'
import Robot from '../models/Robot'
import {linkedin, github} from "../assets/icons/index.js"


const Contact = () => {
  const [form, formfunction] = useState({name: '', email: '', message: ''})
  const [isloading, isloadingfunction] = useState(false)
  const [ismoving, ismovingfunction] = useState(false)
  const miseAjour = (event) =>{
    //revoir ce code
    formfunction({
      ...form,
      [event.target.name]: event.target.value
    })
  }

  const submit = (event) =>{
        //pour ne pas reload la page à chaque fois qu'on clique 
        event.preventDefault();
        isloadingfunction(true);
        ismovingfunction(true);
        emailjs.send( 
          import.meta.env.VITE_APP_EMAILJS_SERVICE_ID, 
          import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID, 
          {from_name : form.name, 
            to_name: "andrea", 
            from_email: form.email, 
            to_email:'atchouambou@gmail.com',
            message: form.message}, 
          import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY).then(() => { isloadingfunction(false); ismovingfunction(false); formfunction({name: '', email: '', message: ''})}).catch((error) => { isloadingfunction(false); ismovingfunction(false); console.log(error);});
        }

  return (
    <section className=' h-screen w-screen  ml-44 relative '>
      <div className='backgroundBlur rounded-lg  mx-[60vh] w-[70vh] h-[70vh] mt-28 text-center absolute flex flex-col gap-y-3'>
        <h1 className=' mt-5 mb-10 font-bold'> Ça me fera plaisir de discuter avec vous! JOB ONLY!! </h1>
        <form className='flex flex-col justify-center items-center gap-10 '
        onSubmit={submit}>
            <label>
              <input 
              type="text" 
              name="name" 
              className='input  text-black'
              placeholder='Nom'
              value = {form.name}
              onChange={miseAjour}
              required />
            </label>
            <label>
              <input 
              type="email" 
              name="email" 
              className='input  text-black'
              placeholder='email@gmail.com'
              value = {form.email}
              onChange={miseAjour}
              required />
            </label>
            <label>
              <textarea 
              name="message" 
              rows={4}
              className='textarea text-black'
              placeholder='message'
              value = {form.message}
              onChange={miseAjour}
              required /> 
            </label>
            <button
            type ='submit'
            className='btn bouton'
            disabled={isloading}>
              {isloading ? 'Envoie en cours...' : 'Envoyer'}
            </button>
        </form>
        <a href='https://www.linkedin.com/in/andrea-tchouambou-054b481a1/' className= "w-20 " target="_blank"> <img src={linkedin}/> </a>
        <a href='https://github.com/andrea-tchL' className= "w-7 " target="_blank"> <img src={github}/> </a>
      </div>
      
      <div className=' backgroundRotate bg-white rounded-lg w-[60vh] h-[70vh] mt-28 ml-9 absolute  '>
        <Canvas camera={{ near: 0.1, far: 1000 }} className=' z-10'>
          <Suspense fallback={<Load/>}>
            <ambientLight intensity={3}/>
            <directionalLight position={[1,1,1]} intensity={3}/>
            <Robot
            currentAnimation={ismoving}/>
          </Suspense>
        </Canvas>
      </div>
    </section>
  )
}

export default Contact