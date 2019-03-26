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
              type="file"
              ref="editedfile"
            >
          </div>
        </div>
        <div class="field is-horizontal">
          <div class="field-label"></div>
          <div class="field-body">
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
    }
  },
  props: ['promotionDetails'],
  methods: {
    saveData () {
      const editedPromotion = {
        name: this.editedName,
        description: this.editedDescription,
        id: this.promotionDetails._id
      }
      let editedFormData = new FormData();
      let editedFile = this.$refs.editedfile.files[0];
      editedFormData.append('image', editedFile);
      for (let key in editedPromotion) {
        editedFormData.append(key, editedPromotion[key])
      }
      this.$store.dispatch("editPromotion", { editedPromotion, editedFormData });
    }
  }
}
</script>

<style>
</style>
