document.addEventListener('DOMContentLoaded', function() {
    // Code exécuté lorsque le DOM est entièrement chargé
    console.log('Le DOM est prêt.');

    // Exemple: Changer le texte d'un élément avec l'ID 'exemple'
    var exempleElement = document.getElementById('exemple');
    if (exempleElement) {
        exempleElement.textContent = 'Nouveau texte de l\'exemple';
    }

    // Gestion de la navigation à ancre
    var navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // Empêche le comportement par défaut du lien
            var targetId = this.getAttribute('href').substring(1); // Récupère l'ID de la cible
            scrollToTarget(targetId);
        });
    });

    // Fonction pour faire défiler jusqu'à une section
    function scrollToTarget(targetId) {
        var targetElement = document.getElementById(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth' // Fait défiler en douceur
            });
        }
    }

    // Exemple d'interaction avec un bouton
    var exempleButton = document.getElementById('exemple-button');
    if (exempleButton) {
        exempleButton.addEventListener('click', function() {
            alert('Le bouton a été cliqué !');
        });
    }
});
