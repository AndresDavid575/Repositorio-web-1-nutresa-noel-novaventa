document.addEventListener("DOMContentLoaded", async () => {
  const contenedor = document.getElementById("catalogo-contenedor");
  const estado = document.getElementById("mercadeo-estado");

  contenedor.style.display = "grid";
  contenedor.style.gridTemplateColumns = "repeat(auto-fit, minmax(240px, 1fr))";
  contenedor.style.gap = "20px";
  contenedor.style.marginTop = "20px";

  try {
    estado.textContent = "Cargando catálogo...";

    const lista = await window.mercadeoService.listarRecompensas();

    estado.textContent = "";
    contenedor.innerHTML = "";

    lista.forEach(item => {
      const card = document.createElement("article");
      card.className = "mercadeo-recompensa-card";

      card.style.cssText = "border: 1px solid #e0e0e0; border-radius: 10px; padding: 16px; background: #ffffff; text-align: center; box-shadow: 0 2px 6px rgba(0,0,0,0.05); display: flex; flex-direction: column; justify-content: space-between;";

      card.innerHTML = `
        <div>
          <img src="${item.imagen}" alt="${item.name}" style="width: 100%; height: 160px; object-fit: cover; border-radius: 6px;" onerror="this.src='https://picsum.photos/200/300'">
          <h3 style="margin: 12px 0 6px 0; font-size: 1.1rem; color: #333;">${item.name}</h3>
          <p style="font-weight: bold; color: #00a859; font-size: 1rem; margin-bottom: 14px;">${item.puntos} Puntos</p>
        </div>
        <button class="mercadeo-btn-canjeable" style="width: 100%; padding: 10px; background: #00a859; color: #fff; border: none; border-radius: 6px; font-weight: bold; cursor: pointer; transition: background 0.2s;">Canjear</button>
      `;

      contenedor.appendChild(card);
    });

  } catch (err) {
    estado.textContent = "Error al cargar la información.";
    estado.style.color = "red";
  }
});