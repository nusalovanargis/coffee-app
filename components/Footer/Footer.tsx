import React from 'react'
import { FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa'



const Menu =[
    {
      id:1,
      name:"Home",
      link:"/#"
    },
    {
      id:2,
      name:"Services",
      link:"/#"
    },
    {
      id:3,
      name:"About",
      link:"/#"
    },
    {
      id:4,
      name:"Contact",
      link:"/#"
    }, 
  ]


function Footer() {
  return (
    <div className="bg-[url('/images/f1.jpg')] bg-center
    bg-no-repeat bg-cover h-full w-full">
        <div className='bg-black/60 min-h-[400px]'>
            <div className='container grid md:grid-cols-3 pb-20 pt-5'>
                <div className=' py-8 px-4'>
                    
                    <a className='font-semibold text-2xl md:text-3xl font-pacifiko text-light' >CoffePub </a>

                    <p className='pt-4 text-light'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto tempore ea, illo cumque corporis expedita nulla numquam </p>
                </div>

                <div className='col-span-2 grid grid-cols-2 md:pl-10 sm:grid-cols-3'>

                        <div className='py-8 px-4'>
                            <h1 className='text-xl  font-semibold text-white'>Important Links</h1>
                            <ul className='space-y-3 mt-4'>
                                {Menu.map((data, index)=>(
                                    <li key={index}>
                                       <a className='inline-block text-light hover:scale-110 transition duration-500' href={data.link}>
                                       {data.name}
                                        </a> 
                                    </li>


                                ))}


                            </ul>


                        </div>

                        <div className='py-8 px-4'>
                            <h1 className='text-xl  font-semibold text-white'>Quick Links</h1>
                            <ul className='space-y-3 mt-4'>
                                {Menu.map((data, index)=>(
                                    <li key={index}>
                                       <a className='inline-block text-light hover:scale-110 transition duration-500' href={data.link}>
                                       {data.name}
                                        </a> 
                                    </li>


                                ))}


                            </ul>


                        </div>

                        <div className='py-8 px-4 col-span-2 sm:col-auto'>
                              <h1 className='text-xl  font-semibold text-white'>Adress</h1>

                                <div className='mt-4 space-y-4 text-light'>
                                    <p>Azerbaijan, Baku</p>
                                    <p>+994 10 000 00 00</p>


                                </div>

                        </div>
                

                </div>


            </div>


        </div>
        
        
        
    </div>
  )
}

export default Footer