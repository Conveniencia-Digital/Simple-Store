<template>
  <div>
    <section class="information">
      <p>Seg/Sab</p>
      <p>Rua das Nogueiras Dourados MS</p>
    </section>
    <section class="nav">
      <p>logo</p>
    </section>
  </div>
</template>

<script>
export default {
    name: 'Information'

}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;400&display=swap'); 
* {
  margin: 0px;
  padding: 0px;
  font-family: 'Roboto', Arial, Helvetica, sans-serif;
}
.information {
  font-size: .8em;
  display: flex;
  justify-content: space-between;
  padding: 5px;
  background: #232324;
  color: white;
  position: fixed;
  top:  0px;
  width: 100%;
  
}
.nav {
  background: #00060df7;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  padding: 15px;
  position: fixed;
  width: 100%;
  top: 24px;
  
  
  
}

</style>