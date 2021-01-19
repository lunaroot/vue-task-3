<template>
  <header class="navbar">
    <strong>Freelance</strong>

    <ul class="navbar-menu">
      <li>
        <router-link to="/">Все задачи</router-link>
      </li>
      <li>
        <router-link to="/new">Создать новую задачу</router-link>
      </li>
    </ul>
  </header>
  <div class="container with-nav">
    <router-view></router-view>
  </div>
</template>

<script>
import { onMounted } from 'vue'
import { useStore } from 'vuex'

export default {
  setup() {
    const store = useStore()
    onMounted(() => {
      store.dispatch('syncTasks')
    })
  }
}
</script>
