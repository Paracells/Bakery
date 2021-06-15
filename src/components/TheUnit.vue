<template>
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
</template>

<script>
export default {
  name: "TheUnit",
};
</script>

<style>
</style>
