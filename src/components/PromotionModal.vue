<template>
  <div>
    <div class="modal-background"></div>
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title">Изменение акции</p>
      </header>
      <section class="modal-card-body">
        <div class="field is-horizontal">
          <div class="field-label">
            <p class="subtitle">Имя акции</p>
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
            <p class="subtitle">Описание акции</p>
          </div>
          <div class="field-body">
            <textarea
              class="textarea is-success"
              type="text"
              v-model="editedDescription"
            ></textarea>
          </div>
        </div>
        <div class="field is-horizontal">
          <div class="field-label">
            <p class="subtitle"> Изменить ссылку для фотография</p>
          </div>
          <div class="field-body">
            <input
              class="input is-success"
              type="text"
              v-model="editedImage"
            >
          </div>
        </div>
        <div class="field is-horizontal">
          <div class="field-label"></div>
          <div class="field-body">
            <figure class="image is-128x128">
              <img
                :src="editedImage"
                alt=""
              >
            </figure>
          </div>
        </div>
      </section>
      <footer class="modal-card-foot">
        <button
          class="button is-primary"
          @click="saveData();$parent.close()"
        >Изменить данные</button>
        <button
          class="button"
          @click="$parent.close()"
        >Отмена</button>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      editedName: this.promotionDetails.name,
      editedDescription: this.promotionDetails.description,
      editedImage: this.promotionDetails.image
    }
  },
  props: ['promotionDetails'],
  methods: {
    saveData () {
      const editedPromotion = {
        name: this.editedName,
        description: this.editedDescription,
        image: this.editedImage,
        id: this.promotionDetails.id
      }
      this.$store.dispatch("editPromotion", editedPromotion);
    }
  }
}
</script>

<style>
</style>
