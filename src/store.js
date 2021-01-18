import { createStore } from 'vuex'
import { v4 as uuid } from 'uuid'

export const store = createStore({
  state() {
    return {
      tasks: []
    }
  },

  mutations: {
    addTask(state, task) {
      state.tasks.push(task)
    },

    setTasks(state, tasks) {
      state.tasks = tasks
    }
  },

  actions: {
    initTasks({ commit }) {
      setTimeout(() => {
        commit('setTasks', JSON.parse(localStorage.getItem('tasks') || '[]'))
      }, 2 * 1000)
    },

    createNewTask({ commit }, task) {
      setTimeout(() => {
        task.id = uuid()
        task.status = 'progress'
        const tasks = JSON.parse(localStorage.getItem('tasks') || '[]')
        tasks.push(task)
        localStorage.setItem('tasks', JSON.stringify(tasks))
        commit('addTask', task)
      }, 2 * 1000)
    }
  },

  getters: {
    tasks(state) {
      return state.tasks
    },

    task(state, taskID) {
      return state.tasks.find((t) => t.id === taskID)
    },

    activeTasks(state, getters) {
      return getters.tasks.filter((t) => t.status === 'progress')
    }
  }
})
