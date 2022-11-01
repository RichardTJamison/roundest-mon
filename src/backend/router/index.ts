import { z } from 'zod';
import { publicProcedure, router } from '@/backend/trcp';
import {PokemonClient} from 'pokenode-ts'
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
});
// export type definition of API
export type AppRouter = typeof appRouter;