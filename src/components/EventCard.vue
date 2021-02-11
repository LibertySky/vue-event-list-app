<template>
  <!-- link to the dynamic route -->
  <router-link :to="{ name: 'event-show', params: { eventId: event.id } }">
    <div>
      <span>@{{ event.time }} on {{ event.date }}</span>
      <h3>{{ event.title }}</h3>
      <base-icon name="user">
        {{ event.attendees.length }} attending
      </base-icon>
    </div>
  </router-link>
</template>

<script>
export default {
  props: {
    event: Object,
  },
};
</script>

<style lang="scss" scoped>
div {
  border: 0;
  border-radius: 12px;
  padding: 21px;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(202, 201, 201, 0.5);
  margin: 40px 0;

  a {
    text-decoration: 0;
  }

  h3 {
    font-size: 1.7rem;
    color: rgb(20, 20, 20);
  }

  span {
    font-size: 14px;
    color: rgb(122, 122, 122);
  }
}
</style>