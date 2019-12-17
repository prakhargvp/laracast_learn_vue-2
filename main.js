Vue.component('task-list', {
	template: `
		<div>
			<task v-for="task in tasks">{{ task.description }}</task>
		</div>`,
	data() {
		return {
			tasks: [
				{ description: 'Go to the gym', completed: true },
				{ description: 'Go to ofice', completed: true },
				{ description: 'Finish story points ', completed: true },
				{ description: 'Go for table tennis', completed: false },
				{ description: 'Go to the dinner', completed: false },
				{ description: 'Read a Book', completed: false },
			]
		}
	}
});

Vue.component('task', {
	template: '<li><slot></slot></li>'
});


new Vue({
	el: '#root'
})