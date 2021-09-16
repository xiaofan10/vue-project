<template>
  <div class="error-content">
    <div>
      The path is error!
      <p>
        {{Math.ceil(Math.random()*1000)}}
      </p>
    </div>
  </div>
</template>

<script>

</script>

<style scoped>
  .error-content {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 100px;
    color: #ccc;
  }
</style>