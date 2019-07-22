<template>
  <div class="section">
    <div class="columns">
      <div class="column is-four-fifths is-offset-1">
        <progress class="progress is-warning" value="40" max="100" />
      </div>
    </div>
    <h3 class="title">Escoge la respuesta correcta</h3>
    <div class="columns">
      <div class="column">
        <p>
          Que palabra en kichwa es <strong>{{ item2 }}:</strong>
        </p>
      </div>
    </div>  
    <div class="field">
      <b-radio
        v-model="radio"
        :native-value='false'
      >
        {{ item1 }}
      </b-radio>
    </div>
    <div class="field">
      <b-radio
        v-model="radio"
        :native-value='true'
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
  <div class="buttons">
    <button
      class="button is-success"
      @click="comprobar"
    >
      Comprobar
    </button>
    <nuxt-link
      class="button"
      to="/prueba3"
    >
      Siguiente
    </nuxt-link>
  </div>
  </div>
</template>
<script>
import { NotificationProgrammatic as Notification } from 'buefy/dist/components/notification'
import { Toast } from 'buefy/dist/components/toast'

export default {
 data (){   
   return {
      radio:'',
      item1:'Abuelo',
      item2:'Tayta',
      item3:'Papá',
      item4:'Agua',
    }
 },
 methods:{
   comprobar(){
    let hola= this.radio==true? this.item2 : this.item1
    let resp= this.item1.includes(hola);
    let toast= resp== false? this.$toast.open({
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
