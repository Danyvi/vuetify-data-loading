<template>
  <v-app>
    <v-data-table v-if="users"
      :headers="headers"
      :items="users"
    >
      <template slot="items" slot-scope="props">
        <td>{{ props.item.id }}</td>
        <td>{{ props.item.name }}</td>
        <td>{{ props.item.username }}</td>
        <td>{{ props.item.email }}</td>
        <td>{{ props.item.website }}</td>
        <td>{{ props.item.city }}</td>
        <td>{{ props.item.lat }}</td>
        <td>{{ props.item.lng }}</td>
      </template>
    </v-data-table>
  </v-app>
</template>

<script>
// import axios from 'axios';

export default {
  props: ['users'],
  data () {
    return {
      // users: [],
      headers: [
        { text: 'ID', value: 'id' },
        { text: 'name', value: 'name' },
        { text: 'Nsername', value: 'username' },
        { text: 'email', value: 'email' },
        { text: 'Website', value: 'website' },
        { text: 'City', value: 'address.city' },
        { text: 'Latitude', value: 'address.geo.lat' },
        { text: 'Longitude', value: 'address.geo.lng' },
      ],
    }
  },
  // mounted() {
  //   // this.headers = Object.keys(this.users[0])
  //   axios.get('http://jsonplaceholder.typicode.com/users')
  //       .then(response => {
  //         // JSON responses are automatically parsed.
  //         this.users = response.data
  //       })
  //       .catch(e => {
  //         this.errors.push(e)
  //       })
  // },
}
</script>

<style>

</style>