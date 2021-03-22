<template>
  <v-app>

    <div v-if="users">
      <v-row>
        <v-col
          cols="12"
          sm="6"
          md="3"
        >
          <v-text-field
            label="Name"
            v-model="name"
          ></v-text-field>
        </v-col>

        <v-col
          cols="12"
          sm="6"
          md="3"
        >
          <v-text-field
            label="Username"
            v-model="username"
          ></v-text-field>
        </v-col>

        <v-col
          cols="12"
          sm="6"
          md="3"
        >
          <v-text-field
            label="Email"
            v-model="email"
          ></v-text-field>
        </v-col>

        <v-col
          cols="12"
          sm="6"
          md="3"
        >
          <v-text-field
            label="Website"
            v-model="website"
          ></v-text-field>
        </v-col>
      </v-row>

      <v-row>
        <v-col
          cols="12"
          sm="6"
          md="3"
        >
          <v-text-field
            label="City"
            v-model="city"
          ></v-text-field>
        </v-col>

        <v-col
          cols="12"
          sm="6"
          md="3"
        >
          <v-text-field
            label="Latitude"
            v-model="latitude"
          ></v-text-field>
        </v-col>

        <v-col
          cols="12"
          sm="6"
          md="3"
        >
          <v-text-field
            label="Longitude"
            v-model="longitude"
          ></v-text-field>
        </v-col>


      </v-row>
    </div>

  </v-app>
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {
      users: [],
      name: '',
      username: '',
      email: '',
      website: '',
      city: '',
      latitude: '',
      longitude: ''
    }
  },
  mounted() {
    axios.get('http://jsonplaceholder.typicode.com/users')
      .then(response => {
        // JSON responses are automatically parsed.
        this.users = response.data
        this.name = this.users[0].name;
        this.username = this.users[0].username;
        this.email = this.users[0].email;
        this.website = this.users[0].website;
        this.city = this.users[0].address.city;
        this.latitude = this.users[0].address.geo.lat;
        this.longitude = this.users[0].address.geo.lng;
      })
      .catch(e => {
        this.errors.push(e)
      })

  },
}

</script>

<style>

</style>