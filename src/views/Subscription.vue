<template>
  <div class="main-app">
    <div class="subscription-container">
      <div class="subscription-card">
        <img src="../assets/logo-abonnement.png" alt="Logo CrossFrite" class="logo" />
        <h2>CrossFrite Abonnements</h2>
        <p>Mensuel : 30€</p>
      </div>
      <div class="subscription-card">
        <img src="../assets/logo-abonnement.png" alt="Logo CrossFrite" class="logo" />
        <h2>CrossFrite Abonnements</h2>
        <p>Trimestriel : 80€</p>
      </div>
      <div class="subscription-card">
        <img src="../assets/logo-abonnement.png" alt="Logo CrossFrite" class="logo" />
        <h2>CrossFrite Abonnements</h2>
        <p>Annuel : 300€</p>
      </div>
    </div>

    <div class="condition" @click="openModal">
      <p>Condition d'engagement</p>
    </div>
    <!-- Fenêtre modale qui s'affiche quand on clique dessus -->
    <div v-if="isModalOpen" class="modal-overlay">
      <div class="modal">
        <span class="close-btn" @click="closeModal">&times;</span>
        <p>Lorem Ipsum is simply dummy text of the printing and  typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of  type and scrambled it to make a type specimen book. It has survived not  only five centuries, but also the leap into electronic typesetting,  remaining essentially unchanged. It was popularised in the 1960s with  the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker  including versions of Lorem Ipsum.</p>
      </div>
    </div>

  </div>
</template>


<script setup>
import { ref } from 'vue'; // On importe "ref" depuis Vue

// Variable qui dit si la modale est ouverte ou non
const isModalOpen = ref(false);

// Fonction pour ouvrir la modale
const openModal = () => {
  isModalOpen.value = true;
};

// Fonction pour fermer la modale
const closeModal = () => {
  isModalOpen.value = false;
};
</script> 


<style scoped>
/* Conteneur principal */
.main-app {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: url("../assets/background.png"); /* image de fond */
  background-size: cover;
  background-position: center;
  height: 100vh;
  max-width: 100vw;
}

/* Conteneur des abonnements (cartes) */
.subscription-container {
  display: flex;
  gap: 100px; /* espace entre les abonnements */
}

/* 1 Carte d’abonnement */
.subscription-card {
  padding: 0;
  margin: 0;
  text-align: center;
  background-color: white;
}

/* Conteneur des titre des cartes */
.subscription-container h2 {
  font-size: 20px;
}

/* Conteneur du texte des prix */
.subscription-container p {
  font-family: "Inter", sans-serif;
  font-weight: 600;
}

/* Bouton des conditions d'utilisations */
.condition {
  margin-top: 150px;
  background: white;
  padding: 10px;
  border-radius: 10px;
  font-family: "Inter", sans-serif;
  font-weight: 600;
  cursor: pointer;
}

/* Texte du bouton des conditions d'utilisations */
.condition p {
  font-size: 15px;
}

/* Arrière-plan de la page quand la modale est ouverte */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6); /* fond noir transparent */
  display: flex;
  justify-content: center;
  align-items: center;
}

/* Contenu de la modale */
.modal {
  background: white;
  padding: 20px;
  width: 50%;
  text-align: center;
  border-radius: 10px;
  position: relative;
}

/* Bouton de fermeture de la modale (la croix) */
.close-btn {
  position: absolute;
  top: 10px;
  right: 20px;
  font-size: 30px;
  font-weight: bold;
  cursor: pointer;
  color: black;
}
</style>
