<template>
  <div>
    <h1>Create New Event</h1>
    <form>
      <label>Select a category</label>
      <select v-model="event.category">
        <option v-for="cat in categories" :key="cat">{{ cat }}</option>
      </select>

      <h3>Name & describe your event</h3>
      <div class="field">
        <label>Titile</label>
        <input
          v-model="event.title"
          type="text"
          placeholder="Add en event title"
        />
      </div>
      <div class="field">
        <label>Description</label>
        <textarea
          v-model="event.description"
          type="text"
          placeholder="Add en event description"
          rows="4"
          cols="50"
        ></textarea>
      </div>

      <h3>When is your event?</h3>
      <div class="field">
        <label>Date</label>
        <Datepicker v-model="event.date" placeholder="Select a date" />
      </div>
      <div class="field">
        <label>Select a time</label>
        <select v-model="event.time">
          <option value="none" selected disabled>Select time</option>
          <option v-for="time in times" :key="time">
            {{ time }}
          </option>
        </select>
      </div>
      <input type="submit" value="Submit" />
    </form>
  </div>
</template>

<script>
import Datepicker from "vuejs-datepicker";
export default {
  components: {
    Datepicker,
  },
  data() {
    const times = [];
    for (let i = 1; i <= 24; i++) {
      times.push(i + ":00");
    }
    return {
      times,
      categories: this.$store.state.categories,
      event: this.createFreshEventObject(),
    };
  },
  methods: {
    createFreshEventObject() {
      const user = this.$store.state.user;
      const id = Math.floor(Math.random() * 10000000);

      return {
        id: id,
        user: user,
        category: "",
        organaizer: user,
        title: "",
        description: "",
        location: "",
        date: "",
        time: "",
        attendees: [],
      };
    },
  },
};
</script>

<style scoped>
label {
  display: block;
}
.field {
  margin-bottom: 21px;
}
</style>