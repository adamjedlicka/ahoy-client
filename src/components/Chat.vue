<template>
  <div class="flex flex-col w-full h-full justify-between">
    <div class="py-2 flex flex-col flex-grow justify-end">
      <div>
        <div class="pt-2 px-2 max-w-max">
          <p class="px-4 font-bold text-md text-gray-500">Pepa</p>
          <div class="shadow-lg rounded-t-2xl p-4 bg-white">
            <p>Nazdar lidi!</p>
          </div>

          <hr />

          <div class="shadow-lg p-4 bg-white">
            <p>Tak co? Bude zítra ta akce?</p>
          </div>

          <hr />

          <div class="shadow-lg rounded-b-2xl p-4 bg-white">
            <p>Já jsem ready a mám všecko připravený.</p>
          </div>
        </div>
      </div>

      <div>
        <div class="p-2 max-w-max">
          <p class="px-4 font-bold text-md text-gray-500">Franta</p>
          <div class="shadow-lg rounded-2xl p-4 bg-white">
            <p>No jasný. Že váháš. Lojza volal, že se nedostaví ale zbytek lidí by měl bejt v chillu.</p>
          </div>
        </div>
      </div>

      <div class="flex justify-end">
        <div class="p-2 max-w-max">
          <p class="px-4 text-md text-gray-600 text-right">Adam</p>
          <div class="shadow-lg rounded-t-2xl p-4 bg-blue-200">
            <p class="text-right">Cool cool</p>
          </div>

          <hr />

          <div class="shadow-lg rounded-b-2xl p-4 bg-blue-200">
            <p class="text-right">Bude topovka. Už se těším.</p>
          </div>
        </div>
      </div>

      <div>
        <div class="pt-2 px-2 max-w-max">
          <p class="px-4 font-bold text-md text-gray-500">Řízek</p>
          <div class="shadow-lg rounded-2xl p-4 bg-white">
            <p>BITCHES!</p>
          </div>
        </div>
      </div>
    </div>

    <div>
      <div class="p-2 flex flex-row">
        <input class="p-4 bg-white shadow-lg rounded-l-2xl focus:outline-none w-full" placeholder="Napište něco..." />
        <button class="p-4 bg-white shadow-lg rounded-r-2xl focus:outline-none">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon icon-tabler icon-tabler-send"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="#4B5563"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <line x1="10" y1="14" x2="21" y2="3" />
            <path d="M21 3l-6.5 18a0.55 .55 0 0 1 -1 0l-3.5 -7l-7 -3.5a0.55 .55 0 0 1 0 -1l18 -6.5" />
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({})
</script>
