<template>
  <div>
    <h1></h1>
    <section class="image-iphone">
      <section class="description">
        <h2>iPhone 11</h2>
        <h3>64GB Branco</h3>
        <p class="previous-price"><sup>R$</sup>2.990,00</p>
        <p><sup>R$</sup>2600 <span class="desc"> -20% </span><br></p>
        <p class="preco-parcela">12 x 260 sem juros</p>
        <p class="star">⭐️⭐️⭐️⭐️⭐️ 1.981</p>
        <input class="btn-comprar" type="submit" value="Comprar">
      </section>
      <section class="image1">
        <img src="../assets/iphone11.jpeg" alt="">
      </section>
    </section>
    <section class="image-iphone">
      <section class="description">
        <h2>iPhone 11</h2>
        <h3>128GB Branco</h3>
        <p class="previous-price"><sup>R$</sup>3.290,00</p>
        <p><sup>R$</sup>2990 <span class="desc"> -20% </span><br></p>
        <p class="preco-parcela">12 x 290 sem juros</p>
        <p class="star">⭐️⭐️⭐️⭐️⭐️ 2.181</p>
        <input class="btn-comprar" type="submit" value="Comprar">
      </section>
      <section class="image1">
        <img src="../assets/iphone11.jpeg" alt="">
      </section>
    </section>
    <section class="image-iphone">
      <section class="description">
        <h2>iPhone 12</h2>
        <h3>64GB Branco</h3>
        <p class="previous-price"><sup>R$</sup>2.990,00</p>
        <p><sup>R$</sup>2600 <span class="desc"> -20% </span><br></p>
        <p class="preco-parcela">12 x 260 sem juros</p>
        <p class="star">⭐️⭐️⭐️⭐️⭐️ 1.981</p>
        <input class="btn-comprar" type="submit" value="Comprar">
      </section>
      <section class="image1">
        <img src="../assets/iphone11.jpeg" alt="">
      </section>
    </section>
  </div>
</template>

<script>
export default {
    
}
</script>

<style scooped>

h1 {
    font-size: 60px;
    margin-top: 90px;
}

.image-iphone {
  display: flex;
  justify-content: space-around;
  margin: auto 10px;
  margin-top: 30px;
}

.btn-comprar {
  border-radius: 20px;
  width: 150px;
  height: 40px;
  background: black;
  border: 2px solid black;
  color: white;
  text-align: center;
  text-transform: uppercase;
  margin-bottom : 30px;

}
.preco-parcela {
  font-size: 10px;
  color: gray;
}

.previous-price {
  text-decoration: line-through;
  font-size: 12px;
  color: gray;
}

.star {
   font-size: 10px;
   color: gray;
}

.desc {
  background: red;
  color: white;
  font-size: 12px;
  padding: 2px;
  border-radius: 3px;
  
}
.description  h2 {
  margin-bottom: 1px;
}

.description p {
  margin-bottom: 8px;
}
h3 {
  font-size: 15px;
  margin-bottom: 8px;
}


</style>