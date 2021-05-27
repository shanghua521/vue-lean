<template>
  <div>
    <ul>
      <li>
<!--        <router-link to="/">dashboard</router-link>-->
        <NavLink to="/">dashboard</NavLink>
      </li>
      <li>
        <!--        <router-link to="/about">about</router-link>-->
        <NavLink to="/about">about</NavLink>
      </li>
      <li>
        <!--        <router-link to="/todos">todos</router-link>-->
        <NavLink to="/todos">todos</NavLink>
      </li>
    </ul>
  </div>
</template>

<script>
import NavLink from "./NavLink.vue";

export default {
  components: {NavLink}
};
</script>