<template>
  <div>
    <br>
    <section>
      <b-field>
        Que palabra en kichwa es <strong>{{ item2 }}</strong>
      </b-field>
      <b-checkbox-button
        @click="ocultar1" 
        v-model="checkbox"
      >
        {{ item1 }}
      </b-checkbox-button>
      
      <b-checkbox-button
        @click="ocultar2"
        v-model="checkbox1"
      >
        {{ item3 }}
      </b-checkbox-button>
      <b-checkbox-button
        @click="ocultar3"
        v-model="checkbox2"
      >
        {{ item4 }}
      </b-checkbox-button>
    </section>
    <br>
    <p class="control">
      <button class="button is-primary " @click="comprobar">
        Comprobar
      </button>
    </p>
  </div>
</template>
<script>
import { NotificationProgrammatic as Notification } from 'buefy/dist/components/notification'
export default {
 data (){
   return {
      met: "",
      checkbox: true,
      checkbox1: true,
      checkbox2: true,
      checkbox3: true,
      item1:'mama',
      item2:'pacha',
      item3:'papa',
      item4:'niño'
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
    console.log(resp)
    let alert= resp== true? Notification.open({
      message:'felicitaciones has acertado!',
      type: 'is-success'
      }) : Notification.open({
        message:'has fallado intenta de nuevo',type: 'is-danger',
        hasIcon: true
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
