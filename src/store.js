import { createStore } from 'vuex'
import { v4 as uuid } from 'uuid'

export const store = createStore({
  state() {
    return {
      tasks: []
    }
  },

  mutations: {
    addTask(store, { task }) {
      store.tasks.push(task)
    },

    setTasks(store, { tasks }) {
      store.tasks = tasks
    }
  },

  actions: {
    initTasks({ commit }) {
      setTimeout(() => {
        commit('setTasks', JSON.parse(localStorage.getItem('tasks') || []))
      }, 2 * 1000)
    },

    createNewTask({ commit }, task) {
      setTimeout(() => {
        task.id = uuid()
        task.status = 'progress'
        const tasks = JSON.parse(localStorage.getItem('tasks') || [])
        tasks.push(task)
        localStorage.setItem('tasks', JSON.stringify(tasks))
        commit('addTask', task)
      }, 5 * 1000)
    }
  },

  getters: {
    task(store, taskID) {
      return store.tasks.find((t) => t.id === taskID)
    },

    tasks(store) {
      return store.tasks
    }
  }
})
