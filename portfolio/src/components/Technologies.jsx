import React from 'react'
import {RiReactjsLine} from 'react-icons/ri'
import {TbBrandNextjs} from 'react-icons/tb'
import {SiMongodb} from 'react-icons/si'
import { DiMysql } from "react-icons/di";
import {FaNodeJs} from 'react-icons/fa'
import { SiExpress } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";

const Technologies = () => {
  return (
    <div className='border-b border-neutral-800 pb-24'>
        <h2 className='my-20 text-center text-4xl'>Technologies</h2>
        <div className="flex flex-wrap items-center justify-center gap-4">
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiMongodb className='text-7xl text-green-500'/>
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiExpress className='text-7xl'/>
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <RiReactjsLine className='text-7xl text-cyan-400'/>
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaNodeJs className='text-7xl text-green-500'/>
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <RiTailwindCssFill className='text-7xl text-cyan-400'/>
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <DiMysql className='text-7xl text-[#2c7749]'/>
            </div>
        </div>
        
    </div>
  )
}

export default Technologies