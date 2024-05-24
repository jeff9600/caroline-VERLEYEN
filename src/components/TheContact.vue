
<script lang="ts" setup>
  import navBarre from "@/components/navBarre.vue";
  import TheFooter from "@/components/TheFooter.vue";
</script>


<template>
<p class="retour">
    retour à la
    <router-link id="aPropos__link" to="/#aPropos">page d'acceuil</router-link>
  </p>
  <form class="message" id="f1" @submit="prevent" method="post">
    <label for="lastname">Nom</label>
    <input
      class="LastName"
      id="LastName"
      type="text"
      
      placeholder="Nom"
      required
    />
    <label for="firstname">Prénom</label>
    <input
      class="FirstName"
      id="FirstName"
      type="text"
      
      placeholder="Prénom"
      required
    />
    <label for="email">E-mail</label>
    <input
      class="Email"
      id="Email"
      type="text"
      
      placeholder="Votre adresse mail"
      required
    />
    <label for="mess">Votre message</label>
    <textarea
      class="Mess"
      id="Mess"
     
      required
    ></textarea>
    <input
      class="Env"
      id="Env"
      type="submit"
      
      value="valider"
    />
      
     
  </form>
</template>

<style scoped>
  .message {
    display: flex;
    align-content: center;
    flex-direction: column;
    padding-top: 10px;
    padding-left: 600px;
    padding-right: 600px;
    line-height: 50px;
  }

  .LastName {
    height: 50px;
  }
  .FirstName {
    height: 50px;
  }
  .Email {
    height: 50px;
  }
  .Mess {
    height: 150px;
  }
  .Env {
    padding-top: 10px;
    border-radius: 30%;
    width: 80px;
    height: 80px;
  }
</style>


