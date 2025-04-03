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
*,
html {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

nav {
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: white;
  align-items: center;
  border-bottom: 2px solid black;
  z-index: 1000;
}

nav a {
  display: flex;
  text-decoration: none;
  color: black;
  font-size: 32px;
  cursor: pointer;
  font-family: "Inter", sans-serif;
  font-weight: 600;
}

.Logo {
  width: 55px;
  height: 55px;
}

.Logo img {
  width: 55px;
  height: auto;
}

.ElementNav {
  display: flex;
  justify-content: center;
  width: 100%;
}

.ElementNav a {
  margin: 0 300px;
  font-size: 18px;
}
</style>
