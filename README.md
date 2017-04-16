# SCIENCE/SPOT : L'indicateur du logement sciences-piste idéal
# Réalisé par Gilles COLLOMBET-GOURDON & Tom FÉVRIER

**Organisation du code source**
- *index.html*
- *CSVParsing.js* :
  - lit les fichiers CSV situés dans le dossier éponyme
  - initialise les tableaux correspondant aux indices pour chaque critère
- *map.js* :
  - initialise la carte Google Maps, la légende, et l'affichage du quartier idéal
  - gère l'affichage des infoboxes à chaque clic sur un quartier
  - la fonction initMap() est appelée au chargement de la page et à chaque appui sur le bouton "Valider"
- *sliders.js* :
  - initialise les contrôles pour chacun des critères
  - gère le rechargement de la carte
- *main.css* :
  - gère l'ensemble des styles du site
- *media* :
  - contient l'ensemble des images et icônes du site
- *CSV* :
  - contient les fichiers CSV correspondant à chaque critère
- libraries :
  - contient les plugins JavaScript *powerange.js* et *smooth-scroll.js*, ainsi que la feuille de style *powerange.css*

