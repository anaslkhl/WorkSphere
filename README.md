Système Interactif de Gestion de Personnel par Plan d'Étage

Ce projet est une application web interactive conçue pour visualiser et gérer l'affectation du personnel (staff) à des pièces spécifiques sur un plan d'étage de bureau. L'application utilise une grille superposée à une image de fond pour simuler les pièces, permettant une gestion simple par glisser-déposer (ou par clic) des membres du personnel.

*** Fonctionnalités Clés

Visualisation Instantanée : Affiche le plan d'étage et la position actuelle de chaque membre du personnel.

Gestion des Membres (CRUD) : Permet d'ajouter, modifier et supprimer des fiches de personnel.

Affectation des Pièces :

Les membres sont déplacés entre la liste principale (Staff members) et les pièces du plan.

La validation des règles d'affectation (basée sur le rôle) est intégrée.

Design Responsive (Optimisé) : L'interface a été optimisée pour s'afficher correctement sur tous les appareils (ordinateurs de bureau, tablettes et téléphones mobiles).

Persistance des Données : Utilise le localStorage du navigateur pour sauvegarder l'état du personnel et leurs affectations.

*** Technologies Utilisées

Fichier

Rôle

Technologies Clés

index.html

Structure

HTML5

style.css

Présentation et Réactivité

CSS3 (Flexbox, Grid Layout, Media Queries)

script.js

Logique d'Application

JavaScript (DOM Manipulation, localStorage, JSON, Expressions Régulières)

*** Structure du Projet

.
├── index.html          # Structure de l'application
├── style.css           # Styles, alignement du plan, et réactivité
├── script.js           # Logique d'application (CRUD, gestion des pièces)
└── img/
    └── background.jpg  # Image du plan d'étage


*** Notes sur l'Implémentation et la Réactivité

L'alignement précis entre les zones interactives (les pièces) et l'image de fond a été réalisé en utilisant la combinaison suivante dans style.css :

background-size: 100% 100% : Force l'image à remplir parfaitement le conteneur rooms-container, éliminant les espaces vides.

aspect-ratio: 1000 / 630 : Garantit que le conteneur maintient les proportions exactes de l'image de fond, assurant que les positions de la grille restent fixes et précises lorsque l'écran est redimensionné.

Grille en Pourcentage : L'utilisation de grid-template-columns et grid-template-rows basés sur des pourcentages assure que les zones de pièce se redimensionnent de manière proportionnelle à l'image de fond.

*** Démarrage

Clonez ce dépôt ou téléchargez les fichiers index.html, style.css, et script.js.

Assurez-vous que l'image du plan d'étage (background.jpg) est placée dans le dossier img/.

Ouvrez index.html dans votre navigateur web.

L'application est immédiatement fonctionnelle.