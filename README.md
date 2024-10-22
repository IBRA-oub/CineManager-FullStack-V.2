# 🎬 Cinéma Manager

## 📝 Contexte du projet

CinéManager est une application Full Stack permettant de gérer les réservations de séances de cinéma. Elle offre une interface utilisateur développée en React pour les clients et un backend robuste en Node.js avec Express.js pour la gestion des films, des salles, des séances et des utilisateurs.

## 🎯 Fonctionnalités
- Les administrateurs peuvent gérer les films, les salles, les séances et créer d'autres administrateurs.
- Les clients peuvent s'inscrire, se connecter, voir les séances de cinéma, réserver des places, et réinitialiser leurs mots de passe.
- Les réservations sont soumises à l'authentification du client.

## 🚀 Fonctionnalités

- **📝 Formulaire d'inscription : Validation des entrées côté frontend.
- **🔑 Connexion : Récupération et gestion du jeton JWT.
- **📧 Réinitialisation de mot de passe : Envoi d'un lien de réinitialisation par e-mail.
- **🎟️ Réservation de séances : Affichage et réservation des séances de cinéma.
- **🎬 Filtrage des films : Possibilité de filtrer les films par genre et date.
- **📅 Affichage des réservations : Liste des réservations de chaque client.

## 💻 Technologies Utilisées
- Front-End
- **React : Pour le développement de l'interface utilisateur avec des composants réutilisables.
- **React Router : Pour la gestion des routes et de la navigation.
- **Axios : Pour effectuer des requêtes HTTP vers le backend.
- **Formik / React Hook Form : Pour la gestion des formulaires.
- Back-End
- **Node.js avec Express.js : Pour créer l'API REST
- **MongoDB avec Mongoose : Pour la gestion de la base de données.
- **JWT (JSON Web Token) : Pour l'authentification sécurisée.
- **Nodemailer : Pour l'envoi des e-mails de réinitialisation de mot de passe.

## 🚀 Installation

#BackEnd

1. Clonez le dépôt:
   ```bash
   git clone https://github.com/IBRA-oub/cineMnger-frontEnd.git
   cd nom-du-repo
2. Installez les dépendances:
   ````bash
   npm install
3. Configurez la base de données:
Créez un fichier .env à la racine du projet et ajoutez vos variables d'environnement:
   ````bash
   PORT=votre_port
   MONGODB_URI=your_mongodb_connection_string
   ACCESSS_TOKEN_SECRET=your_jwt_secret
   EMAIL_USERNAME=your_email
   EMAIL_PASSWORD=your_password_of_application_that_gmail_give_to_you
4. Demarer le serveur:
   ````bash
   npm start
#FrontEnd
1. Installez les dépendances:
   ````bash
   npm install
2. demarer le projet(react+vite) :
   ````bash
   npm run dev

## 📝 UML
1. diagrame de classe 
![cinéMAnger V 2 Class Diagram (1)](https://github.com/user-attachments/assets/5e656043-5d8c-4215-a41a-7d1a72064c95)

2. use cases
![use case](https://github.com/user-attachments/assets/ca9f4b58-046e-4b0e-a4f4-4b51c585de59)

3.sequence
![diagramme-de-sequence](https://github.com/user-attachments/assets/3ef0d722-818c-49bd-b697-a0106c1ae8dc)


## 🔌 Endpoints API documentation 

https://documenter.getpostman.com/view/33302675/2sAXqy4Ky8

