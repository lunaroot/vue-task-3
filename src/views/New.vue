<template>
  <form class="card" @submit.prevent="createNewTask({
    title,
    date,
    description
  })">
    <h1>Создать новую задачу</h1>
    <div class="form-control">
      <label for="title">Название</label>
      <input type="text" id="title" v-model="title" />
    </div>

    <div class="form-control">
      <label for="date">Дата дэдлайна</label>
      <input type="date" id="date" v-model="date" />
    </div>

    <div class="form-control">
      <label for="description">Описание</label>
      <textarea id="description" v-model="description"></textarea>
    </div>

    <button class="btn primary" :disabled="isDisabled">Создать</button>
  </form>
</template>

<script>
import { ref, watch, isRef } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

export default {
  setup() {
    const store = useStore()
    const router = useRouter()
    const isDisabled = ref(true)
    const title = ref('')
    const date = ref('')
    const description = ref('')

    watch([title, date, description], (newVals) => {
      isDisabled.value = newVals.some((v) => !v.length || v.length < 3)
    })

    return {
      isDisabled,
      title,
      date,
      description,
      createNewTask(task) {
        store.dispatch('createNewTask', task)
        router.push('/')
      }
    }
  }
}
</script>
