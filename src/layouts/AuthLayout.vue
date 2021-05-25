<template>
<q-layout view="lHh Lpr lFf">
    <q-header elevated
    class="bg-white"
    >   
    <q-toolbar>
      <div class="navbar q-pl-xl q-ml-xl text-center">
        BLUEPRINT
      </div>
    </q-toolbar>
    </q-header>   

    <q-page-container>
      <router-view />
    </q-page-container>
    <q-footer elevated class="bg-grey-8 text-white">
      <q-toolbar>
        <q-toolbar-title>
          <q-space />
          <q-img
          src="./../assets/startup.png"
          height="50px"
          width="240px"
          contain
          />
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>

</style>