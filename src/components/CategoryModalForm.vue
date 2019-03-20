<template>
  <div @keyup.enter="saveData();$parent.close()">
    <div class="modal-background"></div>
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title"> Изменение категории</p>
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
              v-model="editedCategoryName"
            >
          </div>
        </div>
        <div class="field is-horizontal">
          <div class="field-label">
            <p class="subtitle">Имя продукта</p>
          </div>
          <div class="field-body">
            <input
              class="input is-success"
              type="text"
              v-model="editedCategoryCode"
            >
          </div>
        </div>

      </section>
      <footer class="modal-card-foot">
        <button
          type="submit"
          class="button is-success"
          @click="saveData();$parent.close()"
        >Сохранить измениния</button>
        <button
          class="button"
          @click="$parent.close()"
        >Отмена</button>
      </footer>
    </div>
  </div>
</template>

<script>
import VueNumeric from 'vue-numeric'

export default {
  data () {
    return {
      editedCategoryName: this.categoryDetails.name,
      editedCategoryCode: this.categoryDetails.code
    }
  },
  props: ['categoryDetails'],
  methods: {
    saveData () {

      const editedCategory = {
        name: this.editedCategoryName,
        code: this.editedCategoryCode,
      }
      this.$store.dispatch('editCategory', editedCategory);
    }
  },
}
</script>
    
<style>
</style>
