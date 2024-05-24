<script>
export const TheFooter = {
  name: 'TheFooter',
}
</script>


<template>
    <footer>
      <div class="TheFooter">
        <p class="linkedin">
          <a href="https://www.linkedin.com/in/caroline-verleyen">
            <img src="/public/001-linkedin.png" alt="logo linkedin"
          /></a>
        </p>
        <p class="github">
          <a href="https://github.com/caro-verleyen"
            ><img src="/public/003-github.png" alt="logo github"
          /></a>
        </p>
        <p class="twitter">
          <a href="https://twitter.com/karaulyna0409"
            ><img src="/public/002-twitter.png" alt="logo twitter"
          /></a>
        </p>
        <p>mis à jour le 15/05/2024</p>
      </div>
    </footer>
</template>
<style>
  .TheFooter {
    display: flex;
    height: 80px;
    text-align: center;
    width: 1130px;
    font-family: "robotoMono-Bold", Tahoma, Geneva, Verdana, sans-serif;
    padding-top: 150px;
    justify-content: center;
    padding-left: 300px;
  }
  .linkedin {
    width: 50px;
  }
  .github {
    width: 50px;
  }
  .twitter {
    width: 50px;
  }
  .twitter :hover {
    opacity: 75%;
    color: white;
  }

  .linkedin :hover {
    opacity: 75%;
  }

  .github {
    opacity: 75%;
  }
</style>