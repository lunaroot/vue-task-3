<template>
  <span class="badge" :class="{
    primary: type === 'progress',
    warning: type === 'done',
    danger: type === 'cancel'
  }">{{ type }}</span>
</template>

<script>
export default {
  props: ['type']
}
</script>
