import { shrineCatalogSchema } from "./shrine.shema";
import rawCatalog from "./shrines.json";

// The parsing executes at import: it fails if the data is invalid
export const shrines = shrineCatalogSchema.parse(rawCatalog).shrines;
