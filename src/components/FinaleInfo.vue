<template>
    <div class="q-pa-xl items-center justify-center text-center">
        <q-img
        src="./../assets/hex.png"
        class="q-pa-md"
        width="100%"
        height="275px"
        contain
        />
        <div class="q-pa-xl q-py-xl q-px-xl q-pt-xl texting text-center text-white text-h4">
            E aí, preparado para conhecer novas dimensões?
            <p>
                Jogue agora mesmo!
            </p>
        </div>
        <q-separator
        spaced="8px"
        />
        <div class="btn-play items-center justify-center q-pa-md q-pb-xl">
            <q-btn
            flat
            size="25px"
            class=" text-center"
            type="a"
            target="_blank"
            href="https://www.hexlibrium.com/hexlibrium"
            >
            <span class="btn__inner">
                <span class="btn__slide"></span>
                <span class="btn__content">
                    Jogar Agora Mesmo!
                </span>
            </span>
            </q-btn>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Finaleinfo'
}
</script>

<style lang="scss" scoped>

.texting {
    font-family: 'poppins thin';
    font-style: normal;
    font-weight: 600;
    line-height: 86px;
    letter-spacing: 0em;
}


.btn-play {
    font-family: 'poppins black';
    font-size: 25px;
    font-weight: 500;
    line-height: 26px;
    letter-spacing: 0em;    
    text-shadow: 3px 2px #000;
    -moz-appearance: none;
    -webkit-appearance: none;
    appearance: none;
    border: none;
    background: none;
    padding: 0;
    color: white;
    cursor: pointer;
    position: relative;
    padding: 8px;
    margin-bottom: 20px;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 14px;
    transition: all .15s ease;
}

.btn-play::active,
.btn-play::focus {
    outline: none;
}

.btn-play:active::before,
.btn-play:active::after {
  right: 3px;
  left: 3px;
}

.btn-play::before {
    top: 3px
}

.btn-play::after {
    bottom: 3px;
}

.btn__inner {
  position: relative;
  display: block;
  padding: 20px 30px;
  background-color: $primary;
  overflow: hidden;
  box-shadow: inset 0px 0px 0px 1px #000;
}

.btn__inner::before {
  content: '';
  display: block;
  position: absolute;
  top: 0; left: 0;
  width: 2px;
  height: 2px;
  background-color: $primary;
}

.btn__inner::after {
  content: '';
  display: block;
  position: absolute;
  right: 0; bottom: 0;
  width: 4px;
  height: 4px;
  background-color: $primary;
  transition: all .2s ease;
}

.btn__slide {
  display: block;
  position: absolute;
  top: 0; bottom: -1px; left: -8px;
  width: 0;
  background-color: $accent;
  transform: skew(-15deg);
  transition: all .2s ease;
}

.btn__content {
  position: relative;
}

.btn-play:hover {
  color: $primary;
}

.btn-play:hover .btn__slide {
  width: calc(100% + 15px);
}

.btn-play:hover .btn__inner::after {
  background-color: $primary;
}



</style>