<template>
  <div class="min-content product-detail">
    <b-alert v-show="error" variant="danger" show>{{ error }}</b-alert>
    <b-card
        v-bind:img-src="'https://picsum.photos/900/250/?image=' + productIndex"
        img-alt="Product Image"
    >
      <b-card-title>{{ product.name }}</b-card-title>
      <b-card-sub-title class="mb-2">{{ product.price }}</b-card-sub-title>
      <b-card-text>
        {{ product.desc }}
      </b-card-text>
      <template #footer>
        <div class="d-flex flex-row">
            <div class="mr-auto p-2">
                <small class="text-muted">{{ product.created_date | timeAgo }}</small>
            </div>
        </div>
      </template>
    </b-card>
  </div>
</template>

<script>
import mixin from '../mixins/mixin';

export default {
  data() {
    return {
        id: this.$route.params.id,
        productIndex: this.$route.params.index,
        product: {},
        error: ""
    }
  },
  created() {
    this.dataLoading = true;
    this.$http.get('https://accedo-video-app-api.herokuapp.com/getProduct/' + this.id).then((data) => {
        if (data && data.data) {
            this.product = data.data;
        } else {
            this.error = "Error in load data. Please refresh page again.";
        }
    }).catch(() => {
        this.error = "Error in load data. Please refresh page again.";
    });
  },
  mixins: [mixin]
}
</script>

<style scoped>
.product-detail {
    padding: 0 20px;
    margin: 0 0 20px;
    box-sizing: border-box;
    background: #eee;
}
</style>
