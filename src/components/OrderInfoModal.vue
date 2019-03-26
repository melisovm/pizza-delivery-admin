<template>
  <div>
    <div class="modal-background"></div>
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title"> Информация о заказчике</p>
      </header>
      <section class="modal-card-body">
        <div class="field is-horizontal">
          <div class="field-label">
            <p class="subtitle">Имя заказчика</p>
          </div>
          <div class="field-body">
            <p class="subtitle">{{orderDetails.customer_name}}</p>
          </div>
        </div>
        <div class="field is-horizontal">
          <div class="field-label">
            <p class="subtitle">Список заказов</p>
          </div>
          <div class="field-body">
            <b-table
              :data="orderDetails.orderList"
              mobile-cards
              bordered
            >
              <template slot-scope="props">
                <b-table-column
                  field="product_name"
                  label="Имя"
                  centered
                >{{props.row.product_name}}
                </b-table-column>
                <b-table-column
                  centered
                  field="product_quantity"
                  label="Количество"
                >{{props.row.product_quantity}}
                </b-table-column>
              </template>
            </b-table>
          </div>
        </div>
        <div class="field is-horizontal">
          <div class="field-label">
            <p class="subtitle">Номер телефона</p>
          </div>
          <div class="field-body">
            <p class="subtitle">{{orderDetails.phone}}</p>
          </div>
        </div>

        <div class="field is-horizontal">
          <div class="field-label">
            <p class="subtitle">Адрес</p>
          </div>
          <div class="field-body">
            <p class="subtitle">{{orderDetails.address}}</p>
          </div>
        </div>
        <div class="field is-horizontal">
          <div class="field-label">
            <p class="subtitle">Всего</p>
          </div>
          <div class="field-body">
            <p class="subtitle"><b>{{orderDetails.total_price}}</b> сом</p>
          </div>
        </div>
      </section>
      <footer class="modal-card-foot">
        <button
          class="button"
          @click="$parent.close()"
        >Отмена</button>
      </footer>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'

export default {
  props: ['orderDetails'],

  computed: {
    ...mapGetters(['getProducts']),
    // findProduct () {
    //   let orderedProducts = this.orderDetails.orderList.map(element => {
    //     let orderedProduct = this.getProducts.find(product => product._id === element.product_id)
    //     orderedProducts.push(orderedProduct);

    //   })
    //   return orderedProducts
    // }
  },
}

</script>

<style>
</style>
