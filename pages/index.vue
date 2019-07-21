<template>
  <section class="section">

    <div class="columns is-mobile">

      <card
        title="Información"
        icon="information"
      >
        Ecualingo un juego para aprender lenguas nativas del Ecuador
      </card>

      <card
        title="Prueba Gratis"
        icon="gamepad-variant"
      >
      <div>
        <nuxt-link
          class="button is-primary is-fullwidth"
          to="/prueba1"
        >
          Jugar gratis
        </nuxt-link>
      </div>
      </card>

      <card
        title="¡Crea un perfil para guardar tu progreso!"
        icon="account-group"
      > 
        <b-button
          type="is-info"
          class="button is-primary"
          @click="loginModal()"
        >
          Ingresar
        </b-button>
        <b-button
          type="is-success"
          class="button is-primary"
          @click="registerModal()"
        >
          Registrarse
        </b-button>
      </card>
    </div>
  </section>
</template>

<script>
import LoginModal from './login'
import RegisterModal from './register'
import Card from '~/components/Card'
export default {
  name: 'HomePage',

  components: {
    Card
  },
  methods: {
    loginModal() {
      this.$modal.open({
        parent: this,
        component: LoginModal,
        hasModalCard: true,
        customClass: 'custom-class custom-class-2'
      })
    },
    registerModal() {
      this.$modal.open({
        parent: this,
        component: RegisterModal,
        hasModalCard: true,
        customClass: 'custom-class custom-class-2'
      })
    }
  }
}
</script>
