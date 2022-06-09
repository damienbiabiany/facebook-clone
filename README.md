This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Dependencies
- [Next-auth](https://next-auth.js.org/)
- [HeroIcon](https://github.com/tailwindlabs/heroicons)
- [Tailwind CSS](https://tailwindcss.com/docs/installation)
- [React Firebase Hook](https://www.npmjs.com/package/react-firebase-hooks)
- [React Firebase Hook (V9)](https://github.com/CSFrequency/react-firebase-hooks/tree/v4.0.2)
- [Firebase](https://firebase.google.com/docs/web/setup)
- [tailwind-scrollbar-hide](https://www.npmjs.com/package/tailwind-scrollbar-hide)

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
# facebook-clone



-------------------- NEXTJS --------------
System Requirements: Node.js 12.22.0 or later

How to install : https://www.npmjs.com/package/next
github: https://github.com/vercel/next.js


Current version of nextjs for the project: 12.1.4

Documentation(Nextjs): https://nextjs.org/docs


Why use Nextjs for the project ?
Déploiement en CLI et hébergement gratuit:
  	L'avantage que procure NextJS est la simplicité de déploiement. Des services  comme Vercel ou Netlify nous permettent de déployer l'application via le terminal et de bénéficier d'un CDN et d'un certificat SSL gratuitement.

L'intérêt du Static Site Génération et Server Side Rendering:
Un des critères les plus importants aux yeux de Google et des internautes est la vitesse de chargement d'un site. Avec un temps de chargement optimisé, vous améliorez votre expérience utilisateur et en découle un meilleur référencement sur Google.


## Installing and  setup:

d:

cd D:\_Projects\Projets_en_cours

1) On initialise le projet React avec Next.js
npx create-next-app facebook-clone

1.2) Aller dans le dossier du projet créé
cd facebook-clone

1.3) Ouvrir le projet dans vscode
code .

1.4) Lancer le projet sur le serveur local
yarn run dev 
or 
npm run serve

--------  Tailwindcss Config ------
Current version of Tailwindcss for the project: ^3.0.24

Documentation: https://tailwindcss.com/

Why use Tailwindcss for the project ?
https://dev.to/jeffreythecoder/4-reasons-why-i-start-using-tailwind-css-in-every-project-5b72#:~:text=Easy%20inline%20styling,with%20a%20more%20concise%20syntax.
https://hackernoon.com/10-reasons-to-use-tailwindcss-in-your-next-project



Installing and  setup:

WARNING ARRETER LE SERVER LOCAL ==> CTRL + C

Installation: Tailwind CLI - Tailwind CSS

npm install -D tailwindcss@latest postcss autoprefixer
or:
yarn add -D tailwindcss@latest postcss autoprefixer


(Dans le dossier facebook-clone) à la racine du projet
Created Tailwind CSS config file: tailwind.config.js and
Created PostCSS config file: postcss.config.js:
npx tailwindcss init -p

Optimizing for Production - Tailwind CSS



(Dans le fichier global.scss)
@tailwind base;
@tailwind components;
@tailwind utilities;




— Just-in-Time Mode - Tailwind CSS —
(Dans le fichier tailwind.config.js)
mode: 'jit'










-------------------- GIT --------------
2) On crée le ficher Readme et on y insert une phrase
echo "# facebook-clone" >> README.md

3) On utilise git dans le sous dossier ==> facebook-clone
** On veut ce qu'il y a à l'intérieur de facebook-clone pas le dossier "facebook-clone"
git init

4) On ajoute le readme précédemment crée au commit
git add README.md

5) On nomme le commit avec un message
git commit -m "first commit"

6) On crée une branche locale main
git branch -M main

7) On connecte le repo locale avec le repo distant sur Github grâce au transfert SSH
git remote add origin git@github.com:damienbiabiany/facebook-clone.git

8) On envoie toutes les modifications locales de la branche locales à la branche distante
git push -u origin main

**FULL git commands"
echo "# facebook-clone" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin git@github.com:damienbiabiany/facebook-clone.git
git push -u origin main



—--  FIREBASE  —
Current version of firebase SDK for the project: ^9.6.11

Documentation: https://firebase.google.com/docs/web/setup

Why use firebase SDK for the project ?
The Cloud Firestore presentation explains all its advantages very well.
https://firebase.google.com/docs/firestore


Installing and  setup:
yarn add firebase
or
npm install firebase

Quelles les requêtes ont été effectuées?
Code snippet use in the project:




—-- REACT FIREBASE HOOKS MODULE  —
Current version of firebase SDK for the project: ^5.0.3

