# 🔤 Le Mot Mystère

Un jeu du pendu **"server-authoritative"** : le mot à deviner est choisi et vérifié côté serveur, le frontend ne fait qu'afficher l'état du jeu et envoyer les tentatives du joueur.

- **Frontend** : React 19 + TypeScript + Vite + Tailwind CSS v4
- **Backend** : Spring Boot + PostgreSQL ([déployé sur Render](https://backend-mystery-words.onrender.com))

## Fonctionnalités

- Récupération d'un mot aléatoire auprès de l'API au chargement et à chaque nouvelle partie
- Clavier virtuel + saisie au clavier physique
- Suivi des vies restantes, du nombre de parties jouées et des lettres essayées (bonnes/mauvaises)
- Messages de victoire, de défaite et d'erreur réseau

## Prérequis

- [Node.js](https://nodejs.org/) 18+
- npm

## Installation

```bash
git clone https://github.com/<votre-compte>/front-mystery-word.git
cd front-mystery-word
npm install
```

## Configuration

Le frontend communique avec l'API via la variable d'environnement `VITE_API_URL`.

1. Copiez le fichier d'exemple :

   ```bash
   cp .env.example .env
   ```

2. Renseignez l'URL de votre backend Spring Boot dans `.env` :

   ```env
   VITE_API_URL=https://backend-mystery-words.onrender.com/api/randomWord
   ```

   Pour développer avec un backend lancé en local, utilisez plutôt :

   ```env
   VITE_API_URL=http://localhost:8080/api/randomWord
   ```

> ⚠️ Le backend est hébergé sur le plan gratuit de Render : après une période d'inactivité, l'instance s'endort et le premier appel peut prendre 30 à 60 secondes le temps qu'elle redémarre.

## Lancer le projet

```bash
npm run dev
```

L'application est disponible sur [http://localhost:5173](http://localhost:5173).

## Autres commandes

| Commande          | Description                              |
| ----------------- | ----------------------------------------- |
| `npm run build`   | Vérifie les types et build pour la prod   |
| `npm run preview` | Prévisualise le build de production       |
| `npm run lint`    | Lance ESLint sur le projet                |

## Structure du projet

```
src/
├── components/
│   ├── Header/         # Bouton "Nouvelle partie" + compteur de parties
│   └── Gaming zone/     # Vies, mot à deviner, clavier virtuel
├── hooks/
│   └── useMysteryWord.ts  # État du mot mystère + appel à l'API
├── types/               # Types partagés des composants
└── App.tsx              # Logique du jeu (vies, lettres, fin de partie)
```

## Licence

Projet personnel à but éducatif.
