<template>
  <div>
    <form>
      <div style="width: auto">
        <header class="modal-card-head">
          <p class="modal-card-title">Registro</p>
        </header>
        <section class="modal-card-body">
          <b-field label="Ingrese Usuario">
            <b-input
              type="text"
              :value="text"
              placeholder="Ingresa Usuario"
              required
            />
           </b-field>
          <b-field label="Ingrese el Email">
            <b-input
              type="email"
              :value="email"
              placeholder="Tu email"
              required
            />
           </b-field>
          <b-field label="Ingresa Password">
            <b-input
              type="password"
              :value="password"
              password-reveal
              placeholder="Your password"
              required
            >
            </b-input>
          </b-field>
        </section>
        <footer class="modal-card-foot">
          <nuxt-link to="/">
            <button class="button" type="button">Cancelar</button>
          </nuxt-link>
          <button class="button is-primary">Registrar</button>
        </footer>
      </div>
    </form>
  </div>
</template>
<script>
export default {
  //window.location.pathname;
}
</script>

