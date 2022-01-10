<template>
  <div class="chat">
    <div
      :class="{ show: showChat }"
      class="panel"
    >
      <header>
        <h3>
          <span class="indicator online" />
          Live Chat
        </h3>
        <v-btn
          @click="closeChat()"
          class="close"
          icon
        >
          <i class="ion-md-close" />
        </v-btn>
      </header>
      <div class="chat-room" id="chat-container">
        <ul>
          <li
            v-for="(item, index) in conversation"
            :key="index"
            :class="{ 'text-right': item.visitor }"
            class="item"
          >
            <v-avatar
              v-if="!item.visitor"
              class="avatar"
            >
              <img
                :src="visitorAvatar"
                alt="visitor"
              >
            </v-avatar>
            <span
              :class="{ from: !item.visitor }"
              class="talk"
            >
              {{ item.text }}
            </span>
          </li>
        </ul>
      </div>
      <div class="form">
        <v-text-field
          v-model="message"
          @keyup.enter="send()"
          label="Ask something"
          class="input"
        />
        <v-btn
          elevation="0"
          class="send"
          fab
          small
          @click="send()"
        >
          <span class="ion-md-send" />
        </v-btn>
      </div>
    </div>
    <v-btn
      @click="toggleChat()"
      fab
      class="chat-button"
    >
      <span class="indicator online" />
      <i class="ion-md-text" />
    </v-btn>
  </div>
</template>

<style scoped lang="scss">
@import './chat-style.scss';
</style>

<script>
import avatar from '~/static/images/avatars/pp_boy4.svg'

export default {
  data() {
    return {
      showChat: false,
      message: '',
      visitorAvatar: avatar,
      conversation: [
        {
          text: 'Hola!, Maecenas',
          visitor: false
        },
        {
          text: 'Hola!, Maecenas nisl ',
          visitor: true
        },
        {
          text: 'Hola!, Maecenas',
          visitor: false
        }
      ]
    }
  },
  methods: {
    send() {
      if (this.message !== '') {
        this.conversation.push({ text: this.message, visitor: true })
        this.message = ''
        // scroll to bottom
        const ctn = document.getElementById('chat-container')
        setTimeout(() => {
          ctn.scrollTo(0, ctn.scrollHeight)
        }, 300)
      }
    },
    toggleChat() {
      this.showChat = !this.showChat
    },
    closeChat() {
      this.showChat = false
    }
  }
}
</script>
