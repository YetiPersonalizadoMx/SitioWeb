<template>
  <v-card>
    <v-card-item>
      <v-card-text>
        <router-link :to="`/post/${post.id}`" class="text-decoration-none text-secondary">
          {{ post.body }}
        </router-link>
      </v-card-text>
      <v-card-actions>
        <span> <v-icon icon="fa:fas fa-lock"></v-icon> {{ post.username }} </span>
        <span @click="storeLike" style="cursor: pointer">
          <i class="bi bi-heart"></i> {{ getPostLikes(post.id) }}
        </span>
        <router-link :to="`/post/${post.id}`" class="text-decoration-none text-dark">
          <span>
            <v-icon icon="fa:fas fa-lock"></v-icon> {{ getPostcomments(post.id).length }}
          </span>
        </router-link>
        <span> <v-icon icon="fa:fas fa-lock"></v-icon> {{ post.time }} </span>
      </v-card-actions>
    </v-card-item>
  </v-card>
</template>

<script setup>
import { useLikeStore } from '../stores/useLikeStore'
import { useCommentStore } from '../stores/useCommentStore'
import { v4 as uuidv4 } from 'uuid'

const { addLike, getPostLikes } = useLikeStore()

const { getPostcomments } = useCommentStore()

const props = defineProps({
  post: {
    type: Object,
    required: true,
  },
})

const storeLike = () => {
  const like = {
    id: uuidv4(),
    post_id: props.post.id,
  }
  addLike(like)
}
</script>

<style></style>
