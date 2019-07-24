<template>
  <div class="section">
    <div class="columns">
      <div class="column is-four-fifths is-offset-1">
        <progress class="progress is-warning" value="80" max="100" />
      </div>
    </div>
    <h3 class="title">Marca la solución correcta</h3>
    <div class="columns">
      <div class="column">
        <p>
          {{ item1 }}
        </p>
      </div>
    </div>  
    <div class="field">
      <b-checkbox-button
        v-model="checkbox1"
      >
        <b-icon icon="numeric-1-box-outline"/>
        {{ item2 }}
      </b-checkbox-button>
    </div>
    <div class="field">
      <b-checkbox-button
        v-model="checkbox2"
      >
        <b-icon icon="numeric-2-box-outline"/>
        {{ item3 }}
      </b-checkbox-button>
    </div>
    <div class="field">
      <b-checkbox-button
        v-model="checkbox"
      >
        <b-icon icon="numeric-3-box-outline"/>
        {{ item4 }}
      </b-checkbox-button>
    </div>
  <div class="buttons">
    <button
      v-if="checkbox"
      class="button is-success"
      @click="comprobar"
    >
      Comprobar
    </button>
    <nuxt-link
      v-if="!checkbox"
      class="button"
      to="/prueba5"
    >
      Siguiente
    </nuxt-link>
  </div>
  <b-collapse :open="false" aria-id="ver">
    <button
      v-if="checkbox"
      class="button is-danger"
      slot="trigger"
      aria-controls="ver"
    >
      Ver Respuesta
    </button>
    <div class="notification">
      <div class="content">
        <p>{{item1}}: {{ item4 }}</p>
      </div>
    </div>
  </b-collapse>
  </div>
</template>
<script>
import { NotificationProgrammatic as Notification } from 'buefy/dist/components/notification'
import { Toast } from 'buefy/dist/components/toast'

export default {
 data (){   
   return {
      checkbox: true,
      checkbox1: true,
      checkbox2: true,
      item1:'Mamaiqui, tataiquiri?',
      item2:'Quieres comer?',
      item3:'Cuántos años tienes?',
      item4:'Y tu madre y tu padre?',
    }
 },
 methods:{
   comprobar(){
    let hola= this.checkbox==true? this.item2 : this.item1
    let resp= this.item1.includes(hola);
    let toast= resp== true? this.$toast.open({
      message:'felicitaciones has acertado!',
      type: 'is-success'
      }) : this.$toast.open({
        message:'has fallado intenta de nuevo',
        type: 'is-danger',
        hasIcon: true,
        position: 'is-bottom'
      })
    return null
   },
 }
}
</script>
