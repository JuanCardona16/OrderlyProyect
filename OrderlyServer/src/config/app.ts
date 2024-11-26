import "tsconfig-paths/register";
import express from "express";
import { corsConfig, setHeaders, errorGlobalHandler, handleNotFound } from "./api";
import routerApplication from "./routes/router";
import { connectToDatabaseMongoAtlas } from "./infraestructure/mongoDB";
import dotenv from 'dotenv'
import { URL_DATABASE } from './constants'

dotenv.config()

const app = express();

// Conección a la base de datos
connectToDatabaseMongoAtlas(URL_DATABASE)

app.use(express.json());
app.use(express.urlencoded({ limit: "1mb", extended: true }));

app.use(corsConfig());
app.use(setHeaders);

// Routes
app.get("/", (req, res) => {
  res.json({ status: 200, message: "ok, server listener!" });
});

app.use('/api/v1', routerApplication)
app.use('*', handleNotFound)

// Middleware global para el manejo de errores
app.use(errorGlobalHandler);

app.disable("x-powered-by");

export default app;
