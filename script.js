// Génération d'un nombre aléatoire entre 1 et 100
const nombreAleatoire = Math.floor(Math.random() * 100) + 1;

// Initialisation du nombre de tentatives
let nombreDeTentatives = 0;

// Fonction pour comparer le nombre saisi avec le nombre à deviner
function devinerNombre() {
  // Récupération de la valeur saisie par l'utilisateur
  const nombreSaisi = parseInt(document.getElementById('nombreSaisi').value);

  // Vérification si le nombre est valide
  if (isNaN(nombreSaisi)) {
    document.getElementById('resultat').textContent = 'Veuillez saisir un nombre valide !';
    return;
  }

  // Incrémentation du nombre de tentatives
  nombreDeTentatives++;

  // Comparaison du nombre saisi avec le nombre à deviner
  if (nombreSaisi === nombreAleatoire) {
    document.getElementById('resultat').textContent = `Bravo, vous avez trouvé le nombre en ${nombreDeTentatives} tentatives !`;
  } else if (nombreSaisi < nombreAleatoire) {
    document.getElementById('resultat').textContent = 'Le nombre saisi est trop petit !';
  } else {
    document.getElementById('resultat').textContent = 'Le nombre saisi est trop grand !';
  }
}
