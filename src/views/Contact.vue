<template>
    <div class="contact-container">
        <div class="form-box">
            <form>
                <input type="text" placeholder="Nom" />
                <input type="text" placeholder="Prénom" />
                <input type="email" placeholder="Email" />
                <input type="tel" placeholder="Téléphone" />
                <button type="submit">Envoyer</button>
            </form>
        </div>
        <div class="contact-info">
            <p class="address">
                CC Auchan Englos Les Géants, 0, 59320 Ennetières-en-Weppes
            </p>
            <p class="phone">03 66 33 33 44</p>
        </div>
        <div class="map-container">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2530.557264909894!2d2.958876222950043!3d50.6353409298587!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47dd2b8f351fc4e1%3A0xe3bc7e8e20f9dd92!2sBasic-Fit%2024%2F7!5e0!3m2!1sfr!2sfr!4v1743762051759!5m2!1sfr!2sfr" 
                width="600" height="450" style="border:0;" allowfullscreen="" 
                loading="lazy" referrerpolicy="no-referrer-when-downgrade">
            </iframe>
        </div>
    </div>
</template>

<script setup>

</script>

<style scoped>
.contact-container {
    text-align: center;
    font-family: Arial, sans-serif;
    position: relative;
    background-image: url("../assets/background.png");
    background-size: cover;
    background-position: center;
    padding: 20px;
}

.form-box {
    margin-top: 150px;
    background: white;
    padding: 30px;
    border-radius: 20px;
    display: inline-block;
    width: 600px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
}

form {
    display: flex;
    flex-direction: column;
    gap: 15px;
}

input,
button {
    padding: 15px;
    width: 100%;
    font-size: 18px;
    border: none;
    background: #8F8888;
    color: black;
    cursor: pointer;
}

input {
    text-align: center;
    line-height: 50px;
    height: 50px;
}

button {
    background: #8F8888;
    font-weight: bold;
    padding: 10px;
    font-size: 16px;
    width: 50%;
    margin: 0 auto;
    border-radius: 5px;
}

/* Style texte adresse et téléphone */
.contact-info {
    margin-top: 30px;
    font-size: 24px;
    font-weight: bold;
    color: black;
    text-align: center;
    text-transform: uppercase;
    text-shadow: 
        -2px -2px 0 white,  
         2px -2px 0 white,  
        -2px  2px 0 white,  
         2px  2px 0 white;
}

.address {
    font-size: 22px;
    font-weight: bold;
    text-decoration: none;
    line-height: 1.5;
}

.phone {
    font-size: 30px;
    font-weight: bold;
    margin-top: 10px;
}

.map-container {
    margin-top: 20px;
}
</style>
