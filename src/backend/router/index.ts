import { z } from 'zod';
import { publicProcedure, router } from '@/backend/trcp';
import {PokemonClient} from 'pokenode-ts'
import { prisma } from '@/utils/prisma';
export const appRouter = router({
  getPokemonById: publicProcedure
    .input(
      z.object({
        id: z.number().nullish(),
      }),
    )
    .query(async ({ input }) => {
      const api = new PokemonClient()
      const pokemon = await api.getPokemonById(input.id?input.id:1)
      return {
        name:pokemon.name,
        sprites:pokemon.sprites
      };
    }),
    castVote:publicProcedure.input(
      z.object({
        votedFor:z.number(),
        votedAgainst:z.number()
      })
    ).mutation(async(req)=>{
      const voteInDb = await prisma.vote.create({
        data:{
          ...req.input
        }
      })
      return{success:true, vote:voteInDb}
    })
})
// export type definition of API
export type AppRouter = typeof appRouter;