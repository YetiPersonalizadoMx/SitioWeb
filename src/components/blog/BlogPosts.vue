<template>
  <v-row>
    <v-col>
      <Post v-for="post in getPosts" :key="post.id" :post="post" />
    </v-col>
  </v-row>
</template>

<script setup>
import { usePostStore } from '../stores/usePostStore'
import Post from './BlogPost.vue'

const { getPosts } = usePostStore()
</script>

<style></style>
