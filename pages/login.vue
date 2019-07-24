<template>
   <form class="modal-card" style="width: auto">
    <header class="modal-card-head">
        <h3 class="title">Login</h3>
    </header>

    <section class="modal-card-body">
      <b-field label="Email">
        <b-input
          type="email"
          :value="email"
          placeholder="Ingresa tu Correo"
          required
          icon="email"
        />
      </b-field>
      <b-field label="Contraseña">
        <b-input
          type="password"
          :value="password"
          password-reveal
          placeholder="Ingrese contraseña"
          required
          icon="lock-question"
        />
      </b-field>
      <b-checkbox>Recuérdame</b-checkbox>
  </section>
  <footer class="modal-card-foot">
      <button
        class="button is-primary"
        @click="login()"
      >
        Entrar
      </button>
      <button
        class="button"
        type="button"
        @click="$parent.close()"
      >
        Cerrar
      </button>
  </footer>
  </form>
</template>
<script>
import { NotificationProgrammatic as Notification } from 'buefy/dist/components/notification'
import global  from "../pages/Glov";

export default {
  data(){
    return{

    }
  },
  methods:{
    login(){
      let login= global.methods.login()
      let toast= login== true? this.$toast.open({
        message:'Bienvenido a Ecualingo',
        type: 'is-success'
        }) : this.$toast.open({
          message:'Error intenta de nuevo con tu conraseña y clave',
          type: 'is-danger',
          hasIcon: true,
          position: 'is-bottom'
        })
     return login
    }
  } 
}
</script>