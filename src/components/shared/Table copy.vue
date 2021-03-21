<template>
  <v-app>
    <!-- <v-data-table
      :headers="headers"
      :items="items"
      :items-per-page="5"
      class="elevation-1"
    ></v-data-table> -->

    <div v-if="users">
      <div v-for="(user,i) in users" :key="i">
        {{ user.name }}
      </div>
    </div>
    
  </v-app>
</template>

<script>
export default {
  props: ['users'],
  data() {
    return {
      headers: [],
      items: []
    }
  },
  updated() {
    if (this.users && this.users.length !== 0) {
      console.log('USERS -> ',this.users);
      this.headers = Object.keys(this.users[0])
      console.log('HEADERS: ',this.headers);
      this.items = this.users;
    }
  }
}
</script>

<style>

</style>