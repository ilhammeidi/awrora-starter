<template>
  <paper
    :title="$t('common.blog_about')"
    subtitle="commodo augue. In dictum leo nec odio euismod pretium."
    icon="mdi-account-circle"
  >
    <div>
      <v-list>
        <v-list-item>
          <v-list-item-avatar>
            <v-icon class="grey lighten-3" color="primary">
              mdi-calendar
            </v-icon>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title>{{ $t('common.blog_born') }}</v-list-item-title>
            <v-list-item-subtitle>Jan 9, 1974</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-avatar>
            <v-icon class="grey lighten-3" color="primary">
              mdi-phone
            </v-icon>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title>{{ $t('common.blog_phone') }}</v-list-item-title>
            <v-list-item-subtitle>(+62)8765432190</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
        <v-list-item three-line>
          <v-list-item-avatar>
            <v-icon class="grey lighten-3" color="primary">
              mdi-google-maps
            </v-icon>
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title>{{ $t('common.blog_address') }}</v-list-item-title>
            <v-list-item-subtitle>Chicendo Street no.105  Block A/5A - Barcelona, Spain</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </div>
  </paper>
</template>

<script>
import Paper from '../../Paper'

export default {
  components: {
    Paper
  }
}
</script>
