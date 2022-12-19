<template>
    <div>
        <section class="title">
            <h1>iPhone</h1>
        </section>
        <section class="link">
            <router-link to="/alldevices">Saiba mais ></router-link>
            <a href="">Comprar ></a>
        </section>
        <section class="image">
            <img src="@/assets/iphone.jpeg" alt="">
        </section>
        <section class="title">
            <h1>Xiaomi</h1>
        </section>
        <section class="link">
            <a href="">Saiba mais ></a>
            <a href="">Comprar ></a>
        </section>
        <section class="image">
            <img src="@/assets/xiaomi.jpeg" alt="">
        </section>
    
        <section class="title">
            <h1>Samsung</h1>
        </section>
         <section class="link">
          <a href="">Saiba mais ></a>
          <a href="">Comprar ></a>
        </section>
        <section class="image">
           <img src="@/assets/samsung.jpeg" alt="">
       </section>
    </div>

</template>

<script>
export default {
    name: 'Product'

}
</script>

<style>

.link {
    display: flex;
    flex-wrap: wrap ;
    justify-content: space-between;
    margin:  auto;
    margin-top: 15px;
    margin-bottom: 15px;
    max-width: 180px;

}   
.title {
    margin-top: 100px;
}
a {
    text-decoration: none;
    color: #0c69e2;
    font-weight: 400;
    font-size: 16px;
} 
h1 {
   justify-self:center;
    margin: auto;
    width: 50%;
    text-align: center;
}   
.image {
    display: flex;
    margin: auto;
    align-content: center;
    justify-content: center;
    max-width: 320px;
}
</style>