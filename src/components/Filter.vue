<template>
  <div class="filter">
    <Button @click="$store.commit('openModal')" style="margin-right: 45px" image>
      <template #image>
        <img class="image" src="@/assets/img/plus.svg" alt="">
      </template>
      СОЗДАТЬ
    </Button>
    <div class="dates">
      <p class="dates-text">ОТ</p>
      <input class="dates-input" type="date">
      <p class="dates-text">ДО</p>
      <input class="dates-input" type="date">
      <Button onlyImg theme="search">
        <template #image>
          <img class="image" src="@/assets/img/search.svg" alt="">
        </template>
      </Button>
    </div>
    <Button style="margin: 0px 45px" theme="light">
      Сбросить фильтр
    </Button>
    <Button image>
      <template #image>
        <img class="image" src="@/assets/img/excel.svg" alt="">
      </template>
      Экспорт
    </Button>
  </div>
</template>

<script>
import Button from "@/components/Button";
export default {
  name: "v-filter",
  components: {
    Button
  }
}
</script>

<style lang="scss" scoped>
  .filter {
    margin: 20px 0px;
    display: flex;

    .dates {
      display: flex;
      align-items: center;

      &-text{
        font-weight: 300;
        font-size: 14px;
        line-height: 19px;
        color: #4F5D73;
      }

      &-input {
        margin: 0px 16px;
        background: #FEFEFE;
        opacity: 0.8;
        padding: 6px 12px;
        border: 1px solid #D8DBE0;
        border-radius: 4px;
        font-size: 14px;
        line-height: 19px;
        text-transform: uppercase;
        color: #4F5D73;
      }
    }
  }
</style>