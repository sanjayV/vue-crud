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

      <b-button type="submit" class="mr-2" variant="primary" v-bind:disabled="saveInProgress">
          <span v-show="!saveInProgress">Submit</span>
          <b-spinner v-show="saveInProgress" small></b-spinner>
      </b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
  </div>
</template>

<script>
export default {
  data() {
      return {
          product: {
              name: "",
              desc: "",
              price: ""
          },
          saveInProgress: false,
          dismissSecs: 3,
          dismissCountDown: 0
      }
  },
  methods: {
      onSubmit(e) {
        e.preventDefault();
        const req = {...this.product};
        this.saveInProgress = true;
        this.$http.post('https://accedo-video-app-api.herokuapp.com/addProduct', req).then((data) => {
        if (data && data.status && data.status == 200) {
            this.saveInProgress = false;
            this.dismissCountDown = this.dismissSecs
            this.onReset();
        }
        }).catch(() => {
            this.saveInProgress = false;
        });
      },
      onReset() {
          this.product = {
              name: "",
              desc: "",
              price: ""
          };
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
