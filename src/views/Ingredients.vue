<template>
  <div class="ingredients">
    <img src="../assets/cocktail.jpg" height="300" width="400" style="border:#000000 3px outset">
<h2>Shopping List</h2>
    <div class="results" v-if="item">
      <strong>{{item.strDrink}}</strong>

      <p>
        <img :src="item.strDrinkThumb" :alt="item.strDrink" width="150" height="150">
      </p>
      <p>{{item.strMeasure1}} {{item.strIngredient1}}</p>
      <p>{{item.strMeasure2}} {{item.strIngredient2}}</p>
      <p>{{item.strMeasure3}} {{item.strIngredient3}}</p>
      <p>{{item.strMeasure4}} {{item.strIngredient4}}</p>
      <p>{{item.strMeasure5}} {{item.strIngredient5}}</p>
      <p>{{item.strMeasure6}} {{item.strIngredient6}}</p>
      <p>{{item.strMeasure7}} {{item.strIngredient7}}</p>
      <p>{{item.strMeasure8}} {{item.strIngredient8}}</p>
      <p>{{item.strMeasure9}} {{item.strIngredient9}}</p>
      <p>{{item.strMeasure10}} {{item.strIngredient10}}</p>
      <p>{{item.strMeasure11}} {{item.strIngredient11}}</p>
      <p>{{item.strMeasure12}} {{item.strIngredient12}}</p>
      <p>{{item.strMeasure13}} {{item.strIngredient13}}</p>
      <p>{{item.strMeasure14}} {{item.strIngredient14}}</p>
      <p>{{item.strMeasure15}} {{item.strIngredient15}}</p>
    </div>
    <p><router-link to="/">Home</router-link></p>
  </div>
</template>

<script>
import axios from "axios";
import { error } from "util";

export default {
  name: "Ingredients",
  data() {
    return {
      item: null,
      errors: [],
      drink: ""
    };
  },
  created: function() {
    this.item = this.$route.params.item;
     debugger
    console.log(this.item);
  },
  methods: {
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