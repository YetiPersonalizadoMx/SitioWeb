<template>
  <v-container>
    <div class="card mt-3">
      <div class="card-body">
        <form>
          <div class="mb-3">
            <label for="username" class="form-label">Nombre</label>
            <input
              v-model="data.comment.username"
              placeholder="Su nombre"
              type="text"
              class="form-control"
              id="username"
            />
          </div>
          <div class="mb-3">
            <label for="body" class="form-label">Comentario</label>
            <textarea
              v-model="data.comment.body"
              placeholder="Su comentario"
              rows="3"
              cols="50"
              class="form-control"
              id="body"
            ></textarea>
          </div>
          <button
            @click.prevent="storeComment"
            :disabled="!data.comment.username || !data.comment.body"
            type="submit"
            class="btn btn-sm btn-primary"
          >
            Enviar
          </button>
        </form>
      </div>
    </div>
  </v-container>
</template>

<script setup>
import { reactive } from 'vue'
import moment from 'moment/min/moment-with-locales'
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
  moment.locale('es')
  comment.time = moment().format('LLLL')
  emit('commentAdded', comment)
  data.comment = {
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
