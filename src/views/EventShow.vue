<template>
  <div class="event">
    <h2>Event #{{ eventId }}: {{ event.title }}</h2>
    <h4>Organized by {{ event.organizer }}</h4>
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
import EventService from "@/services/EventService";

export default {
  props: ["eventId"],
  data() {
    return {
      event: {},
    };
  },
  beforeMount() {
    EventService.getEvent(this.eventId)
      .then((res) => {
        this.event = res.data;
      })
      .catch((err) => console.log(err));
  },
};
</script>

<style scoped>
.event {
  background-color: #fff;
  padding: 21px;
  margin: 21px auto;
}
</style>