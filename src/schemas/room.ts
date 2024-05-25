import { z } from 'zod';

const textsRoomsShemaerrors = {
  id: 'Não conseguimos encontrar',
  type: {
    oneOf: 'Não conseguimos encontrar',
  },
  APIName: {
    oneOf: 'Não conseguimos encontrar',
  },
};

const mediaInputSchema = {
  id: z.string().min(1, textsRoomsShemaerrors.id),
  type: z
    .string()
    .refine(
      (value) => ["movie", "tv"].includes(value),
      textsRoomsShemaerrors.type.oneOf,
    ),
  APIName: z
    .string()
    .refine(
      (value) => ["imdb", "tmdb"].includes(value),
      textsRoomsShemaerrors.APIName.oneOf,
    ),
};

export const basicMediaStoreInputSchema = z.object({
  id: mediaInputSchema.id,
  type: mediaInputSchema.type,
  APIName: mediaInputSchema.APIName,
});
