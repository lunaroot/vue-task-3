<template>
  <div class="card" v-if="task">
    <h2>{{ task.title }}</h2>
    <p><strong>Статус</strong>: <AppStatus :type="task.status" /></p>
    <p><strong>Дэдлайн</strong>: {{ task.date }}</p>
    <p><strong>Описание</strong>: {{ task.description }}</p>
    <div>
      <button class="btn" @click="updateTask({
        id: task.id,
        status: 'progress'
      })">Взять в работу</button>
      <button class="btn primary" @click="updateTask({
        id: task.id,
        status: 'done'
      })">Завершить</button>
      <button class="btn danger" @click="updateTask({
        id: task.id,
        status: 'cancel'
      })">Отменить</button>
    </div>
  </div>
  <h3 class="text-white center" v-else-if="!loading">
    Задачи с id <strong>{{ $route.params.id }}</strong> нет.
  </h3>
  <div class="loader" v-if="loading"></div>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'
import { useRoute } from 'vue-router'
import AppStatus from '../components/AppStatus'

export default {
  setup() {
    const store = useStore()
    const route = useRoute()

    return {
      task: computed(() => store.getters.task(route.params.id)),
      loading: computed(() => store.getters.loading),
      updateTask(task) {
        store.dispatch('updateTask', task)
      }
    }
  },

  components: {
    AppStatus
  }
}
</script>
