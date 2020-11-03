import Products from './components/Products.vue';
import ProductDetail from './components/ProductDetail.vue';
import AddProduct from './components/AddProduct.vue';

export default [
    { path: '/', component: Products},
    { path: '/add', component: AddProduct},
    { path: '/:id/:index', component: ProductDetail}
]
