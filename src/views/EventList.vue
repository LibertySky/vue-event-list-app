<template>
  <div>
    <h3>Events for {{ user.user.name }}</h3>
    <EventCard v-for="event in event.events" :key="event.id" :event="event" />
    <template v-if="page != 1">
      <router-link
        :to="{ name: 'event-list', query: { page: page - 1 } }"
        rel="prev"
        >Prev Page</router-link
      >
    </template>
    |
    <template v-if="this.nextPage">
      <router-link
        :to="{ name: 'event-list', query: { page: page + 1 } }"
        rel="next"
        >Next Page</router-link
      >
    </template>
  </div>
</template>

<script>
import EventCard from "@/components/EventCard.vue";
import { mapState } from "vuex";

export default {
  components: {
    EventCard,
  },

  created() {
    this.$store.dispatch("fetchEvents", {
      perPage: 3,
      page: this.page,
    });
  },
  computed: {
    page() {
      return parseInt(this.$route.query.page) || 1;
    },
    nextPage() {
      return this.event.eventsTotalCount > this.page * 3;
    },
    ...mapState(["event", "user"]),
  },
};
</script>


<style scoped>
</style>