<template>
  <div class="random">
    
    <h2>Feeling brave? Let the us choose a drink for you!</h2>
    <img src="../assets/abfab.jpg">

    <form v-on:submit.prevent="findDrinks">
      <p>
        <button type="submit">Spin the bottle!</button>
      </p>
    </form>
    <div class="results" v-if="results">
      <p>
        <strong>{{results.strDrink}}</strong>
      </p>
      
        <img :src="results.strDrinkThumb" :alt="results.strDrink" width="300" height="300">
        
      
    </div>

   <router-link to="/">Let's look up your drink by name!</router-link>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "RandomDrinks",
  data() {
    return {
      results: null,
      errors: [],
      random: ""
    };
  },
  methods: {
     getIngredients: function(results) {
      console.log(results);
     
      this.$router.push({ name: 'Ingredients', params: { results } })
    },
    findDrinks: function() {
      axios
        .get("https://www.thecocktaildb.com/api/json/v1/1/random.php", {})
        .then(response => {
          this.results = response.data.drinks[0];
        })
        .catch(error => {
          this.errors.push(error);
        });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.random {
  font-size: 1.4rem;
}

input[type="text"] {
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom: 1px solid #333;
  width: 300px;
  font-size: 1.4rem;
  color: #2c3e50;
  font-weight: 300;
  background: rgba(0, 0, 0, 0.02);
  padding: 0.5rem;
}
button {
  background: #333;
  padding: 0.5rem;
  font-weight: 300;
  color: #fff;
  border: none;
  cursor: pointer;
  font-size: 1.4rem;
}
h1,
h2 {
  font-weight: normal;
}

ul.results {
  list-style-type: none;
  padding: 0;
}

.results li {
  display: inline-block;
  margin: 10px;
  border: solid 1px #333;
  padding: 0.5rem;
  width: 200px;
  min-height: 100px;
  color: #fff;
  background: rgba(0, 0, 0, 0.7);
}
ul.errors {
  list-style-type: none;
}
.errors li {
  border: 1px solid red;
  color: red;
  padding: 0.5rem;
  margin: 10px 0;
}

a {
  color: #42b983;
}
</style>
