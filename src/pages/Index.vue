<template>
<div class="container">
  <div class="image1 q-py-xl q-pa-xl">
    <presentation />
  </div>
  <div class="q-pa-xl q-py-xl q-px-xl">
    <information />
  </div>
  <div class="image2 q-pa-xl q-px-xl">
    <background />
  </div>
  <div class="bg-primary q-px-xl">
    <more-info />
    <finale-info />
  </div>
</div>
</template>

<script>
import Background from '../components/Background.vue'
import FinaleInfo from '../components/FinaleInfo.vue'
import Information from '../components/Information.vue'
import MoreInfo from '../components/MoreInfo.vue'
import Presentation from '../components/Presentation.vue'
export default {
  components: { Presentation, Information, Background, MoreInfo, FinaleInfo },
  name: 'PageIndex',  
  
}
</script>

<style lang="scss" scoped>

.image1 {
  background-image: url('./../assets/unknown.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: absolute;
  height: 100%;
  width: auto;
  opacity: 0;
  animation: fade-in 1s normal forwards ease-in-out;
  animation-play-state: paused;
  animation-play-state: running;
}

.image2 {
  background-image: url('./../assets/unknown22.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: absolute;
  background-attachment: fixed;
  height: 100%;
  width: auto;
}

@keyframes fade-in {
  from { opacity: 0; }
  to { opacity: 1; }
}

</style>
