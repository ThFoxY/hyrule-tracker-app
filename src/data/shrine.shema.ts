import { z } from "zod";

export const SHRINE_COUNT = 120; // excluding DLC shrines (for now..)
export const SCHEMA_VERSION = 1;

// Highest quality of the map (6000x5000) divided by two
const MAP_HALF_WIDTH = 3000;
const MAP_HALF_HEIGHT = 2500;

// Array of every region
export const REGIONS = [
  "Akkala",
  "Central",
  "Dueling Peaks",
  "Eldin",
  "Faron",
  "Gerudo",
  "Great Plateau",
  "Hateno",
  "Hebra",
  "Lake",
  "Lanayru",
  "Ridgeland",
  "Tabantha",
  "Wasteland",
  "Woodland",
] as const;

export type Region = (typeof REGIONS)[number];

// Validates a Zod schema against a shrine ID format
export const shrineIdSchema = z
  .string()
  .regex(/^Dungeon\d{3}$/) // "Dungeon000" (first) to "Dungeon119" (last)
  .brand<"ShrineId">();

export type ShrineId = z.infer<typeof shrineIdSchema>;

// Validates a Zod schema against a shrine JSON object
const shrineSchema = z.strictObject({
  id: shrineIdSchema,
  name: z.string().min(1),
  region: z.enum(REGIONS),
  trial: z.string().min(1),
  position: z.strictObject({
    x: z.number().min(-MAP_HALF_WIDTH).max(MAP_HALF_WIDTH),
    z: z.number().min(-MAP_HALF_HEIGHT).max(MAP_HALF_HEIGHT),
  }),
});

export type Shrine = z.infer<typeof shrineSchema>;

// Checks for unique values by casting as a set, which removes duplicates
const hasUniqueValues = (values: readonly string[]) =>
  new Set(values).size === values.length;

// Validates a Zod schema against the shrine JSON catalog
export const shrineCatalogSchema = z
  .strictObject({
    schemaVersion: z.literal(SCHEMA_VERSION),
    shrines: z.array(shrineSchema).length(SHRINE_COUNT),
  })
  .refine(({ shrines }) => hasUniqueValues(shrines.map(({ id }) => id)), {
    error: "Duplicate shrine IDs",
  })
  .refine(({ shrines }) => hasUniqueValues(shrines.map(({ name }) => name)), {
    error: "Duplicate shrine names",
  });
