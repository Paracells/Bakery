<template>
  <div class="container mx-auto max-w-[1600px] max-h-[1200px]">
    <div class="relative z-10">
      <div
        class="
          absolute
          z-20
          mt-[150px]
          ml-[80px]
          max-h-[900px]
          bg-gray-800
          max-w-[1440px]
        "
      >
        <div class="flex">
          <div
            class="
              w-[840px]
              h-[900px]
              bg-black
              max-w-[840px] max-h-[900px]
              flex flex-col
              justify-center
            "
          >
            <div
              class="
                flex
                mt-8
                justify-around
                tracking-widest
                text-lg text-white
                font-bold
              "
            >
              <div><span class="text-yellow-500">Color</span>Bakery</div>
              <div class="flex justify-between font-normal">
                <router-link class="mr-10" to="/">Macarons</router-link>
                <router-link class="mr-10" to="/pastries">Pastries</router-link>
                <router-link class="mr-10" to="/macarons"
                  >Chocolates</router-link
                >
              </div>
            </div>

            <img
              src="../assets/macaroon.jpg"
              alt="macaroon"
              loading="lazy"
              class="object-cover"
            />
          </div>
          <div class="w-[600px] bg-gray-100">d</div>
        </div>
      </div>

      <div class="flex">
        <div class="w-[600px] bg-yellow-500 h-[600px]"></div>
        <div class="w-[1000px] bg-gray-300 h-[687px]"></div>
      </div>
      <div class="relative">
        <div class="flex items-end absolute -top-22">
          <div class="w-[1206px] h-[600px] bg-gray-200"></div>
          <div class="w-[394px] h-[514px] bg-black"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>


// 900h, 1440w