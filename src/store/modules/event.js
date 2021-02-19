// axios API calls
import EventService from '../../services/EventService';

export const namespaced = true;

export const state = {
	events: [],
	eventsTotalCount: null,
	event: {},
};

export const getters = {
	catLength: (state) => {
		return state.categories.length;
	},

	getEventById: (state) => (id) => {
		return state.events.find((event) => event.id === id);
	},
};

export const mutations = {
	ADD_EVENT(state, event) {
		state.events.push(event);
	},
	GET_EVENTS(state, events) {
		state.events = events;
	},
	GET_TOTAL_EVENTS_COUNT(state, count) {
		state.eventsTotalCount = count;
	},
	SET_EVENT(state, event) {
		state.event = event;
	},
};

export const actions = {
	createEvent({ commit, dispatch }, event) {
		EventService.postEvent(event).then(() => {
			commit('ADD_EVENT', event);
			const notification = {
				type: 'success',
				message: 'Your event has been created!',
			};
			dispatch('notification/add', notification, { root: true }).catch(
				(err) => {
					const notification = {
						type: 'error',
						message: 'There was a problem creating your event: ' + err.message,
					};
					dispatch('notification/add', notification, { root: true });
					throw error;
				}
			);
		});
	},
	fetchEvents({ commit, dispatch }, { perPage, page }) {
		EventService.getEvents(perPage, page)
			.then((res) => {
				commit('GET_TOTAL_EVENTS_COUNT', res.headers['x-total-count']);
				commit('GET_EVENTS', res.data);
			})
			.catch((err) => {
				const notification = {
					type: 'error',
					message: 'There was a problem fetching events: ' + err.message,
				};
				dispatch('notification/add', notification, { root: true });
			});
	},
	fetchEvent({ commit, getters, dispatch }, id) {
		let event = getters.getEventById(id);
		if (event) {
			commit('SET_EVENT', event);
		} else {
			EventService.getEvent(id)
				.then((res) => {
					commit('SET_EVENT', res.data);
				})
				.catch((err) => {
					const notification = {
						type: 'error',
						message: 'There was a problem fetching an event: ' + err.message,
					};
					dispatch('notification/add', notification, { root: true });
				});
		}
	},
};
