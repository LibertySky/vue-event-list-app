import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store/index';
import upperFirst from 'lodash/upperFirst';
import camelCase from 'lodash/camelCase';

// Automatic Global Registration of Base Components
const requireComponent = require.context(
	// The relative path of the components folder
	'./components',
	// Whether or not to look in subfolders
	false,
	/Base[A-Z]\w+\.(vue|js)$/
);

requireComponent.keys().forEach((fileName) => {
	// Get component config
	const componentConfig = requireComponent(fileName);

	// Get PascalCase name of component
	const componentName = upperFirst(
		camelCase(
			// Gets the file name regardless of folder depth
			fileName
				.split('/')
				.pop()
				.replace(/\.\w+$/, '')
		)
	);

	// Register component globally
	Vue.component(componentName, componentConfig.default || componentConfig);
});

// check&confirm components registration
console.log(requireComponent.keys());

Vue.config.productionTip = false;

new Vue({
	router,
	store,
	render: (h) => h(App),
}).$mount('#app');
