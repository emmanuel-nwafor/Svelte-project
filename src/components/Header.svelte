<script>
  import Router from "svelte-spa-router";
  import routes from "../routes";
</script>

<nav>
  <a href="#/">
    Home
  </a>
  <a href="#/about">
    About
  </a>
  <a href="#/contact">
    Contact
  </a>
  <a href="#/not-found">
    Not Found
  </a>
</nav>

<Router {routes} />