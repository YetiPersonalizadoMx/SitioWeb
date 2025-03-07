<template>
  <v-card>
    <v-card-item>
      <v-form>
        <v-container>
          <v-row>
            <v-col cols="4">
              <v-text-field
                v-model="data.comment.username"
                label="Usuario"
                placeholder="Escriba un nombre de usuario"
                type="input"
                id="username"
              ></v-text-field>
            </v-col>
            <v-col cols="8">
              <v-textarea label="Su comentario" v-model="data.comment.body" id="body"></v-textarea>
            </v-col>
          </v-row>
          <v-col cols="8">
            <v-btn
              type="submit"
              @click.prevent="storeComment"
              :disabled="!data.comment.username || !data.comment.body"
            >
              Enviar
            </v-btn>
          </v-col>
        </v-container>
      </v-form>
    </v-card-item>
  </v-card>
</template>

<script setup>
import { reactive } from 'vue'
import moment from 'moment'
import { v4 as uuidv4 } from 'uuid'

const data = reactive({
  comment: {
    username: '',
    body: '',
  },
})

const emit = defineEmits(['commentAdded'])

const storeComment = () => {
  const comment = data.comment
  comment.id = uuidv4()
  comment.time = moment().format('MMMM Do YYYY, h:mm:ss a')
  emit('commentAdded', comment)
  data.comment = {
    username: '',
    body: '',
  }
}
</script>

<style></style>
