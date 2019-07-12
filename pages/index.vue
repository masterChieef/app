<template>
  <section class="section">
    <b-notification aria-close-label="Close notification">
        Ecualingo un juego para aprender lenguas nativas del Ecuador
    </b-notification>

    <div class="columns is-mobile">

      <card
        title="Prueba Gratis"
        icon="gamepad-variant"
      >
        <b-field>
          <p class="control">
            <button class="button is-success">
              Intro
            </button>
          </p>
        </b-field>
      </card>

      <card
        title="Responsive"
        icon="cellphone-link"
      >
        <b class="has-text-grey">Every</b> component is responsive
      </card>

      <card
        title="Registro"
        icon="account-group"
      >
        <b-button
          type="is-info"
          class="button is-primary is-medium"
        >
          Ingresar
        </b-button>
        <nuxt-link to="/registar">  
          <b-button
            type="is-success"
            class="button is-primary is-medium"
          >
            Registrarse
          </b-button>
        </nuxt-link>  
      </card>
    </div>
  </section>
</template>

<script>
import Card from '~/components/Card'
export default {
  name: 'HomePage',

  components: {
    Card,
  },   
}
</script>
