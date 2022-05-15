<template>
  <div>
    <Menu />
    <Container>
      <Filter />
      <TableContent />
    </Container>
  </div>
</template>

<script>
import Menu from "@/components/Menu";
import Container from "@/components/Container";
import Filter from "@/components/Filter";
import TableContent from "@/components/Table-content";
export default {
  name: 'App',
  components: {
    Menu,
    Container,
    Filter,
    TableContent
  }
}
</script>

<style>
body {
  background: #F5F5F5;
}
</style>
