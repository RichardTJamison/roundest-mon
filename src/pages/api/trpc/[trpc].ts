import * as trpcNext from '@trpc/server/adapters/next';
import { AppRouter, appRouter } from '@/backend/router/index';

// export API handler
export default trpcNext.createNextApiHandler({
  router: appRouter,
  createContext: () => ({}),
});

