<template>
  <v-app>

      <v-btn @click="getData">Load Data</v-btn>
      <the-table :users="users"></the-table>
      <!-- <the-table></the-table> -->
  </v-app>
</template>

<script>
import axios from 'axios';

export default {
  components: {
    'the-table': require('@/components/shared/Table.vue').default,
  },
  data() {
    return {
      users: null,
      errors: [],
    }
  },
  methods: {
    getData() {
      axios.get('http://jsonplaceholder.typicode.com/users')
        .then(response => {
          // JSON responses are automatically parsed.
          this.users = response.data
        })
        .catch(e => {
          this.errors.push(e)
        })
    },

  },
  // mounted() {
  //   axios.get('http://jsonplaceholder.typicode.com/users')
  //       .then(response => {
  //         // JSON responses are automatically parsed.
  //         this.users = response.data
  //       })
  //       .catch(e => {
  //         this.errors.push(e)
  //       })
  // }
}
</script>
