# Learn Vue 2: Step By Step [Laracasts]

1. Basic Data Binding  
2. Setup Vue Devtools
3. <a target="_blank" href="https://github.com/prakhargvp/laracast_learn_vue-2/blob/master/list.html" >`Lists`</a>
4. Vue Event Listners
5. <a target="_blank" href="https://github.com/prakhargvp/laracast_learn_vue-2/blob/master/attribute_class-binding.html" >`Attribute and Class Binding`</a>
6.  <a target="_blank" href="https://github.com/prakhargvp/laracast_learn_vue-2/blob/master/computed_properties.html" >`The need for Computed Properties`</a>
7. Component 101
8.  <a target="_blank" href="https://github.com/prakhargvp/laracast_learn_vue-2/blob/master/component_within_component.html" >`Component Within Component`</a>
9.  <a target="_blank" href="https://github.com/prakhargvp/laracast_learn_vue-2/blob/master/message_component.html" >`Practical Component Exercise #1: Message`</a>
10.  <a target="_blank" href="https://github.com/prakhargvp/laracast_learn_vue-2/blob/master/modal_component.html" >`Practical Component Exercise #2: Modal`</a>
11.  <a target="_blank" href="https://github.com/prakhargvp/laracast_learn_vue-2/blob/master/tabs.html" >`Practical Component Exercise #3: Tab`</a>
12.  <a target="_blank" href="https://github.com/prakhargvp/laracast_learn_vue-2/blob/master/child_parent_communication-custom_event.html" >`Component Communication Example #1: Custom Events`</a>
13.  <a target="_blank" href="https://github.com/prakhargvp/laracast_learn_vue-2/blob/master/child_parent_communication-event_dispatcher.html" >`Component Communication Example #2: Event Dispatcher`</a>
14. <a target="_blank" href="https://github.com/prakhargvp/laracast_learn_vue-2/blob/master/named_slot.html">Named Slots in a Nutshell</a>


### Dig Deeper in Vuejs
**Directive :**  
	Attribute Name Prefixed with v- to indicate that they are special attribute provided by Vue. They are reactive that means keep the element attribute up-to-date with the property on the vue instance.

Example:  
[`v-bind`]()  
[`v-if`]()
[`v-else`]()  
[`v-show`]()
[`v-for`]()  
[`v-on`]() To Attach Event Listner that invoke methods  
[`v-model`]() To way binding between form input and vue app state  
[`v-once`]() One time interpolations that don't update on data change  
[`v-html`](https://vuejs.org/v2/api/#v-html) Double quotes interprests data as plain text. In order to interpret as html us v-html directive     


**Composition Of Components :**
- All Vue Components are also vue instance.

**Data and Methods Vue Instance :**
- The properties in data are only reactive if they existed at the time of instance creation.
- Vue instance provide rich number of predefined propertied, methods which prefixed with $ to differentiate them from user defined properties.  
	[API References](https://vuejs.org/v2/api/#Instance-Properties)

**Lifecycle Methods:**  
- beforeCreated
- created
- beforeMount
- mounted
- beforeUpdate
- updated
- beforeDestroy
- destroyed

	[Lifecycle Diagram](https://vuejs.org/v2/guide/instance.html#Lifecycle-Diagram)

**Template Syntax:**  
- Interpolations
- Directive
	- Arguments
	- Dynamic Arguments
	- Modifiers
- Shorthands

**Computed Properties and Watchers**
- Computed Properties
	- Computed Caching vs Methods
	- Computed vs Watching Property
	- Computed Setter

**Classes and Style Bindings**  
- Binding HTML Classes
	- Object Syntax
	- Array Syntax
	- With Components
- Binding Inline Styles
	- Object Syntax
	- Array Syntax
	- Auto Prefixing
	- Multiple Values

**Conditional Rendering**  
- `v-if`
	- Conditional Group with `v-if` on <template>
	- `v-else`
	- `v-else-if`
	- Controlling Reusable Elements with key
- `v-show`
- `v-if` vs `v-show`
- `v-if` with `v-for` 
  
  

**Resources**  
[Vue Essentail Cheat Sheet](https://www.vuemastery.com/pdf/Vue-Essentials-Cheat-Sheet.pdf)  
[Vue 2 Docs](https://vuejs.org/v2/guide/)