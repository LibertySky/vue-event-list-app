import Vue from 'vue';
import VueRouter from 'vue-router';
import EventCreate from '../views/EventCreate.vue';
import EventList from '../views/EventList.vue';
import EventShow from '../views/EventShow.vue';

Vue.use(VueRouter);

const routes = [
	{
		path: '/',
		name: 'event-list',
		component: EventList,
	},
	{
		//dynamic route:
		path: '/event/:eventId',
		name: 'event-show',
		component: EventShow,
		props: true,
	},
	{
		path: '/event/create',
		name: 'event-create',
		component: EventCreate,
	},
];

const router = new VueRouter({
	routes,
	mode: 'history', //this is disabling # in url
});

export default router;
