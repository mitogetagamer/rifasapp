import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
mongoose
  .connect(process.env.RIFAS_DB)
  .then((dato) => {
    console.log("conectado exitosamente");
  })
  .catch((error) => {
    console.log("fallo en la conexión");
    console.log(error);
  });
