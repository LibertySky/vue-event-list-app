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
		events: [
			{ id: 'e1', title: 'Beach cleanup', orginizer: 'Vi' },
			{ id: 'e2', title: 'BBQ Party', orginizer: 'Vit' },
			{ id: 'e3', title: 'Vue Bootcamp', orginizer: 'LibertySky' },
			{ id: 'e4', title: 'Chess tournament', orginizer: 'Rafa' },
		],
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
	},
	actions: {
		createEvent({ commit }, event) {
			EventService.postEvent(event);
			commit('ADD_EVENT', event);
		},
	},
	modules: {},
});
