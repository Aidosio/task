<template>
  <header>
    <Container>
      <main>
        <section class="logo">
          <img src="@/assets/img/logo.svg" alt="">
        </section>
        <nav>
          <ul v-for="item in menu" :key="item">
            <li>
              <a :href="item.href">{{item.name}}</a>
            </li>
          </ul>
        </nav>
        <section class="user">
          <div class="user-avatar">
            <img src="@/assets/img/user.png" alt="">
            <img src="@/assets/img/arr-d.svg" alt="">
          </div>
        </section>
      </main>
    </Container>
  </header>
</template>

<script>
import Container from "@/components/Container";
export default {
  name: "v-menu",
  components: {
    Container
  },
  data(){
    return {
      menu: [{name:'Заявки', href:'#'},
        {name:'Уведомления', href:'#'},
        {name:'Аналитика', href:'#'},
        {name:'Жители', href:'#'},
        {name:'Сотрудники', href:'#'},
        {name:'Дома', href:'#'},
        {name:'УК', href:'#'}]
    }
  }
}
</script>

<style lang="scss" scoped>
header {
  width: 100%;
  background: #fff;

  main{
    display: flex;
    align-items: center;
    height: 56px;
    justify-content: space-between;

    .logo {
      display: flex;
      flex-grow: 0.5;
      img {
        height: 100%;
      }
    }
    nav {
      display: flex;
      flex-grow: 2;
      align-items: center;

      ul {
        display: flex;
        align-items: center;
        margin-right: 10px;
        height: 56px;
        overflow: hidden;
        cursor: pointer;

        li {
          width: 100%;
          position: relative;
        }

        &:first-child, &:hover{
          li::before {
            content: '';
            position: absolute;
            width: 100%;
            height: 4px;
            top: 160%;
            background: #2EB85C;
          }

        }

        &:last-child {
          margin-right: 0px;
        }

        a {
          margin: 0px 24px;
          color: #363636;
          font-weight: 400;
          font-size: 16px;
          line-height: 21px;
          text-align: center;
          text-decoration: none;
        }
      }
    }

    .user {

      &-avatar {
        display: flex;
        align-items: center;

        img {
          cursor: pointer;
          object-fit: contain;
        }

        img:first-child {
          margin-right: 32px;
        }
      }
    }
  }
}
</style>