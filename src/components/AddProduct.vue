<template>
  <div class="main container">
    <h1 class="title">Добавление продуктов</h1>
    <form
      action="#"
      v-on:submit.prevent="addProduct"
    >

      <div class="field is-horizontal">
        <div class="field-label">

          <label for="product_category">
            <p class="subtitle"> Категория</p>
          </label>
        </div>
        <div class="field-body">
          <div class="select is-success">
            <b-select
              id="product_category"
              v-model="selected_category"
              required
            >
              <option
                v-for="(category,index) in getCategories"
                :key="index"
                :value="category.code"
              >{{category.name}}</option>
            </b-select>
          </div>
        </div>
      </div>
      <div class="field is-horizontal">
        <div class="field-label">
          <label>
            <p class="subtitle">Введите наименование товара</p>
          </label>
        </div>
        <div class="field-body">
          <input
            required
            type="text"
            class="input is-success sameWidth"
            placeholder="Маргарита"
            v-model="product_name"
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
            required
            name="product_description"
            v-model="product_description"
            rows="5"
            class="is-success input is-inline sameWidth"
            style="height:10rem"
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
          <vue-numeric
            required
            class="input is-success sameWidth"
            v-model="product_price"
            currency="Cом"
            :minus="false"
            separator="space"
            currency-symbol-position='suffix'
          ></vue-numeric>
        </div>
      </div>
      <div class="field is-horizontal">
        <div class="field-label">
          <label for="product_image">
            <p class="subtitle"> Фотография</p>
          </label>
        </div>
        <div class="field-body">
          <input
            type="file"
            :required="true"
            accept="image/*"
            ref='file'
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
              <div class="field">
                <b-switch
                  v-model="halalState"
                  type="is-success"
                  size="is-medium"
                >
                  <p v-if="halalState===true">Да</p>
                  <p v-else>Нет</p>
                </b-switch>

              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="field is-horizontal">
        <div class="field-label"></div>
        <div class="field-body">
          <input
            class="button is-success is-rounded"
            type="submit"
            value="Добавить"
            :disabled="(addStatus === 'SENDING')"
          ></div>
      </div>
    </form>
  </div>
</template>

<script>
import Vue from 'vue'
import VueNumeric from 'vue-numeric'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import { mapGetters } from 'vuex';

Vue.use(Buefy)

export default {
  data () {
    return {
      addStatus: null,
      product_price: '',
      selected_category: '',
      halalState: false,
      product_name: '',
      product_description: '',
      product_image: '',
      product_category: [
        { text: 'Пиццы', value: 'pizzas' },
        { text: 'Комбо', value: 'combos' },
        { text: 'Напитки', value: 'drinks' },
        { text: 'Дессерты', value: 'desserts' },
      ],
    }
  },
  components: { VueNumeric },
  computed: { ...mapGetters(['getPizzas', 'getCombos', 'getProducts', 'getCategories']) },
  methods: {

    addProduct () {

      const product = {
        name: this.product_name,
        description: this.product_description,
        price: this.product_price,
        halalStatus: this.halalState,
        category: this.selected_category,
      }
      let formData = new FormData();
      let file = this.$refs.file.files[0];
      formData.append('image', file);
      for (let key in product) {
        formData.append(key, product[key])
      }
      this.$store.dispatch('addProduct', formData);
      this.addStatus = 'SENDING';
      this.addStatus = 'OK';
      this.$toast.open({
        message: ' Продукт добавлен ',
        duration: 3000,
        position: 'is-bottom-right',
        type: 'is-primary'
      })
    },
  }
}
</script>

<style scoped>
.sameWidth {
  width: 50rem;
}
</style>
