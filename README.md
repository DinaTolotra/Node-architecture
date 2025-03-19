# Node architecture
## Introduction
This project is a model for express based web api.
## Structure
```
project/
├── .env                    # Variables d'environnement
├── .gitignore
├── package.json
├── package-lock.json
├── README.md
├── src/
│   ├── app.js                  # Configuration de l'application Express
│   ├── server.js               # Point d'entrée du serveur
│   ├── config/                 # Configuration
│   │   └── db.js               # Configuration de la base de données
│   ├── routes/                 # Routes API
│   │   ├── user.routes.js
│   │   └── auth.routes.js
│   ├── controllers/            # Contrôleurs
│   │   ├── user.controller.js
│   │   └── auth.controller.js
│   ├── middlewares/            # Middlewares personnalisés
│   │   ├── auth.js
│   │   └── errorHandler.js
│   ├── utils/                  # Helpers et utilitaires
│   │   ├── logger.js
│   │   └── apiError.js
│   └── public/                 # Fichiers statics (optionnel)
```