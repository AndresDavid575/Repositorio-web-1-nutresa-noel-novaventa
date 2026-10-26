document.addEventListener("DOMContentLoaded", async () => {
  const contenedor = document.getElementById("catalogo-contenedor");
  const estado = document.getElementById("mercadeo-estado");

  try {
    estado.textContent = "Cargando catálogo...";

    const lista = await window.mercadeoService.listarRecompensas();

    estado.textContent = "";
    contenedor.innerHTML = "";

    lista.forEach(item => {
      const card = document.createElement("article");
      card.className = "mercadeo-recompensa-card";
      card.style.cssText = "border: 1px solid #ddd; border-radius: 8px; padding: 15px; background: #fff; text-align: center;";

      card.innerHTML = `
        <img src="${item.imagen}" alt="${item.name}" style="width: 100%; height: 130px; object-fit: cover; border-radius: 4px;" onerror="this.src='https://picsum.photos/200/300'">
        <h3 style="margin: 10px 0 5px 0; font-size: 1rem;">${item.name}</h3>
        <p style="font-weight: bold; color: #e67e22; margin: 8px 0;">${item.puntos} Puntos</p>
        <button class="mercadeo-btn-canjeable" style="padding: 8px 14px; background: #27ae60; color: #fff; border: none; border-radius: 4px; cursor: pointer;">Canjear</button>
      `;

      contenedor.appendChild(card);
    });

  } catch (err) {
    estado.textContent = "Error al cargar la información.";
    estado.style.color = "red";
  }
});