(function () {
  const API_URL = "https://6ada65797512f497b3ffe95e.mockapi.io/api/v1/recompensas";

  window.mercadeoService = {
    listarRecompensas: async () => {
      try {
        const respuesta = await fetch(API_URL);

        if (!respuesta.ok) {
          throw new Error("No se pudo conectar con el servidor");
        }

        const datos = await respuesta.json();
        return datos;
      } catch (err) {
        console.error("Error al traer datos:", err);
        return [];
      }
    }
  };
})();