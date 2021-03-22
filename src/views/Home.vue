<template>
  <v-expansion-panels>
    <v-expansion-panel
      v-for="panel in panels"
      :key="panel.pid"
    >
      <v-expansion-panel-header>
        {{ panel.label }}
      </v-expansion-panel-header>
      <v-expansion-panel-content>
        <component :is="panel.component"></component>
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-expansion-panels>
</template>

<script>
  import UsersTable from '@/components/users/UsersTable.vue';
  import UserFields from '@/components/users/UserFields.vue';
export default {
  
  components: {
    // 'UsersTable': require('@/components/users/UsersTable.vue').default,
    // 'UserFields': require('@/components/users/UserFields.vue').default,
    UsersTable,
    UserFields
  },
  data() {
    return {
      panels: [
        {
          pid: 0,
          label: 'Users\' Table',
          component: UsersTable
        },
        {
          pid: 1,
          label: 'User Fields',
          component: UserFields
        },

      ]
    }
  }
}
</script>