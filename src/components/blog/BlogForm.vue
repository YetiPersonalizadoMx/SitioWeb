<template>
  <div class="card mt-3">
    <div class="card-body">
      <form>
        <div class="mb-3">
          <label for="username" class="form-label">Usuario</label>
          <input
            v-model="data.post.username"
            placeholder="Su nombre"
            type="text"
            class="form-control"
            id="username"
          />
        </div>
        <div class="mb-3">
          <label for="body" class="form-label">Comentario</label>
          <textarea
            v-model="data.post.body"
            placeholder="Escriba su mensaje"
            rows="3"
            cols="50"
            class="form-control"
            id="body"
          ></textarea>
        </div>
        <button
          @click.prevent="storePost"
          :disabled="!data.post.username || !data.post.body"
          type="submit"
          class="btn btn-sm btn-primary"
        >
          Enviar
        </button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import { usePostStore } from '../stores/usePostStore'
import moment from 'moment/min/moment-with-locales'
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
  moment.locale('es')
  post.time = moment().format('LLLL')
  addPost(post)
  data.post = {
    username: '',
    body: '',
  }
}
</script>

<style scoped>
.input-group {
  display: flex;
  flex-direction: row;
  border: 1px solid #ccc;
  padding: 8px 10px;
  border-radius: 8px;
}

input {
  flex-grow: 2;
  border: 1px solid #ccc;
  font-size: 16px;
}

input:focus {
  outline: none;
}

.btn {
  color: #fff;
  border: 0;
  border-radius: 8px;
  color: #fff;
  width: 100px;
  height: 40px;
  cursor: pointer;
}

.btn-primary {
  background-color: #1c2641;
}

.btn-secondary {
  background: #4ecca3;
}

.btn:hover {
  transform: scale(0.98);
  opacity: 0.9;
}

.btn:disabled {
  background-color: #cccccc;
  color: #333;
  cursor: auto;
}

.btn:disabled:hover {
  transform: scale(1);
  opacity: 1;
}
</style>
