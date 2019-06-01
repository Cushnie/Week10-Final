<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      Enter in a drink name and see what's in it. Or if you're undecided, let us choose one at random for you.
    </p>
    <h2>Gonna put something here ... </h2>
    <ul>
      <li><a href="#" target="_blank" rel="noopener">something 1</a></li>
      <li><a href="#" target="_blank" rel="noopener">something 2</a></li>
    </ul>

    
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
