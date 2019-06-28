<template>
  <div class="section">
    <b-message title="Instrucción" type="is-info">
        Este es un juego de opción multiple donde deberas cojer la respuesta correcta.
    </b-message>
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
    <button class="button is-primary" @click="comprobar">
      Comprobar
    </button>
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
      item1:'Tierra',
      item2:'pacha',
      item3:'Papá',
      item4:'Niño',
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
