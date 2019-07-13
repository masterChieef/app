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
      <b-field label="Password">
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
