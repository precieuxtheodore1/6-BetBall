🎮 Présentation

6-BetBall est une application innovante qui rassemble les joueurs de jeux vidéo pour s’affronter en ligne, relever des défis, participer à des compétitions, regarder des matchs en direct et gérer leur portefeuille virtuel.
L’application combine divertissement, compétition et opportunités financières dans un environnement sécurisé.


---

📂 Structure du projet

6-betball/
│
├── backend/6-betball-backend/   # Serveur Node.js + Express + MongoDB
│   ├── server.js
│   ├── package.json
│   └── ...
│
├── frontend/6-betball-frontend/ # Interface React Native Web
│   ├── App.js
│   ├── package.json
│   ├── assets/
│   │   └── logo.png
│   └── src/
│       ├── screens/ (Splash, Login, Register, etc.)
│       └── components/
│
├── README.md
└── LICENSE


---

⚙️ Prérequis

Node.js v16+

npm (installé avec Node.js)

Replit ou un terminal local



---

🚀 Lancer le projet

1. Backend (API + MongoDB)

cd backend/6-betball-backend
npm install
npm start

➡️ Le serveur démarre sur http://localhost:5000 (ou l’URL générée par Replit).


---

2. Frontend (React Native Web)

cd frontend/6-betball-frontend
npm install
npm start

➡️ L’application démarre en mode web et est accessible dans ton navigateur via l’URL fournie par Replit.


---

🔑 Variables d’environnement

Créer un fichier .env dans backend/6-betball-backend/ :

MONGO_URI=mongodb+srv://<user>:<password>@cluster.mongodb.net/6betball
JWT_SECRET=ton_secret_jwt
PORT=5000

⚠️ Ne jamais commiter .env sur GitHub (il doit rester privé).


---

🧩 Fonctionnalités principales

🔑 Authentification : inscription, connexion

🎮 Jeux : accès aux jeux sans mise

💰 Défis : lancers et acceptations de défis avec mise

📺 Matchs en direct : spectateurs payants

🏆 Compétitions : tournois organisés par l’admin

🔔 Infos/Notifications : suivi des événements

👤 Menu Profil : portefeuille, missions, eligibility, paramètres



---

📜 Licence

Ce projet est distribué sous licence MIT.
Vous êtes libre de l’utiliser, le modifier et le distribuer sous réserve de conserver la licence d’origine.
