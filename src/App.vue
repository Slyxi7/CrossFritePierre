<template>
  <div id="app">
    <nav>
      <div class="Logo">
        <!--Container pour le logo-->
        <img src="./assets/logo.png" alt="" />
      </div>
      <div class="ElementNav">
        <router-link to="/">Accueil</router-link>
        <router-link to="/subscription">Abonnement</router-link>
        <router-link to="/contact">Contact</router-link>
      </div>
    </nav>
    <router-view />
  </div>
</template>

<script setup></script>

<style>
/* Application du style par defaut (pour enlever marge et padding par deafut du navigateur) */
*,
html {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

/* Style de la barre de navigation */
nav {
  display: flex; /* Met les éléments en ligne */
  position: fixed; /* Fixe la barre en haut de la page */
  top: 0;
  left: 0;
  right: 0;
  background-color: white;
  align-items: center;
  border-bottom: 2px solid black; /* Ligne en bas de la navbar */
  z-index: 1000; /* S'assure qu'elle est toujours au-dessus en terme de couche */
}

/* Style de base pour les liens */
nav a {
  display: flex;
  text-decoration: none; /* Enlève le style par defaut des lien (a) */
  color: black;
  font-size: 32px;
  cursor: pointer;
  font-family: "Inter", sans-serif;
  font-weight: 600;
}

/* Conteneur du logo */
.Logo {
  width: 55px;
  height: 55px;
}

/* Image du logo */
.Logo img {
  width: 55px;
  height: auto;
}

/* Conteneur des liens de navigation */
.ElementNav {
  display: flex;
  justify-content: center; /* Centre les liens horizontalement */
  width: 100%;
}

/* Espacement et taille des liens qui sont dans le conteneur de liens de navigations */
.ElementNav a {
  margin: 0 300px; /* espace entre les liens */
  font-size: 18px;
}
</style>