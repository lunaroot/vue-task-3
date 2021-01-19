import { createStore } from 'vuex'
import { v4 as uuid } from 'uuid'

export const store = createStore({
  state() {
    return {
      isLoadData: false,
      tasks: []
    }
  },

  mutations: {
    setLoad(state, load) {
      state.isLoadData = load
    },

    setTasks(state, tasks) {
      state.tasks = tasks
    }
  },

  actions: {
    syncTasks({ commit }) {
      commit('setLoad', true)
      setTimeout(() => {
        commit('setTasks', JSON.parse(localStorage.getItem('tasks') || '[]'))
        commit('setLoad', false)
      }, 2 * 1000)
    },

    updateTask({ dispatch }, task) {
      const tasks = JSON.parse(localStorage.getItem('tasks') || '[]')
      if ((tasks.find((t) => t.id === task.id) || {}).status !== task.status) {
        localStorage.setItem('tasks', JSON.stringify(tasks.map((t) => {
          if (t.id === task.id) {
            t.status = task.status
          }
          return t
        })))

        dispatch('syncTasks')
      }
    },

    createNewTask({ dispatch }, task) {
      task.id = uuid()
      task.status = 'progress'
      const tasks = JSON.parse(localStorage.getItem('tasks') || '[]')
      tasks.push(task)
      localStorage.setItem('tasks', JSON.stringify(tasks))

      dispatch('syncTasks')
    }
  },

  getters: {
    loading(state) {
      return state.isLoadData
    },

    tasks(state) {
      return state.tasks
    },

    task: (state) => (taskID) => {
      return state.tasks.find((t) => t.id === taskID)
    },

    activeTasks(_, getters) {
      return getters.tasks.filter((t) => t.status === 'progress')
    }
  }
})
