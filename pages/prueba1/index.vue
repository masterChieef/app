<template>
  <div class="section">
    <div class="columns">
      <div class="column is-four-fifths is-offset-1">
        <progress class="progress is-warning" value="20" max="100" />
      </div>
    </div>
    <h3 class="title">Escoge la respuesta correcta</h3>
    <div class="columns">
      <div class="column">
        <p>
          Que palabra en kichwa es <strong>{{ item1 }}:</strong>
        </p>
      </div>
    </div>  
    <section>
      <div class="field">
        <b-radio
          v-model="radio"
          :native-value='true'
        >
            {{ item2 }}
        </b-radio>
      </div>
      <div class="field">
        <b-radio
          v-model="radio"
          :native-value='false'
        >
            {{ item3 }}
        </b-radio>
      </div>
      <div class="field">
        <b-radio
          v-model="radio"
          :native-value='null'
        >
            {{ item4 }}
        </b-radio>
      </div>
    </section>
  <div class="buttons">
    <button
      v-if="!radio"
      class="button is-success"
      @click="comprobar"
    >
      Comprobar
    </button>
    <nuxt-link
      v-if="radio"
      class="button"
      to="/prueba2"
    >
      Siguiente
    </nuxt-link>
  </div>
  <b-collapse :open="false" aria-id="ver">
    <button
      v-if="!radio"
      class="button is-danger"
      slot="trigger"
      aria-controls="ver"
    >
      Ver Respuesta
    </button>
    <div class="notification">
      <div class="content">
        <p>Pacha: Tierra</p>
      </div>
    </div>
  </b-collapse><br>
  <b-message title="Instrucción" type="is-info">
    Este es un juego de opción multiple donde deberas cojer la respuesta correcta.
  </b-message>
  </div>
</template>
<script>
import { NotificationProgrammatic as Notification } from 'buefy/dist/components/notification'
import { Toast } from 'buefy/dist/components/toast'

export default {
 data (){   
   return {
      radio: '',
      item1:'pacha',
      item2:'Tierra',
      item3:'Papá',
      item4:'Niño',
    }
 },
 methods:{
   comprobar(){
    let hola= this.radio==true ? this.item2 : this.item1
    let resp= this.item1.includes(hola);
    let toast= resp== false ? this.$toast.open({
      message:'felicitaciones has acertado!',
      type: 'is-success'
      }) : this.$toast.open({
        message:'has fallado intenta de nuevo',
        type: 'is-danger',
        position: 'is-bottom'
      })
    return null
   },
 }
}
</script>
