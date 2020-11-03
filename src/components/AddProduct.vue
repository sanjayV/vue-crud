<template>
  <div class="min-content add-product">
    <b-alert
      :show="dismissCountDown"
      dismissible
      variant="success"
      @dismissed="dismissCountDown=0"
      @dismiss-count-down="countDownChanged"
    >
      Product successfully submitted.
    </b-alert>
    <b-form @submit="onSubmit" @reset="onReset">
      <b-form-group
        id="input-group-1"
        label="Product Name:"
        label-for="input-1"
      >
        <b-form-input
          id="input-1"
          v-model="product.name"
          type="text"
          required
          placeholder="Enter product name"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Description:" label-for="input-2">
        <b-form-textarea
          id="input-2"
          v-model="product.desc"
          required
          placeholder="Enter product description"
        ></b-form-textarea>
      </b-form-group>

      <b-form-group id="input-group-3" label="Price:" label-for="input-3">
        <b-form-input
          id="input-1"
          v-model="product.price"
          type="number"
          required
          placeholder="Enter product price"
        ></b-form-input>
      </b-form-group>

      <b-button type="submit" class="mr-2" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
  </div>
</template>

<script>
export default {
  data() {
      return {
          product: {},
          dismissSecs: 3,
          dismissCountDown: 0
      }
  },
  methods: {
      onSubmit(e) {
          e.preventDefault();
          this.dismissCountDown = this.dismissSecs
      },
      onReset() {
          //
      },
      countDownChanged(dismissCountDown) {
        this.dismissCountDown = dismissCountDown
      }
  }
}
</script>

<style scoped>
.add-product *{
    box-sizing: border-box;
}
.add-product {
    margin: 20px auto;
    max-width: 500px;
}
</style>
