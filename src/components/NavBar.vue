<template>
  <div id="nav" class="nav">
    <router-link to="/" class="logo"> <h3>Event List</h3></router-link>
    <nav class="menu">
      <router-link :to="{ name: 'event-list' }">All Events</router-link> |
      <router-link :to="{ name: 'event-create' }">Add Event</router-link>
    </nav>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
#nav {
  padding: 10px;
  display: flex;
  background-color: #fff;
  border-radius: 0 0 15px 15px;
  padding: 5px;
  box-shadow: 0 2px 4px rgba(202, 201, 201, 0.5);
}

#nav a {
  font-weight: bold;

  text-decoration: none;
}

#nav a.router-link-exact-active {
  /* color: #42b983; */
}
.logo {
  font-size: 21px;
  font-weight: 700;
  text-transform: uppercase;
  color: rgb(12, 92, 58);
  flex-grow: 1;
  align-self: flex-start;
  justify-self: flex-start;
}

.menu {
  color: #c20d25;
  /* color: #2c3e50; */

  flex-grow: 1;
  align-self: center;
  /* text-align: center; */
}
</style>

