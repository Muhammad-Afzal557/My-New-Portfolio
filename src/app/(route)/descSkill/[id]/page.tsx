



import { descSkill } from '@/lib/dynamicSkill'

import React from 'react'

const Skilldetails = ({params}:{params :{id:string}})=> {
    const skilldata = descSkill.find((val)=> val.id === params.id)
  return (
    <div className='py-10 bg-gradient-to-tr from-gray-100 to-gray-300 px-4 overflow-hidden'>
      <div className='flex flex-col space-y-4 max-w-xs  justify-center '>
        <span className='text-2xl font-bold border-b-[10px] border-gray-800 text-center animate-bounce rounded-md shadow-lg shadow-gray-800 w-10 '>{skilldata?.id}</span>
        <span className='text-2xl font-bold duration-1000  translate-x-10 '>{skilldata?.skill}</span>
        <span className='text-sm text-justify'>{skilldata?.desc}</span>
      </div>
    </div>
  )
}

export default Skilldetails
