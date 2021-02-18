import Vue from 'vue';
import Vuex from 'vuex';
import EventService from '../services/EventService';

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		user: { id: 'a1', name: 'Vi' },
		categories: ['sustainability', 'education', 'food', 'party'],
		todos: [
			{ id: 1, text: 'Some text 1', done: true },
			{ id: 2, text: 'Some text 2', done: false },
			{ id: 3, text: 'Some text 3', done: true },
			{ id: 4, text: 'Some text 4', done: true },
		],
		events: [],
		eventsTotalCount: null,
	},
	getters: {
		catLength: (state) => {
			return state.categories.length;
		},
		doneTodos: (state) => {
			return state.todos.filter((todo) => todo.done);
		},
		activeTodosCount: (state, getters) => {
			return state.todos.length - getters.doneTodos.length;
		},
		getEventById: (state) => (id) => {
			return state.events.find((event) => event.id === id);
		},
	},
	mutations: {
		ADD_EVENT(state, event) {
			state.events.push(event);
		},
		GET_EVENTS(state, events) {
			state.events = events;
		},
		GET_TOTAL_EVENTS_COUNT(state, count) {
			state.eventsTotalCount = count;
		},
	},
	actions: {
		createEvent({ commit }, event) {
			EventService.postEvent(event).then(() => {
				commit('ADD_EVENT', event);
			});
		},
		fetchEvents({ commit }, { perPage, page }) {
			EventService.getEvents(perPage, page)
				.then((res) => {
					commit('GET_TOTAL_EVENTS_COUNT', res.headers['x-total-count']);
					commit('GET_EVENTS', res.data);
				})
				.catch((err) => console.log(err));
		},
	},
	modules: {},
});
