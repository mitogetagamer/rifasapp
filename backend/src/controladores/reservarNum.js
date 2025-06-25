const reservarNumero = async (req, res) => {
  const { numero, idDelUsuario } = req.body;

  try {
    const numeroEncontrado = await NumeroRifa.findOne({ numero });

    if (!numeroEncontrado) {
      return res.status(404).json({ mensaje: "Número no encontrado" });
    }

    if (numeroEncontrado.ocupado) {
      return res.status(400).json({ mensaje: "El número ya está ocupado" });
    }

    await NumeroRifa.findByIdAndUpdate(numeroEncontrado._id, {
      ocupado: true,
      reservadoPor: idDelUsuario,
    });

    await Usuario.findByIdAndUpdate(idDelUsuario, {
      $push: { numerosComprados: numeroEncontrado._id },
    });
    res.status(200).json({ mensaje: "Número reservado con éxito" });
  } catch (error) {
    res.status(500).json({ mensaje: "algo salio mal broder" });
    console.log(error);
  }
};

const obtenerNumerosDeUsuario = async (req, res) => {
  try {
    const { idDelUsuario } = req.body;

    const usuario = await Usuario.findById(idDelUsuario).populate(
      "numerosComprados"
    );

    res.status(200).json(usuario);
  } catch (error) {
    console.log("Algo fue mal");
    res.status(500).json(error);
  }
};
