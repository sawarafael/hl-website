<template>
    <div class="q-px-lg q-py-xl justify-center items-center text-center text-primary" >
        <div class="q-px-lg q-py-xl justify-center items-center text-cent text-primary row">
            <q-card class="cards">
                <img src="./../assets/hh2.png">

            <q-card-section>
                <div class="q-pa-xs text-black text-subtitle1 text-justify texting">
                    O primeiro nível é o da rede social, que permite o encontro de jogadores
                     no contexto de viagens entre dimensões, neste cenário os jogadores, as empresas
                      e as instituições podem desfrutar dos serviços de texto, voz e web-câmera para
                       conversar, fazer reuniões e até assistir aulas.
                </div>
            </q-card-section>
            </q-card>
            <q-separator 
            vertical
            spaced="30px"
            color="transparent"
            />
            <q-card class="cards">
                <img src="./../assets/hh1.png">

            <q-card-section>
                <div class="q-pa-xs text-black text-subtitle1 text-justify texting">
                    O segundo nível é o da superfície do planeta, que viabiliza uma experiência
                     de aprendizado por meio da resolução de desafios, neste cenário empresas e
                      instituições podem oferecer cursos e treinamentos em uma abordagem de
                       Storytelling
                </div>
            </q-card-section>
            </q-card>
            <q-separator 
            vertical
            spaced="30px"
            color="transparent"
            />
            <q-card class="cards">
                <img src="./../assets/hh4.png">

            <q-card-section>
                <div class="q-pa-xs text-black text-subtitle1 text-justify texting">
                    O terceiro é o nível de gestão de informação que permite a criação de conteúdo
                     dinâmico, neste cenário jogadores podem desenvolver habilidades de programação
                      dando instruções aos personagens para o desenvolvimento de um planeta sustentável.
                </div>
            </q-card-section>
            </q-card>

        </div>
    </div>
</template>

<script>
export default {
    name: 'Information'
}
</script>

<style lang="scss" scoped>

.cards {
    height: 696px;
    width: 389px;
}


.texting {
    font-family: 'poppins thin';
    font-style: normal;
    line-height: 1.75rem;
    font-size: 1rem;
    -webkit-text-stroke: 1px #000;
}

.texting-title {
    font-family: 'poppins black';
    font-style: normal;
    line-height: 1.95rem;
    text-shadow: 1px 1px #000;
}

</style>