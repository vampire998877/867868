const dateIdeas = [
  "Mit dem Longboard, E-Scooter oder Fahrrad nachts durch die Stadt cruisen.",
  "Geheime Orte erkunden (verlassene Gebäude, Dächer, versteckte Spots).",
  "Jeder kauft im Supermarkt 3 weirde Lebensmittel für den anderen und man muss sie probieren.",
  "Drive-In bestellen und das Bestellte gegen Überraschungstauschobjekte tauschen.",
  "Spontan einen Mini-Vlog drehen, aber komplett übertrieben mit Drama, Slow-Mo und epischer Musik schneiden.",
  "Mit nur 5€ den besten Snack-Mix im Kiosk zusammenstellen.",
  "Essen mit verbundenen Augen erraten – einer füttert, der andere rät.",
  "In den Zug steigen und an einer random Haltestelle aussteigen.",
  "In einem Möbelhaus so tun, als würdet ihr einziehen und Fotos machen.",
  "Kinoabend – Entweder im Kino oder mit Snacks zuhause einen Film schauen.",
  "Spazieren gehen – Am See, im Wald oder einfach in der Stadt.",
  "Bowling oder Minigolf spielen.",
  "Eis essen gehen.",
  "Sushi oder Pizza essen gehen oder bestellen.",
  "Schwimmen gehen – Im Freibad, See oder einer Therme.",
  "Picknick im Park.",
  "Sonnenuntergang anschauen – Von einer Brücke, einem Berg oder einfach draußen.",
  "Gemeinsam kochen – Lieblingsgerichte oder etwas Neues ausprobieren.",
  "Freizeitpark oder Jahrmarkt besuchen.",
  "Karussell oder Achterbahn fahren.",
  "Schlittschuh laufen – Im Winter draußen oder in der Eishalle.",
  "Go-Kart fahren.",
  "Billard oder Darts spielen.",
  "Brettspiele- oder Kartenabend.",
  "Fotowalk durch die Stadt.",
  "Bücherladen-Date – Jeder sucht ein Buch für den anderen aus.",
  "Märkte oder Flohmärkte durchstöbern.",
  "Tretboot oder Kanu fahren.",
  "Café-Date – Einfach gemütlich zusammensitzen und quatschen.",
  "Restaurant-Date – Schick essen gehen oder Fast Food holen.",
  "Zoobesuch oder Aquarium anschauen.",
  "Sterne beobachten – Mit einer Decke draußen oder mit einer App die Sternbilder suchen."
];

const btn = document.getElementById("randomize-btn");
const dateIdeaElement = document.getElementById("date-idea");

btn.addEventListener("click", () => {
  const randomIdea = dateIdeas[Math.floor(Math.random() * dateIdeas.length)];
  dateIdeaElement.textContent = randomIdea;
  dateIdeaElement.classList.remove("hidden");
  dateIdeaElement.style.opacity = 1;
});
