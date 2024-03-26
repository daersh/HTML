<script setup>

</script>

<template>
  
  <div>
  <b-card
    title="Card Title"
    img-src="https://picsum.photos/600/300/?image=25"
    img-alt="Image"
    img-top
    tag="article"
    style="max-width: 20rem;"
    class="mb-2"
  >
    <b-card-text>
      Some quick example text to build on the card title and make up the bulk of the card's content.
    </b-card-text>

    <b-button href="#" variant="primary">Go somewhere</b-button>
  </b-card>
</div>
<div class="text-center">
  <b-spinner label="Spinning"></b-spinner>
  <b-spinner type="grow" label="Spinning"></b-spinner>
  <b-spinner variant="primary" label="Spinning"></b-spinner>
  <b-spinner variant="primary" type="grow" label="Spinning"></b-spinner>
  <b-spinner variant="success" label="Spinning"></b-spinner>
  <b-spinner variant="success" type="grow" label="Spinning"></b-spinner>
</div>
<div>
  <b-spinner type="grow" label="Loading..."></b-spinner>
</div>
</template>

<style scoped>

</style>
