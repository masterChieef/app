<template>
  <div>
    <nav
      class="navbar header has-shadow is-primary"
      role="navigation"
      aria-label="main navigation"
    >
      <div class="navbar-brand">
        <a
          class="navbar-item"
          href="/"
        >
          <img
            src="~assets/Ecualingo.png"
            alt="Ecualingo"
            height="28"
          >
        </a>
      </div>
    </nav>

    <section class="main-content columns">

      <aside class="column is-2 section">
        <p class="menu-label is-hidden-touch">General</p>
        <ul class="menu-list">
          <li
            v-for="(item, key) of items"
            :key="key"
          >
            <nuxt-link
              :to="item.to"
              exact-active-class="is-active"
            >
              <b-icon :icon="item.icon" /> {{ item.title }}
            </nuxt-link>
          </li>
        </ul>
        <p class="menu-label is-hidden-touch">Juegos</p>
        <ul class="menu-list">
          <li
            v-for="(item, key) of juegos"
            :key="key"
          >
            <nuxt-link
              :to="item.to"
              exact-active-class="is-active"
            >
              <b-icon :icon="item.icon" /> {{ item.title }}
            </nuxt-link>
          </li>
        </ul>
      </aside>
      <div class="container column is-10">
        <nuxt />
      </div>

    </section>
    
  </div>
</template>

<script>
import axios from 'axios'
import  global  from "../pages/Glov";
export default {
  data() {
    return {
      items: [
        {
          title: 'Home',
          icon: 'home',
          to: { name: 'index' }
        },
      ],
      juegos: [
        {
          title: 'Aprender',
          icon: 'google-translate',
          to: { name: 'juegos' }
        },
      ]
    }
  },
}
  
</script>
