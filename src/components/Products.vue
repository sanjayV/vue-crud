<template>
  <div class="min-content">
    <b-container class="bv-example-row">
        <div v-if="dataLoading" class="loader-main d-flex justify-content-center flex-direction-row align-items-center flex-wrap">
            <b-spinner label="Spinning"></b-spinner>
        </div>
        <input v-show="!dataLoading" class="search mb-2 p-2" type="text" v-model="search" placeholder="search product" />
        <b-row v-show="!dataLoading">
            <b-col
                lg="4" md="6" sm="12"
                v-for="(product,index) in filteredProducts"
                v-bind:key="product._id"
                v-bind:ref="product._id">
                <b-card
                    v-bind:img-src="'https://picsum.photos/600/300/?image=' + index"
                    img-alt="Image"
                    img-top
                    tag="article"
                    class="mb-2"
                >
                    <b-card-title>{{ product.name }}</b-card-title>
                    <b-card-sub-title class="mb-2">{{ product.price }}</b-card-sub-title>
                    <b-card-text>
                        {{ product.desc | limitedChar(100) }}
                    </b-card-text>

                    <template #footer>
                        <div class="d-flex flex-row">
                            <div class="mr-auto p-2">
                                <small class="text-muted">{{ product.created_date | timeAgo }}</small>
                            </div>
                            <div class="p-2" v-b-tooltip.hover title="Delete Product">
                                <b-icon v-on:click="deleteProduct(product._id)" v-show="!deleteInProgress" icon="trash" variant="danger"></b-icon>
                                <b-spinner v-show="deleteInProgress" small variant="danger"></b-spinner>
                            </div>
                            <div class="p-2" v-b-tooltip.hover title="View Product">
                                <router-link v-bind:to="'/' + product._id">
                                    <b-icon icon="eye-fill"></b-icon>
                                </router-link>
                            </div>
                        </div>
                    </template>
                </b-card>
            </b-col>
        </b-row>
    </b-container>
  </div>
</template>

<script>
import mixin from '../mixins/mixin';

export default {
  data() {
      return {
          products: [],
          search: "",
          dataLoading: true,
          deleteInProgress: false
      }
  },
  methods: {
      deleteProduct(id) {
        this.$bvModal.msgBoxConfirm('Please confirm that you want to delete product.', {
          title: 'Please Confirm',
          size: 'sm',
          buttonSize: 'sm',
          okVariant: 'danger',
          okTitle: 'YES',
          cancelTitle: 'NO',
          footerClass: 'p-2',
          hideHeaderClose: false,
          centered: true
        }).then(value => {
            if (value) {
                this.deleteInProgress = true;
                this.$http.delete('https://accedo-video-app-api.herokuapp.com/deleteProduct/' + id).then((data) => {
                    this.deleteInProgress = false;
                    console.log('data', data)
                    if (data && data.status && data.status == 200) {
                        this.$refs[id][0].remove();
                    }
                }).catch(() => {
                    this.deleteInProgress = false;
                });
            }
        });
      }
  },
  created() {
    this.dataLoading = true;
    this.$http.get('https://accedo-video-app-api.herokuapp.com/getProducts').then((data) => {
        this.dataLoading = false;
        if (data && data.data) {
            this.products = data.data;
        }
    }).catch(() => {
        this.dataLoading = false;
    });
  },
  mixins: [mixin]
}
</script>

<style scoped>
.loader-main {
    min-height: 200px;
}
.search {
    width: 100%;
}
</style>
