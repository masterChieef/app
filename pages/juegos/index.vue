<template>
  <section class="section">
    <div class="columns">
      <card
        title="Aprende kichwa"
        icon="alphabetical"
      >
        <nuxt-link
          class="button is-primary is-fullwidth"
          to="/juegos/kichwa"
        >
          Jugar
        </nuxt-link>
      </card>
      <card
        title="Muy Pronto!"
        icon="omega"
      >
        Mas juegos en la nueva actualizacion.
      </card>
    </div>
  </section>
</template>

<script>
import Card from '~/components/Card'

export default{
  name:'Juegos',

  components: {
    Card
  },
}
</script>
