<template>
  <div class="maine-app">
    <div>
      <div class="maine-container">
        <div class="msg-bienvenue">
          <h1>Bienvenue à notre salle de sport</h1>
        </div>
        <div class="container-coach">
          <div class="msg-coach">
            <p>Nos coachs sont là pour vous accompagner !</p>
          </div>
          <div class="info-coach">
            <div>
              <img class="reparation" src="../assets/coach1.png" alt="" />
              <p>Hee Conic</p>
            </div>
            <div>
              <img src="../assets/coach2.png"/>
              <p>Kader Bueno</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style>
/* Conteneur principal */
.maine-app {
  display: flex;
  flex-direction: column;
  background-image: url("../assets/background.png"); /* image de fond */
  background-size: cover;
  background-position: center;
  height: 100vh;
  max-width: 100vw;
}

/* Style des paragraphes */
p {
  margin: 20px 0;
}

/* Bloc du message de bienvenue */
.msg-bienvenue {
  display: flex;
  align-items: center;
  margin-top: 100px;
}

/* Container pour les coachs */
.container-coach {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  background-color: white;
  padding: 20px;
  border-radius: 30px;
  width: 700px;
}

/* Message de bienvenue */
.msg-bienvenue h1 {
  color: black;
  font-family: "Inter", sans-serif;
  font-weight: 600;
  background-color: white;
  padding: 20px;
  border-radius: 50px;
}

/* Conteneur principal */
.maine-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 100px;
  gap: 200px; /* espace entre les blocs */
}

/* Bloc contenant les infos des coachs */
.info-coach {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0 20px;
  margin-top: 20px;
}

/* Style du nom des coachs */
.info-coach p {
  font-family: "Inter", sans-serif;
  font-weight: 600;
  font-size: 20px;
}

/* Style de l’image du coach 1 car probeleme de photo couper */
.reparation {
  background-color: rgb(223, 223, 223);
  border-radius: 50%; /* permet de mettre le fond danc la continuite du cercle de la photo (permet juste d'arrondir) */
}

/* Texte du message de bienvenu */
.msg-coach p {
  font-family: "Inter", sans-serif;
  font-weight: 600;
  font-size: 20px;
}
</style>
