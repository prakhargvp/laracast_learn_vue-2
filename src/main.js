import Vue from 'vue'
import axios from 'axios'

new Vue({
  el: '#app',
  data: {
  	skills: []
  },
  mounted() {

    axios.get('http://localhost:3000/skills')
      .then(resp => this.skills = resp.data);

  }

})
