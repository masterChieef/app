<template>
  <div class="section">
    <div class="columns">
      <div class="column is-four-fifths is-offset-1">
        <progress class="progress is-warning" value="60" max="100" />
      </div>
    </div>
    <h3 class="title">Marca la solución correcta</h3>
    <div class="columns">
      <div class="column">
        <p>
          LLamkaqmi risaq.
        </p>
      </div>
    </div>  
    <div class="field">
      <b-checkbox-button
        v-model="checkbox1"
      >
        <b-icon icon="numeric-1-box-outline"/>
        {{ item1 }}
      </b-checkbox-button>
    </div>
    <div class="field">
      <b-checkbox-button
        v-model="checkbox"
      >
        <b-icon icon="numeric-2-box-outline"/>
        {{ item3 }}
      </b-checkbox-button>
    </div>
    <div class="field">
      <b-checkbox-button
        v-model="checkbox2"
      >
        <b-icon icon="numeric-3-box-outline"/>
        {{ item4 }}
      </b-checkbox-button>
    </div>
  <div class="buttons">
    <button
      class="button is-success"
      @click="comprobar"
    >
      Comprobar
    </button>
    <nuxt-link
      class="button"
      to="/prueba4"
    >
      Siguiente
    </nuxt-link>
  </div>
  <b-message title="Instrucción" type="is-info">
    Este es un juego en donde deveras escojer la oración correcta.
  </b-message>
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
      checkbox3: true,
      item1:'Te quiero mucho.',
      item3:' Me voy a trabajar.',
      item4:'Mi papá se fue de viaje.',
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
