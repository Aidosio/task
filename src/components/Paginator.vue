<template>
  <ul class="pagination">
    <li>
      <a class="arr-first" href="#">
        <img src="@/assets/img/two-arr.svg" alt="">
      </a>
    </li>
    <li>
      <a class="arr-first" href="#">
        <img src="@/assets/img/one-arr.svg" alt="">
      </a>
    </li>
    <li><a class="active" href="#">1</a></li>
    <li><a href="#">2</a></li>
    <li><a href="#">3</a></li>
    <li><a href="#">4</a></li>
    <li><a href="#">5</a></li>
    <li><a href="#">6</a></li>
    <li><a href="#">7</a></li>
    <li>
      <a class="arr-last" href="#">
        <img src="@/assets/img/one-arr-r.svg" alt="">
      </a>
    </li>
    <li>
      <a class="arr-last" href="#">
        <img src="@/assets/img/two-arr-r.svg" alt="">
      </a>
    </li>
  </ul>
</template>

<script>
export default {
  name: "v-padinator"
}
</script>

<style scoped>
  ul.pagination {
    display: inline-block;
    padding: 0;
    margin: 0;
  }

  ul.pagination li {
    display: inline;
  }


  .arr-first {
    border-radius: 4px 0px 0px 4px;
  }

  .arr-last {
    border-radius: 0px 4px 4px 0px;
  }


  ul.pagination li a {
    color: black;
    float: left;
    padding: 12px;
    text-decoration: none;
    transition: background-color .3s;
    border: 1px solid #EBEDEF;
    border-radius: 0px;
  }

  ul.pagination li a.active {
    background-color: #B1B7C1;
    color: white;
  }

  ul.pagination li a:hover:not(.active) {background-color: #ddd;}
</style>