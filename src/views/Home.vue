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
.maine-app {
  display: flex;
  flex-direction: column;
  background-image: url("../assets/background.png");
  background-size: cover;
  background-position: center;
  height: 100vh;
  max-width: 100vw;
}
p{
  margin: 20px 0;
}
.msg-bienvenue {
  display: flex;
  align-items: center;
  margin-top: 100px;
}
.container-coach{
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
.msg-bienvenue h1 {
  color: black;
  font-family: "Inter", sans-serif;
  font-weight: 600;
  background-color: white;
  padding: 20px;
  border-radius: 50px;
}
.maine-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 100px;
  gap: 200px;
}
.info-coach {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0 20px;
  margin-top: 20px;
}
.info-coach p {
  font-family: "Inter", sans-serif;
  font-weight: 600;
  font-size: 20px;
}
.reparation{
  background-color: rgb(223, 223, 223);
  border-radius: 50%;
}
.msg-coach p {
  font-family: "Inter", sans-serif;
  font-weight: 600;
  font-size: 20px;
}
</style>
