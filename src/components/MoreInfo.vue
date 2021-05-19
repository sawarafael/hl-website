<template>
    <div class="q-px-xl q-pt-xl q-py-xl">
        <div class="q-pa-xl q-ma-xl column text-center text-h2 texting text-white">
            SEJA GRANDE, MAS SEJA JUSTO!
        </div>  
        <div class="q-pa-xl q-ma-xl row items-center justify-center">
            <q-card
            class="cards"
            bordered
            >
                <img src="./../assets/j1.png" alt="">
                <q-card-section>
                    <div class="q-pa-xl q-pa-xs text-black text-subtitle1 text-justify texting">
                        Esteja preparado para encarar diversos desafios em vários planetas e em várias
                         dimensões, sinta o espetácular dos fênomenos do universo lhe alcançar e te
                          ajudar a encarar e então, a te ajudar a superar cada um destes desafios.
                    </div>
                </q-card-section>
            </q-card>
            <q-separator
            spaced="12px"
            vertical
            color="transparent"
            />
            <q-card
            class="cards"
            bordered
            >
                <img src="./../assets/turtle.png" alt="">
                <q-card-section>
                    <div class="q-pa-md text-black text-subtitle1 text-justify texting">
                        Porém não tenha medo, a nossa amiga tartaruga irá te ajudar a responder
                         quaisquer questões que precisar, pra te ajudar a melhorar e entender quaisquer
                          complexidade que a dimensão, o universo e entre outras coisas há de oferecer,
                           mas não se esqueça o diferencial vem de você!
                    </div>
                </q-card-section>
            </q-card>
        </div>
        <div>
            <two-more-info />
        </div>
    </div>
</template>

<script>
import TwoMoreInfo from './TwoMoreInfo.vue'
export default {
  components: { TwoMoreInfo },
    name: 'More'
}
</script>

<style lang="scss" scoped>

.texting {
    font-family: 'poppins black';
    font-style: normal; 
    font-weight: 400;
}

.cards {
    height: 528px;
    width: 520px;
    border-radius: 0px;
}

</style>