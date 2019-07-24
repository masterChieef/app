<template>
  <div class="section">
    <div class="columns">
      <div class="column is-four-fifths is-offset-1">
        <progress class="progress is-warning" value="100" max="100" />
      </div>
    </div>
    <h3 class="title">Escoge la palabra que falta</h3>
    <div class="columns">
      <div class="column">
        <p>
          {{ item1 }}
        </p>
      </div>
    </div>  
    <div class="field">
      <b-checkbox-button
        v-model="checkbox"
      >
        <b-icon icon="pentagon-outline"/>
        {{ item2 }}
      </b-checkbox-button>
    </div>
    <div class="field">
      <b-checkbox-button
        v-model="checkbox1"
      >
        <b-icon icon="triangle-outline"/>
        {{ item3 }}
      </b-checkbox-button>
    </div>
    <div class="field">
      <b-checkbox-button
        v-model="checkbox2"
      >
        <b-icon icon="square-outline"/>
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
    <b-button
      v-if="!checkbox"
      class="button"
      tag="router-link"
      to="/"
      @click="Success"
    >
      Siguiente
    </b-button>
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
        <p>Ñam tayta <b>{{ item2 }}</b> qispiramunña</p>
      </div>
    </div>
  </b-collapse><br>
  <b-message title="Instrucción" type="is-info">
    Este es un juego en donde deveras completar la oración con la palabra correcta.
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
      item1:'Ñam tayta ____________ qispiramunña',
      item2:'inti',
      item3:'yaku',
      item4:'warmi',
    }
 },
 methods:{
   comprobar() {
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
   Success() {
     this.$snackbar.open(`Gracias por jugar, en hora buena has terminado el tutorial.`)
   }
 }
}
</script>
