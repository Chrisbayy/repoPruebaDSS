const dateNode = document.getElementById("current-date");
const refreshButton = document.getElementById("refresh-btn");
const tickerTrack = document.getElementById("ticker-track");

const headlines = [
  "Nuevos satélites de órbita baja prometen internet más estable en zonas rurales.",
  "Empresas tecnológicas apuestan por baterías de estado sólido para 2027.",
  "La carrera por la computación en el borde redefine el diseño de aplicaciones.",
  "Universidades incorporan laboratorios de IA aplicada en sus primeros cursos.",
  "Visores XR mejoran su campo visual y aceleran su adopción empresarial."
];

function renderCurrentDate() {
  const formatter = new Intl.DateTimeFormat("es-ES", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric"
  });

  dateNode.textContent = formatter.format(new Date());
}

function rotateHeadline() {
  const randomIndex = Math.floor(Math.random() * headlines.length);
  tickerTrack.innerHTML = `<p>${headlines[randomIndex]}</p>`;
}

refreshButton.addEventListener("click", rotateHeadline);

renderCurrentDate();
