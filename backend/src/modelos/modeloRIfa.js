import { model, Schema } from "mongoose";

const numeroRifaEsquema = new Schema({
  numero: { type: Number, required: true },
  ocupado: { type: Boolean, default: false },
  reservadoPor: { type: Schema.Types.ObjectId, ref: "Usuario" },
});

const NumeroRifa = model("NumeroRifa", numeroRifaEsquema);

export default NumeroRifa;
