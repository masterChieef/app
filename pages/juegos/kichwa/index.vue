<template>
  <section class="section">

    <div class="buttons">
      <b-button
        tag="router-link"
        to="/juegos/kichwa/juego1"
        class="button is-dark"
        size="is-large"
        icon-right="numeric-1-box"
        @keypress="pulsar(event)"
      >
        Nivel
      </b-button>

      <b-button
        tag="router-link"
        to="/juegos/kichwa/juego2"
        class="button is-dark"
        size="is-large"
        icon-right="numeric-2-box"
      >
        Nivel
      </b-button>

      <b-button
        tag="router-link"
        to="/juegos/kichwa/juego3"
        class="button is-dark"
        size="is-large"
        icon-right="numeric-3-box"
      >
        Nivel
      </b-button>

      <b-button
        tag="router-link"
        to="/juegos/kichwa/juego4"
        class="button is-dark"
        size="is-large"
        icon-right="numeric-4-box"
      >
        Nivel
      </b-button>

      <b-button
        tag="router-link"
        to="/juegos/kichwa/juego5"
        class="button is-dark"
        size="is-large"
        icon-right="numeric-5-box"
      >
        Nivel
      </b-button>

    </div>
  </section>
</template>

<script>
export default {
  methods:{
    pulsar(e){
      if(e.altKey && e.charCode == 99) {
					alert("pulsada alt+C");
				}
    }
  }
}
</script>
