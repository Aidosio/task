<template>
  <div class="body">
    <div class="content">
      <div class="content-title">
        <p class="content-title-text" v-for="item in info" :key="item">
          {{item.title}}
        </p>
      </div>
      <div class="content-filter">
        <input type="text">
        <select>
          <option>
            все
          </option>
        </select>
        <input type="text">
        <div class="input">
          <input type="text" id="space">
          <label for="space">
            <img src="@/assets/img/plus-red.svg" alt="">
          </label>
        </div>
        <input type="text">
        <input type="text">
        <input type="text">
        <input type="date">
        <input type="date">
        <select>
          <option>
            все
          </option>
        </select>
        <input type="text">
        <select>
          <option>
            все
          </option>
        </select>
        <input type="text">
      </div>
      <div class="content-info">
        <div class="content-info-items">
          <div v-for="item in content" :key="item">
            <div class="content-info-items-item" v-if="item.reading">
              <p>
                <span v-if="item.new" class="dot"></span>
                {{item.id}}
              </p>
              <p>
                {{item.status}}
              </p>
              <p>
                {{item.address}}
              </p>
              <p>
                {{item.space}}
              </p>
              <p>
                {{item.spaceNum}}
              </p>
              <p>
                {{item.phone}}
              </p>
              <p>
                {{item.description}}
              </p>
              <p>
                {{item.dateCreate}}
              </p>
              <p>
                {{item.termEnd}}
              </p>
              <p>
                {{item.category}}
              </p>
              <p>
                {{item.executor}}
              </p>
              <p>
                {{item.cost}}
              </p>
              <p>
                {{item.evaluation}}
              </p>
            </div>
            <div class="content-info-items-item-opacity" v-else>
              <p>
                <span v-if="item.new" class="dot"></span>
                {{item.id}}
              </p>
              <p>
                {{item.status}}
              </p>
              <p>
                {{item.address}}
              </p>
              <p>
                {{item.space}}
              </p>
              <p>
                {{item.spaceNum}}
              </p>
              <p>
                {{item.phone}}
              </p>
              <p>
                {{item.description}}
              </p>
              <p>
                {{item.dateCreate}}
              </p>
              <p>
                {{item.termEnd}}
              </p>
              <p>
                {{item.category}}
              </p>
              <p>
                {{item.executor}}
              </p>
              <p>
                {{item.cost}}
              </p>
              <p>
                {{item.evaluation}}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <Paginator />
    </div>
  </div>
  <div v-if="$store.state.isModal" class="add-modal">
    <div class="add-modal-panel">
      <div class="add-modal-panel-header">
        <div class="add-modal-panel-header-button">
          <Button class="button-modal" :class="{activeOne: isActiveOne}">
            Заявка от жителя
          </Button>
          <Button class="button-modal" :class="{activeTwo: isActiveTwo}">
            Внутренняя заявка
          </Button>
        </div>
        <div class="add-modal-panel-header-close">
          <img @click="$store.commit('openModal')" src="@/assets/img/minimize.svg" alt="">
          <img @click="$store.commit('openModal')" src="@/assets/img/close.svg" alt="">
        </div>
      </div>
      <div class="add-modal-panel-body">
        <div class="add-modal-panel-body-items">
          <div class="add-modal-panel-body-items-item">
            <p>Телефон заявителя</p>
            <input type="text" placeholder="+7 777 654 32 10">
          </div>
          <div class="add-modal-panel-body-items-item">
            <p>Дополнительный телефон</p>
            <input type="text" placeholder="+7 ">
          </div>
          <div class=""></div>
          <div class="add-modal-panel-body-items-item">
            <p>Адрес</p>
            <select>
              <option>
                Жанибек Керей хандар 16
              </option>
            </select>
          </div>
          <div class="add-modal-panel-body-items-item">
            <p>Тип помещения</p>
            <select>
              <option>
                Квартира
              </option>
            </select>
          </div>
          <div class="add-modal-panel-body-items-item">
            <p>Номер помещения</p>
            <input type="text" placeholder="60">
          </div>
        </div>
        <div class="add-modal-panel-body-categories">
          <div class="add-modal-panel-body-categories-items">
            <p>Категории работ</p>
            <div class="add-modal-panel-body-categories-items-item">
              <div class="categories">
                <p>Сантехника</p>
                <p>Электрика</p>
                <p>Уборка</p>
                <p>Благоустройство</p>
                <p>Отопление</p>
                <p>Домофон</p>
              </div>
              <div class="categories-button">
                <img src="@/assets/img/v.svg" alt="">
              </div>
            </div>
            <textarea name="" id="" cols="100%" rows="10" />
          </div>
        </div>
        <div class="add-modal-panel-body-executor">
          <div class="add-modal-panel-body-executor-button">
            <button>
              <img src="@/assets/img/user.svg" alt="">
              <p>Назначить исполнителя</p>
            </button>
            <input type="date">
            <div class="checkbox">
              <input type="checkbox" id="checkbox">
              <label for="checkbox">
                Платная
              </label>
            </div>
          </div>
          <div class="add-modal-panel-body-executor-items">
            <div class="executor">
              <p>Жунусов Нурлан</p>
              <img src="@/assets/img/plus-red.svg" alt="">
            </div>
            <div class="executor">
              <p>Жунусов Нурлан</p>
              <img src="@/assets/img/plus-red.svg" alt="">
            </div>
          </div>
        </div>
        <div class="add-modal-panel-body-footer">
          <div class="download">
            <label for="file">
              <img src="@/assets/img/paperclip.svg" alt="">
              Прикрепить
            </label>
            <input @change="fileName" type="file" id="file" accept=".jpg, .jpeg, .png" multiple>
          </div>
          <div class="file">
            <p v-for="file in file_name" :key="file">
              {{file}}
            </p>
          </div>
          <div class="save">
            <Button @click="$store.commit('openModal')">
              Сохранить
            </Button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Paginator from "@/components/Paginator";
