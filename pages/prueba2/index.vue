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
        v-model="checkbox"
      >
        {{ item1 }}
      </b-radio>
    </div>
    <div class="field">
      <b-radio
        v-model="checkbox1"
      >
        {{ item3 }}
      </b-radio>
    </div>
    <div class="field">
      <b-radio
        v-model="checkbox2"
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
      met: "",
      checkbox: true,
      checkbox1: true,
      checkbox2: true,
      checkbox3: true,
      item1:'Abuelo',
      item2:'Tayta',
      item3:'Papá',
      item4:'Agua',
    }
 },
 methods:{
   verda(){
     let f = this.met=="aa"
     return f
   },
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
   ocultar1(){
     return !!this.checkbox==false? true : false 
   },
   ocultar2(){
     return !!this.checkbox1==false? true : false 
   },
   ocultar3(){
     return !!this.checkbox2==false? true : false
   }
 }
}
</script>
