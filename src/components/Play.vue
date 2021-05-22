<template>
    <div class="btn-play q-pa-xl q-pt-xl q-py-xl column container text-center items-center justify-center">
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
                    Jogar Agora!
                </span>
            </span>
            </q-btn>
            <q-separator
            spaced="200xp"
             />
        </div>
</template>


<style lang="scss" scoped>
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
.btn-play::before,
.btn-play::after {
    content: '';
    display: block;
    position: absolute;
    right: 0; left: 0;
    height: calc(50% - 5px);
    border: 1px solid $primary;
    transition: all .15s ease;
}
.btn-play::before {
    top: 0;
    border-bottom-width: 0; 
}
.btn-play::after {
    bottom: 0;
    border-top-width: 0;
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
  background-color: $accent;
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
  background-color: $accent;
}
.btn__inner::after {
  content: '';
  display: block;
  position: absolute;
  right: 0; bottom: 0;
  width: 4px;
  height: 4px;
  background-color: $accent;
  transition: all .2s ease;
}
.btn__slide {
  display: block;
  position: absolute;
  top: 0; bottom: -1px; left: -8px;
  width: 0;
  background-color: $primary;
  transform: skew(-15deg);
  transition: all .2s ease;
}
.btn__content {
  position: relative;
}
.btn-play:hover {
  color: $accent;
}
.btn-play:hover .btn__slide {
  width: calc(100% + 15px);
}
.btn-play:hover .btn__inner::after {
  background-color: $accent;
}
</style>