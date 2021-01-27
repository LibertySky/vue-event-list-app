<template>
  <div>
    <EventCard v-for="event in events" :key="event.id" :event="event" />
    <BaseIcon />
  </div>
</template>

<script>
import EventCard from "@/components/EventCard.vue";
import BaseIcon from "../components/BaseIcon.vue";
import EventService from "@/services/EventService";

export default {
  components: {
    EventCard,
    BaseIcon,
  },
  data() {
    return {
      events: [],
    };
  },
  created() {
    EventService.getEvents()
      .then((res) => {
        this.events = res.data;
      })
      .catch((err) => console.log(err));
  },
};
</script>


<style scoped>
</style>