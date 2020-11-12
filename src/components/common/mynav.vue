<template>
    <div class="mynav">
          <h1>{{title}}</h1>
    </div>
</template>
<script>
export default {
    name:'mynav',
    props:['title']
}
</script>
<style scoped>
.mynav{
    height: 100px;
    width: 100%;
    background-color: gray;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;
}
</style>