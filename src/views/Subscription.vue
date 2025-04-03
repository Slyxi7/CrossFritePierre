<!-- <template>
  <div class="maine-app">
    <div>
      <h1>Nos abonnements</h1>
      <ul>
        <li>Mensuel : 30€</li>
        <li>Trimestriel : 80€</li>
        <li>Annuel : 300€</li>
      </ul>
      <p>Conditions : Engagement minimum de 1 mois.</p>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.maine-app {
  display: flex;
  flex-direction: column;
  background-image: url("../assets/background.png");
  background-size: cover;
  background-position: center;
  height: 100vh;
  max-width: 100vw;
}
</style> -->
<template>
  <div class="main-app">
    <div class="subscription-container">
      <div class="subscription-card">
        <img src="../assets/logo-abonnement.png" alt="Logo CrossFrite" class="logo" />
        <h2>CrossFrite Abonnements</h2>
        <p>Tarif mensuel</p>
      </div>
      <div class="subscription-card">
        <img src="../assets/logo-abonnement.png" alt="Logo CrossFrite" class="logo" />
        <h2>CrossFrite Abonnements</h2>
        <p>Tarif trimestriel</p>
      </div>
      <div class="subscription-card">
        <img src="../assets/logo-abonnement.png" alt="Logo CrossFrite" class="logo" />
        <h2>CrossFrite Abonnements</h2>
        <p>Tarif annuel</p>
      </div>
    </div>
    <div class="condition">
      <p>Condition d'engagement</p>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.main-app {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: url("../assets/background.png");
  background-size: cover;
  background-position: center;
  height: 100vh;
  max-width: 100vw;
}

/* .subscription-container {
  display: flex;
  gap: 20px;
} */

/* .subscription-card {
  background: #f8f1e4;
  padding: 20px;
  border-radius: 10px;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
} */

/* .logo {
  width: 80px;
  height: auto;
} */

/* .condition {
  margin-top: 20px;
  background: white;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
} */
</style>
