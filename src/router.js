import { createRouter, createWebHistory } from 'vue-router'
import New from './views/New'
import Task from './views/Task'
import Tasks from './views/Tasks'
import NotFound from './views/NotFound'

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    { name: 'home', path: '/', component: Tasks },
    { name: 'new-task', path: '/new', component: New },
    { name: 'edit-task', path: '/task/:id', component: Task },
    { name: 'not-found', path: '/:notFound(.*)', component: NotFound }
  ],
  linkActiveClass: 'active',
  linkExactActiveClass: 'active'
})
