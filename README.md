# Project Baby Database Tester

## install

1. clone repo: `git clone https://github.com/costa-rica/ProjBabyTestBdd.git`
2. install mongoose
   - dans le terminal dans le repertoire: `yarn add mongoose`
3. ajouter le .env ou just coller le BDD connection string

## lancer

`node scripts.js`

- ou si tu vuex voir qu'est-ce qu m'interesse tu puex lancer l'exemple `node scriptsNickTest.js`

## exemple (scriptsNickTest.js):

Je voulais verifier que .populate() est util, dans les BDD connections clef etranger, et non juste avec les sous documents

### 1. importer le model Project

copie le contenu de /models/project.js de notre Project_Baby_Backend au dessus de le connection

### 2. importer le model CarnetBebe

copie le contenu de /models/project.js de notre Project_Baby_Backend

### 3. ecrit les query qui m'interess

👉🏻 Au cas où : oui, en fait, .populate() est utile dans le cas des clés étrangères, et pas seulement pour les sous-documents.

1. query sans .populate()

   ```js
   const CarnetBebe = require("./carnetBebe");
   const Project = require("./project");

   Project.findOne({})
     //.populate("carnetBebe") //
     .then((data) => {
       console.log("found data");
       console.log(data);
     });
   ```

2. query avec .populate()

   ```js
   const CarnetBebe = require("./carnetBebe");
   const Project = require("./project");

   Project.findOne({})
     .populate("carnetBebe") //
     .then((data) => {
       console.log("found data");
       console.log(data);
     });
   ```
