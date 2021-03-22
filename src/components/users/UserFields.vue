<template>
  <v-app>

    <!-- <div v-if="users">
      <v-row>
        <v-col
          cols="12"
          sm="6"
          md="3"
        >
          <v-select
            :items="user_names"
            label="User Names"
          ></v-select>
        </v-col>

        <v-col
          cols="12"
          sm="6"
          md="3"
        >
          <v-select
            :items="user_usernames"
            label="User User Names"
          ></v-select>
        </v-col>

        <v-col
          cols="12"
          sm="6"
          md="3"
        >
          <v-select
            :items="user_emails"
            label="User Emails"
          ></v-select>
        </v-col>

        <v-col
          cols="12"
          sm="6"
          md="3"
        >
          <v-select
            :items="user_websites"
            label="User Websites"
          ></v-select>
        </v-col>
      </v-row>

      <v-row>
        <v-col
          cols="12"
          sm="6"
          md="3"
        >
          <v-select
            :items="user_cities"
            label="User Cities"
          ></v-select>
        </v-col>

        <v-col
          cols="12"
          sm="6"
          md="3"
        >
          <v-select
            :items="user_latitudes"
            label="User Latitudes"
          ></v-select>
        </v-col>

        <v-col
          cols="12"
          sm="6"
          md="3"
        >
        <v-select
          :items="user_longitudes"
          label="User Longitudes"
        ></v-select>
        </v-col>


      </v-row>
    </div> -->

  <!-- <div v-if="users">
    <li v-for="(user_name,i) in user_names" :key="i">{{ user_name }}</li>
  </div> -->

    <div v-if="users">
      <v-select
        label="Select"
        :items="users"
        v-model="selected"
      >
        <template v-slot:selection="users">
          <!-- HTML that describe how select should render selected items -->
          {{ users.item.address.city }} - {{ users.item.website }}
        </template>

        <template v-slot:item="users">
          <!-- HTML that describe how select should render items when the select is open -->
          <!-- {{ users.item.name }} - {{ users.item.username }} -->
          <!-- <v-list-item>
            <v-list-item-content>
              <v-list-item-title v-text="users.item.name"></v-list-item-title>
              <v-list-item-subtitle>{{ users.item.username }}</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item> -->
          <v-row>
            <div><a href="https://google.com" target="_blank">{{ users.item.name }}</a></div>
            <!-- <div v-html="users.item.name"></div> -->
            <div>{{ users.item.username }}</div>
          </v-row>
        </template>
      </v-select>
    </div>

  </v-app>
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {
      selected: [],
      users: [],
      user_names: [],
      user_usernames: [],
      user_email: [],
      user_emails: [],
      user_websites: [],
      user_cities: [],
      user_latitudes: [],
      user_longitudes: [],

    }
  },
  mounted() {
    axios.get('http://jsonplaceholder.typicode.com/users')
      .then(response => {
        // JSON responses are automatically parsed.
        this.users = response.data
        this.user_names = Object.keys(this.users).map(item => this.users[item].name)
        this.user_usernames = Object.keys(this.users).map(item => this.users[item].username)
        this.user_emails = Object.keys(this.users).map(item => this.users[item].email)
        this.user_websites = Object.keys(this.users).map(item => this.users[item].website)
        this.user_cities = Object.keys(this.users).map(item => this.users[item].address.city)
        this.user_latitudes = Object.keys(this.users).map(item => this.users[item].address.geo.lat)
        this.user_longitudes = Object.keys(this.users).map(item => this.users[item].address.geo.lng)
        
      })
      .catch(e => {
        this.errors.push(e)
      })

  },
}

</script>

<style>

</style>