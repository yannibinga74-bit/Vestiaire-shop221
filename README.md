# Vestiaire — Site vitrine e-commerce (vêtements & accessoires)

Projet réalisé dans le cadre du module **Versioning** — ESITEC, Licence 1 Génie Informatique.

## Sujet

Vestiaire est un site vitrine fictif de vente en ligne de vêtements et d'accessoires.
Le site présente une page d'accueil, un catalogue filtrable par catégorie, une page
de présentation de la marque et une page de contact avec formulaire validé.

## Structure du projet

```
vestiaire/
├── index.html       # Page d'accueil : présentation de la marque + produits phares
├── boutique.html     # Catalogue complet avec filtre par catégorie (JS)
├── about.html         # Présentation de la marque et de l'équipe
├── contact.html      # Formulaire de contact avec validation JS
├── style.css          # Feuille de style commune à toutes les pages
├── script.js          # Menu responsive + filtre catalogue + validation formulaire
├── .gitignore
└── README.md
```

## Fonctionnalités JavaScript

- **Menu responsive** : bascule le menu de navigation en version mobile.
- **Filtre du catalogue** : permet d'afficher les produits par catégorie
  (Tout / Vêtements / Accessoires / Promotions) sans recharger la page.
- **Validation du formulaire de contact** : vérifie en temps réel le nom,
  l'e-mail, le sujet et la longueur du message avant l'envoi.

## Répartition des rôles

| Membre | Responsabilités |
|---|---|
| **Yann** | `index.html`, `about.html`, structure HTML globale et navigation, `script.js` |
| **Azizetasta** | `boutique.html`, `contact.html`, `style.css` (design global et responsive), rédaction du README |


Aucune installation nécessaire : ouvrir `index.html` dans un navigateur, ou servir
le dossier avec une extension type "Live Server".