Documentation:
https://www.npmjs.com/package/react-firebase-hooks
https://github.com/csfrequency/react-firebase-hooks

Why use react firebase hooks module for the project ?
A set of reusable React hooks for Firebase.
This library gives us the ability to use a set of React hooks to make integration with Firebase simple.


Installing and  setup:
# with npm
npm install --save react-firebase-hooks

# with yarn
yarn add react-firebase-hooks


Code snippet use in the project:


—-Account developper facebook  —-

Documentation:
https://developers.facebook.com/


Why use Account developper facebook for the project ?






—-DOCUMENTATION - SERVER SIDE RENDERING—
Documentation:

Why use SERVER SIDE RENDERING for the project ?

Code snippet use in the project:







—-Mettre à jour node.js —

ERROR:
The engine "node" is incompatible with this module. Expected version "^12.19.0 || ^14.15.0 || ^16.13.0". Got "16.10.0"
error Found incompatible module.

current node version
node -v ==> v16.10.0

----- update node js ---
Go to node official website and node js installer will automatically update the local version of node


Why keeps node always updates  ?





—--- NextAuth.js —--
Current version of NextAuth.js for the project:  ^4.3.1

Documentation:
https://next-auth.js.org/
https://www.npmjs.com/package/next-auth


Why use  NextAuth.js for the project ?
The Introduction part of the NextAuth.js documentation explains very well all the advantages.
(https://next-auth.js.org/getting-started/introduction)

Installing and  setup:
yarn add next-auth

or 
npm install --save next-auth




Session Provider
Client API | NextAuth.js

Code snippet use in the project:





—-- tailwind scrollbar hide  —-
Current version of tailwind scrollbar hide for the project: ^1.1.7

Documentation:
https://www.npmjs.com/package/tailwind-scrollbar-hide

Why use tailwind scrollbar hide for the project ?
This is a tailwindcss plugin to hide the scrollbar that is highly rated and very well maintained.

Installing and  setup:
# Using npm
npm install tailwind-scrollbar-hide

# Using Yarn
yarn add tailwind-scrollbar-hide

Inside the tailwind.config.js file:
insert the line
  plugins: [require("tailwind-scrollbar-hide")],


—--- Font awesome —
Current versions of  Font awesome modules for the project:
"@fortawesome/fontawesome-svg-core":"^6.1.1",
"@fortawesome/free-solid-svg-icons": "^6.1.1",
"@fortawesome/react-fontawesome": "^0.1.18",

Documentation:
https://fontawesome.com/
https://www.kindacode.com/article/how-to-use-font-awesome-icons-in-next-js/

Why use Font awesome for the project ?
Font Awesome is the icon library and toolkit of the Internet widely used by developers and designers around the world.

Installing and  setup:
npm install @fortawesome/fontawesome-svg-core @fortawesome/free-solid-svg-icons @fortawesome/react-fontawesome

OR

yarn add @fortawesome/fontawesome-svg-core @fortawesome/free-solid-svg-icons @fortawesome/react-fontawesome


Code snippet use in the project:




 — Heroicons —
Current version of  Heroicons for the project: ^1.0.6
 

Documentation:
https://github.com/tailwindlabs/heroicons

Why use Heroicons for the project ?
A set of 450+ free MIT-licensed high-quality SVG icons for you to use in your web projects.

Installing and  setup:

yarn add @heroicons/react 
or 
npm install @heroicons/vue

Code snippet use in the project:



—--Expliquer le rôle et la structure de chaque composant —---

—-VSCODE PLUGINS  USED —-

Headwind:
https://marketplace.visualstudio.com/items?itemName=heybourn.headwind

Tailwind CSS IntelliSense:
https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss

ES7+ React/Redux/React-Native snippets:
https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets

Beautify:
https://marketplace.visualstudio.com/items?itemName=HookyQR.beautify

ESLint:
https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint

npm Intellisense:
https://marketplace.visualstudio.com/items?itemName=christian-kohler.npm-intellisense

Path Autocomplete:
https://marketplace.visualstudio.com/items?itemName=ionutvmi.path-autocomplete

Path Intellisense:
https://marketplace.visualstudio.com/items?itemName=christian-kohler.path-intellisense

Highlight Trailing White Spaces:
https://marketplace.visualstudio.com/items?itemName=ybaumes.highlight-trailing-white-spaces

JavaScript (ES6) code snippets:
https://marketplace.visualstudio.com/items?itemName=xabikos.JavaScriptSnippets

