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
                text-xl text-white
                font-bold
              "
            >
              <div><span class="text-yellow-500">Color</span>Bakery</div>
              <div class="flex justify-between font-medium text-lg">
                <router-link class="mr-10" to="/">Macarons</router-link>
                <router-link class="mr-10" to="/pastries">Pastries</router-link>
                <router-link class="mr-10" to="/chocolates"
                  >Chocolates</router-link
                >
              </div>
            </div>

            <img
              src="./assets/macaroon.jpg"
              alt="macaroon"
              loading="lazy"
              class="object-cover"
            />
          </div>
          <div class="w-[600px] bg-gray-100">
            <div class="mt-8 flex justify-around flex-col">
              <div class="flex justify-end items-baseline">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6 mr-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-8 w-8 mr-10 text-yellow-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                  />
                </svg>
              </div>
              <div class="ml-[76px] mt-[36px]">
                <div
                  class="
                    rounded-full
                    bg-yellow-400
                    w-20
                    h-20
                    flex flex-col
                    justify-center
                    text-center text-2xl
                    font-bold
                    text-white
                  "
                >
                  -20%
                </div>
                <p class="text-6xl tracking-wider text-gray-700 mt-4 font-bold">
                  Macarons
                </p>
                <p
                  class="
                    mt-4
                    mr-10
                    text-xl
                    tracking-wider
                    font-medium
                    leading-8
                  "
                >
                  Macarons have been always related with Paris, but we have
                  added the New York touch in a perfect combination.
                </p>
                <p
                  class="mt-15 text-gray-700 text-6xl font-bold tracking-wider"
                >
                  $17.95
                </p>
                <button
                  class="
                    block
                    mt-10
                    uppercase
                    px-8
                    py-6
                    bg-yellow-400
                    tracking-wide
                    text-white
                    font-bold
                    text-xl
                  "
                >
                  add to cart
                </button>
                <div class="grid grid-cols-2 grid-rows-5 mt-20 text-xl">
                  <div class="font-bold">Units</div>
                  <div class="font-bold">Number of packs</div>
                  <div>24 macarons</div>
                  <div>3 packs</div>
                  <div class="font-bold row-start-4">Gluten free</div>
                  <div class="font-bold row-start-4">Organic</div>
                  <div class="row-start-5">Yes</div>
                  <div class="row-start-5">Yes</div>
                </div>
              </div>
            </div>
          </div>
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