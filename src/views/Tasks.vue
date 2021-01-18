<template>
  <h1 class="text-white center">Задач пока нет</h1>
  <h3 class="text-white">
    Всего задач: {{ tasks.length }}
    Всего активных задач: 0
  </h3>
  <div class="card">
    <h2 class="card-title">
      Название задачи
      <AppStatus :type="'done'" />
    </h2>
    <p>
      <small>{{ new Date().toLocaleDateString() }}</small>
    </p>
    <button class="btn primary">Посмотреть</button>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import AppStatus from '../components/AppStatus'

export default {
  setup() {
    return {
      ...mapGetters(['tasks'])
    }
  },

  components: {
    AppStatus
  }
}
</script>
