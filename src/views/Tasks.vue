<template>
  <h3 class="text-white" v-if="tasks.length">
    Всего задач: {{ tasks.length }}
  </h3>
  <h3 class="text-primary" v-if="tasks.length">
    Всего активных задач: {{ activeTasks.length }}
  </h3>
  <div class="card" v-for="task in tasks" :key="task.id" v-if="tasks.length">
    <h2 class="card-title">
      {{ task.title }}
      <AppStatus :type="task.status" />
    </h2>
    <p>
      <small>{{ task.date }}</small>
    </p>
    <router-link class="btn primary" :to="{
      name: 'edit-task',
      params: { id: task.id }
    }">Посмотреть</router-link>
  </div>
  <div class="alert primary" v-else>
    <p>Задач пока нет</p>
  </div>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'
// import { mapGetters } from 'vuex'
import AppStatus from '../components/AppStatus'

export default {
  setup() {
    const store = useStore()

    return {
      tasks: computed(() => store.getters.tasks),
      activeTasks: computed(() => store.getters.activeTasks)
    }
  },

  // computed: {
  //   ...mapGetters(['tasks', 'activeTasks'])
  // },

  components: {
    AppStatus
  }
}
</script>
