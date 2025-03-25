<template>
  <div class="video">
    <video
      type="video/mp4"
      autoplay
      muted
      loop
      playsinline
      src="https://yeti-webmedia.imgix.net/m/5468d8f20bd9e99f/original/230028_Article-4_Stories_Feature_Asset_Banner_Video_Desktop.mp4"
    ></video>
    <div class="content">
      <h2>nuevos productos</h2>
      <h1>Temporada Verano</h1>
      <v-btn
        density="default"
        class="px-12 text-white"
        size="large"
        style="text-transform: none; border-radius: 30px"
        variant="outlined"
      >
        Ver Productos</v-btn
      >
    </div>
  </div>
</template>

<style scoped>
.video {
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5));
  display: flex;
  align-items: center;
  justify-content: center;
}
video {
  width: 100%;
  height: auto;
  z-index: -1;
}

.content {
  position: absolute;
  text-align: center;
  h1 {
    font-size: 60px;
    color: white;
    font-weight: 600;
    margin-top: -20px;
  }
  h2 {
    color: white;
  }
}

/* Responsive */
@media (min-aspect-ratio: 16/9) {
  video {
    width: 100%;
    height: auto;
  }
}
@media (max-aspect-ratio: 16/9) {
  video {
    width: auto;
    height: 100%;
  }
}
</style>
