import { Model, Schema, model } from "mongoose";
import { DbCollections } from "@/config/constants";

// Definimos una función llamada getModel que recibe un nombre de colección y un esquema (schema).
export const getModel = <T>(collectionName: DbCollections, schema: Schema): Model<T> => {
  // Esto asocia un nombre de colección y un esquema, permitiendo interactuar con la base de datos.
  return model<T>(collectionName, schema);
};
