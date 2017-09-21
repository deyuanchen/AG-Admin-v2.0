<template>
  <div class="dashboard-container">
    <component v-bind:is="currentRole"> </component>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex';
  import EditorDashboard from './editor/index';

  export default {
    name: 'dashboard',
    components: { EditorDashboard },
    data() {
      return {
        currentRole: 'EditorDashboard'
      }
    },
    computed: {
      ...mapGetters([
        'name',
        'avatar',
        'email',
        'introduction'
      ])
    }
  }
</script>
