import servidor from "./servidor.js";
import "./DB.js";
servidor.listen(3000, () => {
  console.log("servidor corriendo en el puerto 3000");
});