import Button from "@/components/Button";
export default {
  name: "v-table-content",
  components: {
    Paginator,
    Button
  },
  data() {
    return {
      isActiveOne: false,
      isActiveTwo: true,
      file_name: [],
      modal_active: false,

      info: [{title: '№ ID'},
        {title: 'Статус'},
        {title: 'Адрес'},
        {title: 'Помещение'},
        {title: '№ помещ.'},
        {title: 'Тел. заявителя'},
        {title: 'Описание'},
        {title: 'Дата создания'},
        {title: 'Срок исполнения'},
        {title: 'Категория работ'},
        {title: 'Исполнитель'},
        {title: 'Стоимость'},
        {title: 'Оценка'}
      ],
      content: [
          {id: '714', status: 'принята', address: 'Сарыарқа проспект, 16', space: '---', spaceNum: '№ помещ',
            phone: '+7 (444) 444 44 44', description: 'Текст описания', dateCreate: '04.03.2021, 10:33:09',
            termEnd: '13:29:54', category: 'Лифтовое оборудование', executor: 'Иванов Василий', cost: 'бесплатно', evaluation: '0', new: true, reading: true},
        {id: '714', status: 'принята', address: 'Сарыарқа проспект, 16', space: '---', spaceNum: '№ помещ',
          phone: '+7 (444) 444 44 44', description: 'Текст описания', dateCreate: '04.03.2021, 10:33:09',
          termEnd: '13:29:54', category: 'Лифтовое оборудование', executor: 'Иванов Василий', cost: 'бесплатно', evaluation: '0', new: true, reading: true},
        {id: '714', status: 'принята', address: 'Сарыарқа проспект, 16', space: '---', spaceNum: '№ помещ',
          phone: '+7 (444) 444 44 44', description: 'Текст описания', dateCreate: '04.03.2021, 10:33:09',
          termEnd: '13:29:54', category: 'Лифтовое оборудование', executor: 'Иванов Василий', cost: 'бесплатно', evaluation: '0', new: true, reading: true},
        {id: '714', status: 'принята', address: 'Сарыарқа проспект, 16', space: '---', spaceNum: '№ помещ',
          phone: '+7 (444) 444 44 44', description: 'Текст описания', dateCreate: '04.03.2021, 10:33:09',
          termEnd: '13:29:54', category: 'Лифтовое оборудование', executor: 'Иванов Василий', cost: 'бесплатно', evaluation: '0', new: false, reading: false},
        {id: '714', status: 'принята', address: 'Сарыарқа проспект, 16', space: '---', spaceNum: '№ помещ',
          phone: '+7 (444) 444 44 44', description: 'Текст описания', dateCreate: '04.03.2021, 10:33:09',
          termEnd: '13:29:54', category: 'Лифтовое оборудование', executor: 'Иванов Василий', cost: 'бесплатно', evaluation: '0', new: false, reading: false},
      ]
    }
  },
  methods: {
    fileName(e){
      for (let i = 0; i < e.target.files.length; i++) {
        this.file_name.push(e.target.files[i].name)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.add-modal {
  position: absolute;
  width: 100%;
  right: 0;
  top: 0;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;

  &-panel {
    width: 800px;
    max-height: 100%;
    background: #F1F1F1;
    border-radius: 4px;
    padding: 5px;

    &-header {
      display: flex;
      justify-content: space-between;
      &-button {
        display: flex;

        .button-modal {
          border-radius: 4px 4px 0px 0px;
        }

        .activeTwo {
          background: none;
          color: #8A93A2;
        }
      }

      &-close {
        display: flex;
        align-items: center;
        img:first-child {
          margin-right: 20px;
        }
        img {
          cursor: pointer;
        }
      }
    }

    &-body {
      background: #FEFEFE;
      border-radius: 0px 4px 4px 4px;
      padding: 15px 20px;

      &-items {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-gap: 10px 20px;

        input {
          width: 92%;
          margin-top: 8px;
        }

        select {
          margin-top: 8px;
          width: 100%;
        }

        &-item {

          p {
            font-weight: 350;
            font-size: 14px;
            line-height: 19px;
            display: flex;
            align-items: center;
            color: #363636;
          }
        }
      }

      &-categories {
        margin-top: 10px;
        font-weight: 350;
        font-size: 14px;
        line-height: 19px;
        color: #363636;

        &-items {

          &-item {
            background: #F5F5F5;
            border-radius: 4px;
            padding: 0px 20px 0px 0px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin: 8px 0px;

            .categories {
              display: flex;

              p {
                margin: 8px;
                background: #FEFEFE;
                border-radius: 4px;
                padding: 4px 12px;
              }
            }
          }
        }

        textarea {
          border: 1px solid #F1F1F1;
          border-radius: 4px;
          max-width: 94%;
          max-height: 115px;
          padding: 20px;
        }
      }

      &-executor {
        margin: 4px 0px;

        &-button {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;

          button {
            display: flex;
            justify-content: space-around;
            align-items: center;
            padding: 12px;
            background: #F5F5F5;
            border-radius: 4px 4px 0px 0px;
            border: none;
            cursor: pointer;
          }

          input[type="date"] {
            border: none;
            margin: 0px;
            display: flex;
            flex-direction: row-reverse;
          }
          ::-webkit-calendar-picker-indicator {
            //width: 30%;
            display: flex;
            margin-left: 28%;
            margin-right: 10px;
            background-image: url('@/assets/img/calendar.svg');
            width: 20px;
            height: 20px;
          }

          .checkbox {
            display: flex;
            align-items: center;
            justify-content: center;
          }
        }

        &-items {
          background: #F5F5F5;
          border-radius: 4px;
          padding: 16px 20px;
          display: flex;
          display: grid;
          grid-template-columns: 1fr 1fr 1fr 1fr;
          grid-gap: 15px;

          .executor {
            display: flex;
            background: #FEFEFE;
            border-radius: 4px;
            padding: 8px;
            justify-content: space-between;

            p {
              font-weight: 300;
              font-size: 14px;
              line-height: 19px;
              color: #4F5D73;
            }

            img {
              cursor: pointer;
            }
          }
        }
      }

      &-footer {
        display: flex;
        margin-top: 30px;

        .download {
          display: flex;
          flex-direction: row;
          align-items: center;
          flex-grow: 1;

          label {
            display: flex;
            align-items: center;

            font-weight: 350;
            font-size: 14px;
            line-height: 19px;
            color: #363636;

            img {
              margin-right: 20px;
            }
          }

          #file {
            display:none;
          }

          input[type='file'] {

          }
        }

        .file {
          display: flex;
          flex-grow: 5;
          align-items: center;
          p {
            color: #4F5D73;
            font-weight: 300;
            font-size: 14px;
            line-height: 19px;
          }
        }

        .save {
        }
      }
    }
  }
}

.body {
  padding: 20px;
  background: #FEFEFE;
  box-shadow: 0px 1px 16px rgba(0, 0, 0, 0.04);
  border-radius: 4px;

  .container {
    display: flex;
    width: 100%;
    justify-content: center;
    margin-top: 15px;
  }
}
  .content {
    overflow: hidden;
    overflow-x: scroll;
    padding: 0px 0px 30px 0px;

    &-title {
      display: grid;
      width: 150%;
      grid-template-columns: 0.6fr 1fr 2fr 2fr 1fr 2fr 2fr 2fr 2fr 2fr 2fr 2fr 1fr;
      padding: 5px;
    }

    &-filter {
      display: grid;
      width: 150%;
      grid-template-columns: 60px 1fr 2fr 2fr 1fr 2fr 2fr 2fr 2fr 2fr 2fr 2fr 1fr;
      //grid-template-columns: 60px 1fr 2fr 1.8fr 110px 2fr 2fr 1.5fr 2fr 2fr 2fr 2fr 75px;
      //grid-template-columns: 35px 80px 190px 150px 100px 150px 130px 150px 150px 190px 150px 110px 75px;
      border-top: 1px solid #D8DBE0;
      justify-content: space-between;
      align-items: center;

      .input {
        display: flex;

        input {
          margin: 0px;
          border-radius: 4px 0px 0px 4px;
        }

        label {
          background: #F5F5F5;
          border: 0.5px solid #B1B7C1;
          border-radius: 0px 4px 4px 0px;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 6px;
        }
      }
    }

    &-info {

      &-items {

        &-item {
          display: grid;
          width: 150%;
          grid-template-columns: 0.6fr 1fr 2fr 2fr 1fr 2fr 2fr 2fr 2fr 2fr 2fr 2fr 1fr;
          position: relative;
          padding: 12px 0px;
          border-top: 1px solid #D8DBE0;

          p:first-child {
            margin-left: 22px;
          }

          p {
            font-weight: 600;
            font-size: 14px;
            line-height: 19px;
            color: #363636;
          }

          &-opacity {
            p {
              font-weight: 350;
              opacity: 0.5;
            }
            p:first-child {
              margin-left: 22px;
            }
            display: grid;
            width: 150%;
            grid-template-columns: 0.6fr 1fr 2fr 2fr 1fr 2fr 2fr 2fr 2fr 2fr 2fr 2fr 1fr;
            position: relative;
            padding: 12px 0px;
            border-top: 1px solid #D8DBE0;
          }
        }
      }
    }
  }

input {
  margin: 5px;
  padding: 4px 8px;
  background: #FEFEFE;
  border: 1px solid #F1F1F1;
  border-radius: 3.2px;
  font-weight: 300;
  font-size: 14px;
  line-height: 19px;
  color: #8A93A2;
}

select{
  margin: 5px;
  padding: 6px 8px;
  background: #FEFEFE;
  border: 1px solid #F1F1F1;
  border-radius: 3.2px;
  font-weight: 300;
  font-size: 14px;
  line-height: 19px;
  color: #8A93A2;
}

  .dot {
    width: 8px;
    height: 8px;
    border-radius: 50px;
    background: #2EB85C;
    position: absolute;
    left: 0;
  }
  ::-webkit-scrollbar {
    width: 6px;
    height: 6px;
  }
  ::-webkit-scrollbar-button {
    width: 20px;
    height: 20px;
  }
  ::-webkit-scrollbar-thumb {
    background: #b1b7c1;
    border: 0px none #ffffff;
    border-radius: 51px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: #b1b7c1;
  }
  ::-webkit-scrollbar-thumb:active {
    background: #b1b7c1;
  }
  ::-webkit-scrollbar-track {
    background: #dee0e2;
    border: 0px none #ffffff;
    border-radius: 50px;
  }
  ::-webkit-scrollbar-track:hover {
    background: #ebedef;
  }
  ::-webkit-scrollbar-track:active {
    background: #ebedef;
  }
  ::-webkit-scrollbar-corner {
    background: transparent;
  }
</style>