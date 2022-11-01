import { getOptionsForVote } from '@/utils/getRandomPokemon'
import { trpc } from '@/utils/trpc'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import React,{useMemo,useState} from 'react'

export default function Home() {
  const [ids,updateIds] = useState(()=>getOptionsForVote())
  const [first,second]= ids
  const firstPokemon = trpc.getPokemonById.useQuery({id:first})
  const secondPokemon = trpc.getPokemonById.useQuery({id:second})

  if(!firstPokemon || !secondPokemon)
  console.log(firstPokemon.data)
  console.log(secondPokemon.data)
  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center">
      <div className='text-2xl text-center'>
        Which Pokemon is Rounder?
      </div>
      <div className='p-2'></div>
      <div className='border rounded p-8 flex justify-between item-center max-w-2xl'>
        <div className='w-16 h-16 bg-red-800'>{first}</div>
        <div className='p-8'>Vs</div>
        <div className='w-16 h-16 bg-red-800'>{second}</div>
      </div>
    </div>
  )
}
