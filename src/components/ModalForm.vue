<template>
  <div>
    <div class="modal-background"></div>
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title"> Изменение продукта</p>
      </header>
      <section class="modal-card-body">
        <div class="field is-horizontal">
          <div class="field-label">
            <p class="subtitle">Имя продукта</p>
          </div>
          <div class="field-body">
            <input
              class="input is-success"
              type="text"
              v-model="editedName"
            >
          </div>
        </div>

        <div class="field is-horizontal">
          <div class="field-label">
            <p class="subtitle"> Категория</p>
          </div>
          <div class="field-body">
            <div class="select is-success">
              <b-select
                id="product_category"
                v-model="editedCategory"
              >
                <option
                  v-for="(option,index) in product_category"
                  :key="index"
                  :value="option.value"
                >{{option.text}}</option>
              </b-select>

            </div>
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
              class="input is-success"
              v-model="editedPrice"
              currency="Cом"
              :minus="false"
              separator="space"
              currency-symbol-position='suffix'
            ></vue-numeric>
          </div>
        </div>

        <div class="field is-horizontal">
          <div class="field-label">
            <p class="subtitle">Описание продукта</p>
          </div>
          <div class="field-body">
            <textarea
              class="textarea is-success"
              type="text"
              v-model="editedDescription"
              rows="5"
            ></textarea>
          </div>
        </div>
        <div class="field is-horizontal">
          <div class="field-label">
            <p class="subtitle"> Халяль?
            </p>
          </div>
          <div class="field-body">
            <div class="field is-narrow">
              <div class="control">
                <div class="field">
                  <b-switch
                    v-model="editedStatus"
                    type="is-success"
                    size="is-medium"
                  >
                    <p v-if="productDetails.halalStatus===true">Да</p>
                    <p v-else>Нет</p>
                  </b-switch>

                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="field is-horizontal">
          <div class="field-label">
            <label for="product_image">
              <p class="subtitle"> Изменить ссылку для фотография</p>
            </label>
          </div>
          <div class="field-body">
            <input
              type="text"
              class="input is-success"
              v-model="editedImage"
            >
          </div>
        </div>
        <div class="field is-horizontal">
          <div class="field-label"></div>
          <div class="field-body">
            <!-- <figure class="image is-128x128">
              <img
                :src="editedImage"
                alt=""
              >
            </figure> -->
          </div>
        </div>

        <!-- <div class="field is-horizontal">
        <div class="field-label"></div>
        <div class="field-body"></div>
        </div> -->

      </section>
      <footer class="modal-card-foot">
        <button
          type="submit"
          class="button is-success"
          @click="saveData()"
        >Сохранить измениния</button>
      </footer>
    </div>
  </div>
</template>

<script>
import VueNumeric from 'vue-numeric'

export default {
  data () {
    return {
      editedName: this.productDetails.name,
      editedCategory: this.productDetails.category,
      editedDescription: this.productDetails.description,
      editedPrice: this.productDetails.price,
      editedImage: this.productDetails.image,
      editedStatus: this.productDetails.halalStatus,

      product_category: [
        { text: 'Пиццы', value: 'pizzas' },
        { text: 'Комбо', value: 'combos' },
        { text: 'Напитки', value: 'drinks' },
        { text: 'Дессерты', value: 'desserts' },
      ],
    }
  }, components: {
    VueNumeric
  },
  props: ['productDetails', 'status'],
  methods: {
    saveData () {
      const editedProduct = {
        name: this.editedName,
        category: this.editedCategory,
        description: this.editedDescription,
        price: this.editedPrice,
        image: this.editedImage,
        halalStatus: this.editedStatus,
        id: this.productDetails.id
      }
    }
  },
}
</script>
    
<style>
</style>
