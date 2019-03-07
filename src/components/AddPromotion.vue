<template>
  <div class="container">
    <h1 class="title">Добавление акции/новостей</h1>
    <form v-on:submit.prevent="onSubmit">
      <div class="field is-horizontal">
        <div class="field-label">
          <p class="subtitle">Наименование акции(новости)</p>
        </div>
        <div class="field-body">
          <input
            type="text"
            class="input is-success sameWidth"
            placeholder=""
          >
        </div>
      </div>
      <div class="field is-horizontal">
        <div class="field-label">
          <p class="subtitle">Описание акции(новости)</p>
        </div>
        <div class="field-body">
          <textarea
            cols="30"
            rows="10"
            class="textarea is-success sameWidth"
          ></textarea>
        </div>
      </div>
      <div class="field is-horizontal">
        <div class="field-label">
          <p class="subtitle">Ссылка на картину акции(новости)</p>
        </div>
        <div class="field-body">
          <input
            type="text"
            class="input is-success sameWidth"
          >
        </div>
      </div>
      <div class="field is-horizontal">
        <div class="field-label"></div>
        <div class="field-body">
          <input
            class="button is-success is-rounded"
            type="submit"
            value="Submit input"
          ></div>
      </div>
    </form>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.sameWidth {
  width: 50rem;
}
</style>
