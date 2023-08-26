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
          class="close"
          size="small"
          variant="text"
          icon
          @click="closeChat()"
        >
          <i class="ion-md-close" />
        </v-btn>
      </header>
      <div id="chat-container" class="chat-room">
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
      <div class="form mb-4">
        <v-text-field
          v-model="message"
          label="Ask something"
          class="input"
          hide-details
          @keyup.enter="send()"
        />
        <v-btn
          elevation="0"
          class="send"
          icon
          small
          color="primary"
          variant="tonal"
          @click="send()"
        >
          <span class="ion-md-send" />
        </v-btn>
      </div>
    </div>
    <v-btn
      icon
      size="large"
      class="chat-button"
      @click="toggleChat()"
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
import avatar from '@/assets/images/avatars/pp_boy4.svg';

export default {
  data() {
    return {
      showChat: false,
      message: '',
      visitorAvatar: avatar,
      conversation: [
        {
          text: 'Hola!, Maecenas',
          visitor: false,
        },
        {
          text: 'Hola!, Maecenas nisl ',
          visitor: true,
        },
        {
          text: 'Hola!, Maecenas',
          visitor: false,
        },
      ],
    };
  },
  methods: {
    send() {
      if (this.message !== '') {
        this.conversation.push({ text: this.message, visitor: true });
        this.message = '';
        // scroll to bottom
        const ctn = document.getElementById('chat-container');
        setTimeout(() => {
          ctn.scrollTo(0, ctn.scrollHeight);
        }, 300);
      }
    },
    toggleChat() {
      this.showChat = !this.showChat;
    },
    closeChat() {
      this.showChat = false;
    },
  },
};
</script>
