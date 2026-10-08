# js-exercices

Exercices et notes de cours JavaScript — Formation Epitech Pré-MSc, cours "From Scratch" (HTML/CSS/JS/React).

**Auteur :** Bastien Servoz ([@Bastien-Servoz](https://github.com/Bastien-Servoz))

## Objectif

Ce dépôt regroupe tout le travail réalisé pendant le module JavaScript : code écrit en live pendant les cours, exercices, TD et petits projets.

Il fait suite à deux dépôts précédents :

| Dépôt                | Contenu                                                                     |
| -------------------- | --------------------------------------------------------------------------- |
| `html-css-exercices` | HTML/CSS, TD 1-3, css-exercices/td-01                                       |
| `seo-sass-exercices` | SEO (robots.txt, seo.txt, html-helium) et Sass (variables, mixins, @import) |

L'historique détaillé de tout le parcours est conservé dans [`JOURNAL.md`](./JOURNAL.md).

## Méthode de travail

- Je code en direct avec le formateur, en personnalisant les exemples.
- Je ne refais pas les TP après coup : le temps gagné sert à explorer davantage de sujets.
- Chaque session est consignée dans le journal.

## Structure du dépôt

Un dossier par partie de cours, chacun pouvant contenir plusieurs sous-dossiers d'exercices ou de petits projets pratiques.

```
js-exercices/
├── README.md
├── JOURNAL.md
├── cours-partie1/        # bases du JavaScript (variables, types, fonctions...)
├── cours-partie2/        # DOM et événements
├── cours-partie3/        # la data (tableaux, objets, boucles, regex...)
│   ├── cours/
│   ├── form-checker/
│   ├── password-maker/
│   └── text-anim/
├── cours-partie4/        # les API (fetch, XMLHttpRequest, async/await)
│   ├── cours/
│   ├── joke-app/
│   ├── meal-app/
│   ├── support/
│   └── user-app/
├── cours-partie5/        # les objets et la POO (classes, héritage)
│   ├── cours/
│   ├── support/
│   └── yoga-routine/
└── cours-partie6/        # canvas, drag & drop, erreurs, modules, tests, TypeScript
    ├── cours/
    ├── drag-and-drop/
    ├── draw-js/
    ├── support/
    └── test-js/
```

## Conventions

- Noms de fichiers et dossiers **en minuscules, sans espaces** (tirets autorisés)
- **Un sous-dossier par TD / exercice**
- Vérifier le niveau d'arborescence de tout nouveau dossier dans l'Explorateur VS Code
- Pas de doublons du type `fichier (1).js`, `fichier (2).js`

## Utilisation

Ouvrir un fichier `.html` dans le navigateur (ou avec l'extension Live Server de VS Code) et consulter la console (F12) pour voir les sorties JavaScript.

Pour les scripts sans HTML, si Node.js est installé :

```bash
node chemin/vers/fichier.js
```

## Suivi

Voir [`JOURNAL.md`](./JOURNAL.md) pour le détail de chaque session (notions vues, difficultés, points à revoir).
