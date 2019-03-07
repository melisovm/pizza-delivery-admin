<template>
  <div class="main container">
    <h1 class="title">Добавление продуктов</h1>
    <form action="#">
      <div class="field is-horizontal">
        <div class="field-label">
          <label for="product_category">
            <p class="subtitle"> Категория</p>
          </label>
        </div>
        <div class="field-body">
          <div class="select is-success">
            <select
              id="product_category"
              v-model="selected_category"
            >
              <option
                v-for="(option,index) in product_category"
                :key="index"
                :value="option.value"
              >{{option.text}}</option>
            </select>

          </div>
        </div>
      </div>
      <div class="field is-horizontal">
        <div class="field-label">
          <label for="product_name">
            <p class="subtitle">Введите наименование товара</p>
          </label>
        </div>
        <div class="field-body">
          <input
            type="text"
            class="input is-success sameWidth"
            placeholder="Маргарита"
            id="product_name"
          >
        </div>
      </div>
      <div class="field is-horizontal">
        <div class="field-label">
          <label for="product_description">
            <p class="subtitle">Введите описание продукта</p>
          </label>
        </div>
        <div class="field-body">
          <textarea
            name="product_description"
            id="product_description"
            rows="5"
            class="is-success textarea is-inline sameWidth"
          ></textarea>
        </div>
      </div>
      <div class="field is-horizontal">
        <div class="field-label">
          <label for="product_price">
            <p class="subtitle"> Цена продукта</p>
          </label>
        </div>
        <div class="field-body">
          <input
            type="number"
            class=""
          >
        </div>
      </div>
      <div class="field is-horizontal">
        <div class="field-label">
          <label for="product_image">
            <p class="subtitle"> Введите ссылку для фотография</p>
          </label>
        </div>
        <div class="field-body">
          <input
            type="text"
            class="input is-success sameWidth"
            id="product_image"
          >
        </div>
      </div>
      <div class="field is-horizontal">
        <div class="field-label">
          <p class="subtitle"> Продукт соответветствует к стандартам Халяль?
          </p>
        </div>
        <div class="field-body">
          <div class="field is-narrow">
            <div class="control">
              <label class="radio">
                <input
                  type="radio"
                  name="halalState"
                  class="radio-text"
                  @click="halalState=true"
                >
                Да
              </label>
              <label class="radio">
                <input
                  type="radio"
                  name="halalState"
                  class="radio-text"
                  @click="halalState=false"
                >
                Нет
              </label>
            </div>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      selected_category: '',
      halalState: 'false',
      product_category: [
        { text: 'Пиццы', value: 'pizzas' },
        { text: 'Комбо', value: 'combos' },
        { text: 'Напитки', value: 'drinks' },
        { text: 'Дессерты', value: 'desserts' },
      ],
    }
  },
}
</script>

<style scoped>
.sameWidth {
  width: 50rem;
}
input[type="number"] {
}
</style>
