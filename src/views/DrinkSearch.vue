<template>
  <div class="drinksearch">
    <img src="../assets/happyhourMASH.jpg" style="border:#000000 3px outset">
    <form v-on:submit.prevent="findDrinks">
      <p>Type in the name of a cocktail and let us tell you what's in it!</p>
      <p>
        <input type="text" v-model="drink">
        <button type="submit">Slainte!</button>
      </p>
    </form>
    <h4>
      Or if you don't know what drink to look for, let fate decide your next cocktail
      <p>
        <router-link to="/random">
          <button type="submit">Random</button>
        </router-link>
      </p>
    </h4>
    <ul class="results" v-if="results && results.drinks.length > 0">
      <li class="item" v-for="(item,index) of results.drinks" :key="index">
        <strong>{{item.strDrink}}</strong>
        <p>
          <img :src="item.strDrinkThumb" :alt="item.strDrink" width="200" height="200">
        </p>
        <p>
          <button v-on:click="getIngredients(item)">What's in it?</button>
        </p>
      </li>
    </ul>
    <ul class="no-results" v-else-if="results && results.drinks.length === 0">
      <h2>*whomp whomp*</h2>
      <p>Hmm... didn't work. Let's try that again.</p>
    </ul>

    <ul class="errors" v-if="errors && errors.length > 0">
      <li v-for="(error,index) of error" :key="index">{{error.message}}</li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";
import { error } from "util";

export default {
  name: "DrinkSearch",
  data() {
    return {
      results: null,
      errors: [],
      drink: ""
    };
  },
  methods: {
    getIngredients: function(item) {
      console.log(item);
      this.$router.push({ name: "Ingredients", params: { item } });
    },

    findDrinks: function() {
      axios
        .get("https://www.thecocktaildb.com/api/json/v1/1/search.php", {
          params: {
            s: this.drink
          }
        })
        .then(response => {
          this.results = response.data;
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
.drinksearch {
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
  color: #ce1818;
}
</style>