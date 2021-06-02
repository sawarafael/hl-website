<template>
<canvas id="c">

</canvas>
</template>

<script>
const THREE = require('three.js')

const canvas = document.querySelector('#c');
const renderer = new THREE.WebGLRenderer({canvas});

export default {

}
</script>

<style lang="scss" scoped>

body { margin: 0; }
canvas { width: 100%; height: 100% }

</style>