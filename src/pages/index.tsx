import { trpc } from '@/utils/trpc'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  const {data} =trpc.hello.useQuery({text:"Ricky"})
  if (!data){return <div>Loading</div>}
  if(data){return<div>{data.greeting}</div>}
  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center">
      <div className='text-2xl text-center'>
        Which Pokemon is Rounder?
      </div>
      <div className='p-2'></div>
      <div className='border rounded p-8 flex justify-between item-center max-w-2xl'>
        <div className='w-16 h-16 bg-red-200'/>
        <div className='p-8'>Vs</div>
        <div className='w-16 h-16 bg-red-200'/>
      </div>
    </div>
  )
}
