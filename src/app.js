

const characters = {
  maelle: {
    name: "Maelle",
    image: "https://expedition33.wiki.fextralife.com/file/Expedition-33/maelle-character-portrait-clair-obscur-expedition-33-wiki-guide-250px.png", // reemplaza con una URL válida
    description: `
      A los 16 años, Maelle se une a la Expedición 33 no para salvar Lumière, sino para escapar de ella. Busca libertad y conocerse a sí misma.
      Porta una <strong>espada de esgrima</strong> y su mecánica se basa en posturas:
    `,
    details: `
      <ul>
        <li><strong>Stanceless:</strong> Sin efecto especial. Postura inicial.</li>
        <li><strong>Defensiva:</strong> 50% menos daño y gana AP al esquivar.</li>
        <li><strong>Ofensiva:</strong> +50% daño y recibe más daño.</li>
        <li><strong>Virtuose:</strong> +200% daño.</li>
      </ul>
    `
  },
  verso: {
    name: "Verso",
    image: "https://expedition33.wiki.fextralife.com/file/Expedition-33/verso-character-portrait-clair-obscur-expedition-33-wiki-guide-250px.png", // reemplaza con una URL válida
    description: `
      Misterioso vigilante de la expedición. Su poder clave es la <strong>Perfección</strong> que mejora con cada acción exitosa:
    `,
    details: `
      <ul>
        <li><strong>Rangos:</strong> D → C → B → A → S</li>
        <li>Recibir daño reduce el rango (una vez por turno enemigo).</li>
        <li>Ideal usar habilidades que otorguen múltiples turnos.</li>
      </ul>
    `
  },
  lune: {
    name: "Lune",
    image: "https://expedition33.wiki.fextralife.com/file/Expedition-33/lune-character-portrait-clair-obscur-expedition-33-wiki-guide-250px.png", // reemplaza con una URL válida
    description: `
      Maga elemental e hija de investigadores. Usa <strong>Manchas Elementales</strong> para potenciar sus habilidades:
    `,
    details: `
      <ul>
        <li><strong>Tipos:</strong> Hielo, Fuego, Rayo, Tierra, Luz.</li>
        <li><strong>Luz:</strong> Puede reemplazar cualquier otro.</li>
        <li>Es clave alternar elementos y consumir las manchas estratégicamente.</li>
      </ul>
    `
  },
  sciel: {
    name: "Sciel",
    image: "https://expedition33.wiki.fextralife.com/file/Expedition-33/sciel-character-portrait-clair-obscur-expedition-33-wiki-guide-250px.png", // reemplaza con una URL válida
    description: `
      De campesina a profesora, usa <strong>Predicción</strong> para manipular el flujo del combate y ganar Cargas Solares y Lunares:
    `,
    details: `
      <ul>
        <li><strong>Predicción:</strong> Máx. 10 por enemigo.</li>
        <li><strong>Sun Charge:</strong> Al aplicar Predicción.</li>
        <li><strong>Moon Charge:</strong> Al consumir Predicción.</li>
        <li>Algunas habilidades cambian si hay Predicción activo o no.</li>
      </ul>
    `
  },
  monoco: {
    name: "Monoco",
    image: "https://expedition33.wiki.fextralife.com/file/Expedition-33/monoco-character-portrait-clair-obscur-expedition-33-wiki-guide-250px.png",
    description: `
      Un Gestral único que puede transformarse en un Nevron y usar sus habilidades. Aprende nuevas técnicas al derrotar enemigos con un ícono especial, mientras forma parte del grupo activo.
    `,
    details: `
      <ul>
        <li>Aprende habilidades al derrotar enemigos con el ícono de huella.</li>
        <li>Posee la Rueda Bestial que se activa con sus habilidades.</li>
        <li>Cada habilidad avanza el puntero de la rueda.</li>
        <li><strong>Máscaras:</strong> Ágil, Mágica, Balanceada, Pesada, Todopoderosa.</li>
      </ul>
    `
  }
};



window.onload = function () {
  //write your code here
  console.log("Hello Rigo from the console!");
  const listItems = document.querySelectorAll(".character-list li");
  const charName = document.getElementById("charName");
  const charDesc = document.getElementById("charDesc");
  const charDetails = document.getElementById("charDetails");
  const charImg = document.getElementById("charImg");

  listItems.forEach(item => {
    item.addEventListener("click", () => {
      const charKey = item.id;
      const character = characters[charKey];

      // Limpiar selección anterior
      listItems.forEach(i => i.classList.remove("active"));
      item.classList.add("active");

      // Actualizar contenido
      charName.textContent = character.name;
      charDesc.innerHTML = character.description;
      charDetails.innerHTML = character.details;

      // Mostrar imagen

      charImg.src = character.image;
      charImg.alt = character.name;
      charImg.classList.remove("d-none");

    });
  });

};
