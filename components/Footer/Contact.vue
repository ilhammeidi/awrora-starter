<template>
  <div class="footer">
    <v-container class="max-lg">
      <v-row :class="{ 'column-reverse': isMobile }" align="center">
        <v-col cols="12" md="5" class="px-12">
          <logo type="portrait" />
          <p>
            Donec sit amet nulla sed arcu pulvinar ultricies commodo id ligula.
          </p>
          <div class="socmed">
            <v-btn icon class="margin">
              <i class="ion-logo-facebook" />
            </v-btn>
            <v-btn icon class="margin">
              <i class="ion-logo-linkedin" />
            </v-btn>
            <v-btn icon class="margin">
               <i class="ion-logo-twitter" />
            </v-btn>
            <v-btn icon class="margin">
              <i class="ion-logo-instagram" />
            </v-btn>
          </div>
          <div class="contact">
            <p class="use-text-paragraph">
              {{ $t('common.blog_phone') }}
              <br />
              +12 345 678 90
            </p>
            <v-divider class="divider my-3" />
            <p class="use-text-paragraph">
              Skype
              <br />
              company.skype
            </p>
          </div>
          <p class="body-2 mt-15 text-center">
            &copy;&nbsp;
            {{ brand.starter.footerText }}
          </p>
        </v-col>
        <v-col cols="12" md="7">
          <div class="form-wrap">
            <v-snackbar
              v-model="openNotif"
              :timeout="4000"
              top
              right
            >
              Message Sent
            </v-snackbar>
            <v-card class="form-box">
              <v-row>
                <v-col lg="5" cols="12">
                  <h3 class="title-main use-text-title">
                    {{ $t('common.contact_title2') }}
                  </h3>
                </v-col>
                <v-col lg="7" cols="12">
                  <div class="form">
                    <v-form ref="form" v-model="valid">
                      <v-row class="spacing6">
                        <v-col cols="12" sm="12" class="px-6 py-0">
                          <v-text-field
                            v-model="name"
                            :rules="nameRules"
                            :label="$t('common.form_name')"
                            class="input"
                            required
                          />
                        </v-col>
                        <v-col cols="12" sm="12" class="px-6 py-0">
                          <v-text-field
                            v-model="email"
                            :rules="emailRules"
                            :label="$t('common.form_email')"
                            class="input"
                            required
                          />
                        </v-col>
                        <v-col cols="12" class="px-6 py-0">
                          <v-textarea
                            v-model="message"
                            rows="6"
                            class="input"
                            :label="$t('common.form_message')"
                          />
                        </v-col>
                      </v-row>
                      <div class="btn-area">
                        <v-btn
                          color="primary"
                          large
                          @click="validate"
                          block
                        >
                          {{ $t('common.form_send') }}
                        </v-btn>
                      </div>
                    </v-form>
                  </div>
                </v-col>
              </v-row>
            </v-card>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<style scoped lang="scss">
@import './footer-contact';
</style>

<script>
import Logo from '../Logo'
import brand from '~/static/text/brand'

export default {
  components: {
    Logo
  },
  data: () => ({
    brand: brand,
    openNotif: false,
    valid: true,
    name: '',
    nameRules: [v => !!v || 'Name is required'],
    email: '',
    emailRules: [
      v => !!v || 'E-mail is required',
      v => /.+@.+\..+/.test(v) || 'E-mail must be valid'
    ],
    message: ''
  }),
  methods: {
    validate() {
      if (this.$refs.form.validate()) {
        this.openNotif = true
      }
    }
  },
  computed: {
    isMobile() {
      const smDown = this.$store.state.breakpoints.smDown
      return smDown.indexOf(this.$mq) > -1
    }
  }
}
</script>
