<template>
  <div class="mb-3">
    <b-navbar toggleable="lg" type="dark" variant="info">
        <b-navbar-brand><img src="../../assets/logo.png" alt="VueJS"></b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
            <b-nav-item>
                <router-link to="/" exact>Products</router-link>
            </b-nav-item>
            <b-nav-item>
                <router-link to="/add" exact>Add Product</router-link>
            </b-nav-item>
        </b-navbar-nav>
        </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  
}
</script>

<style scoped>
.navbar-nav::before {
    content: "";
    border-left: 1px solid #fff;
}
.navbar-brand img {
    width: 30px;
    height: auto;
}
.nav-item a {
    color: #fff;
}
.router-link-active {
    font-weight: bold;
    text-decoration: underline;
}
</style>
