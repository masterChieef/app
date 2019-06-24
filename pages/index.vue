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
        <b-field label="Nombre">
          <b-input
            placeholder="Ingrese Nombre Usuario"
          />
        </b-field>
        <b-field label="Contraseña">
          <b-input
            type="password"
            placeholder="Contraseña"
          />
        </b-field>

        <div class="columns">
          <div class="column">
            <b-field>
              <p class="control">
                <button class="button is-success">
                  Ingresar
                </button>
              </p>
            </b-field>
          </div>
          <div class="column">
            <b-field>
              <p class="control">
                  <button class="button is-info">
                    Registrarse
                  </button>
              </p>
            </b-field>
          </div>
        </div>
      </card>

    </div>
  </section>
</template>

<script>
import Card from '~/components/Card'

export default {
  name: 'HomePage',

  components: {
    Card
  }
}
</script>
