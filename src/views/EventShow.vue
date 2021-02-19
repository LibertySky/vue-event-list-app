<template>
  <div class="event">
    <h2>Event #{{ eventId }}: {{ event.title }}</h2>
    <h4>
      Organized by {{ event.organizer ? event.organizer.name : "Anonymous" }}
    </h4>
    <p>
      <em>Category: {{ event.category }}</em>
    </p>
    <p>{{ event.description }}</p>
    <p>
      <base-icon name="location">
        {{ event.location }}
      </base-icon>
    </p>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  props: ["eventId"],

  created() {
    this.$store.dispatch("event/fetchEvent", this.eventId);
  },
  computed: mapState({
    event: (state) => state.event.event,
  }),
};
</script>

<style scoped>
.event {
  background-color: #fff;
  padding: 21px;
  margin: 21px auto;
}
</style>