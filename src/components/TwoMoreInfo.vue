<template>
    <div class="q-px-lg q-pb-md q-pa-xl">
    <q-timeline :layout="layout" class="timeline" color="accent">
      <q-timeline-entry heading>
      </q-timeline-entry>

      <q-timeline-entry
        side="left"
        subtitle="Macro"
        class="text-white"
      >
        <div class="q-pa-md text-white text-h6 text-justify texting">
            Você será um viajante do Tempo e do Espaço, tendo capacitação para
             interagir com robôs que ensinarão muitas aprendizagens durante o seu caminhos,
              tais elas como: Artes; Ciências dos Aspectos da Mente; dos Processos do Design
               e das Engenharias e tudo isto pelo ponto de vista do livro das mutações, o I-Ching.
  
        </div>
      </q-timeline-entry>

      <q-timeline-entry
        title=""
        subtitle="Geral"
        side="right"
        class="text-white"
      >
        <div class="q-pa-md text-white text-h6 text-justify texting">
         Viaje pelas fronteiras de cada universo, de cada dimensão e se aventure
          em reinos perdidos e outros em ascenção, descubra grandes histórias, veja
           o desenvolvimento de cada uma delas e aprenda como cada cultura entra em
            harmonia, compreenda e perceba como cada aresta de detalhes se prende e
             interliga para uma porta de milhares de novas vértices de diversão.
        </div>
      </q-timeline-entry>
      <q-timeline-entry
        side="left"
        subtitle="Micro"
        class="text-white"
      >
         <div class="q-pa-md text-white text-h6 text-justify texting">
        Para cada aventura que você se lançar, haverá muitos desafios para quais 
        lidar onde necessitará de toda a sua determinação para encara-los, são grandes
         desafios que estarão sempre lhe ajudando a aprender algo de como cada coisinha
          neste universo funciona, deste o tempo, até o próprio espaço.
        </div>
      </q-timeline-entry>
    </q-timeline>
  </div>
</template>

<script>
export default {
    name: 'TwoMoreInfo',
    computed: {
    layout () {
      return this.$q.screen.lt.sm ? 'dense' : (this.$q.screen.lt.md ? 'comfortable' : 'loose')
    }
  }
}
</script>

<style lang="scss" scoped>

.texting {
    font-family: 'poppins thin';
    font-style: normal;
    font-weight: 600;
    line-height: 26px;
    letter-spacing: 0em;
}

.timeline {
    height: 100%;
}

</style>