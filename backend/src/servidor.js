import express from "express";
import morgan from "morgan";

const servidor = express();

servidor.use(morgan("dev"));
servidor.use(express.json());
servidor.get("/", (solicitud, respuesta) => {
  respuesta.status(404).send("No encontrado");
});

export default servidor;
