<template>
  <v-card>
    <v-card-item>
      <v-form>
        <v-container>
          <v-row>
            <v-col cols="4">
              <v-text-field
                v-model="data.post.username"
                label="Usuario"
                placeholder="Escriba un nombre de usuario"
                type="input"
                id="username"
              ></v-text-field>
              <v-btn
                type="submit"
                @click.prevent="storePost"
                :disabled="!data.post.username || !data.post.body"
              >
                Enviar
              </v-btn>
            </v-col>
            <v-col cols="8">
              <v-textarea
                label="Su comentario"
                v-model="data.post.body"
                rows="4"
                id="body"
              ></v-textarea>
            </v-col>
          </v-row>
        </v-container>
      </v-form>
    </v-card-item>
  </v-card>
</template>

<script setup>
import { reactive } from 'vue'
import { usePostStore } from '../stores/usePostStore'
import moment from 'moment'
import { v4 as uuidv4 } from 'uuid'

//get store
const { addPost } = usePostStore()

//set data
const data = reactive({
  post: {
    username: '',
    body: '',
  },
})

//store post
const storePost = () => {
  const post = data.post
  post.id = uuidv4()
  post.time = moment().format('MMMM Do YYYY, h:mm:ss a')
  addPost(post)
  data.post = {
    username: '',
    body: '',
  }
}
</script>

<style></style>
