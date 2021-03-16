<template>
<div>
  <div class="wrapper fadeInDown d-flex justify-content-center">
    <div id="formContent">
      <div class="fadeIn first">
        <img src="../assets/icon-left-font-monochrome-black.svg" alt="Logo Grupomania" width="200" height="60" class="navbar-brand align-top">
      </div>
      <form>
        <input type="text" id="login" class="fadeIn second" name="login" placeholder="Login">
        <input type="text" id="password" class="fadeIn third" name="login" placeholder="Password">
        <input type="text" id="password" class="fadeIn third" name="login" placeholder="Repeat password">
        <input type="submit" class="fadeIn fourth btn btn-primary" value="Create account">
      </form>
    </div>
  </div>
</div>
</template>

<script>
export default {
    setup() {
        
    },
}
</script>

<style lang="scss">

</style>