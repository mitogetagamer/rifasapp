import { Schema, model } from "mongoose";

const usuarioEsquema = new Schema({
  nombre: { type: String, required: true },
  telefono: { type: String, required: true },
  contrasenia: { type: String, required: true },
  correo: {
    type: String,
    unique: true, // impide que haya dos cuentas con el mismo correo
    required: true,
  },

  numerosComprados: [
    {
      type: Schema.Types.ObjectId,
      ref: "NumeroRifa",
    },
  ],
});

const usuario = model("usuarios", usuarioEsquema);

export default usuario;
