<template>
  <div
    v-for="room in state.rooms"
    :key="room.id"
    class="m-1 p-1 bg-white shadow rounded cursor-pointer hover:shadow-lg hover:bg-gray-100 text-center"
  >
    {{ room.name.slice(0, 2) }}
  </div>

  <div
    class="m-1 p-1 bg-white shadow rounded cursor-pointer hover:shadow-lg hover:bg-gray-100 text-center"
    @click="onNewRoom"
  >
    +
  </div>

  <NewRoomModal ref="newRoomModal" />
</template>

<script>
import { defineComponent, onMounted, reactive, ref } from 'vue'
import { useApi } from '../compositions/Api.js'
import NewRoomModal from '../components/modal/NewRoomModal.vue'

export default defineComponent({
  components: {
    NewRoomModal,
  },

  setup() {
    const api = useApi()

    let newRoomModal = ref()

    const state = reactive({
      rooms: [],
    })

    onMounted(async () => {
      state.rooms = await api.get('/rooms')
    })

    const onNewRoom = async () => {
      const room = await newRoomModal.value.show()

      console.log(room)
    }

    return {
      newRoomModal,
      state,
      onNewRoom,
    }
  },
})
</script>
