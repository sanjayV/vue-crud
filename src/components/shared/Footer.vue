<template>
  <div>
    <div class="hidden-footer"></div>
    <footer class="footer">
      <div class="container">
        <span class="text-muted">© All right Reversed. <a href="https://github.com/sanjayv" target="_blank">SanjayV</a></span>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  
}
</script>

<style scoped>
.hidden-footer {
    width: 100%;
    margin-top: 40px;
}
.footer {
    position: fixed;
    bottom: 0;
    text-align: center;
    width: 100%;
    height: 40px;
    line-height: 40px;
    background-color: #f5f5f5;
}
.footer a {
    text-decoration: underline;
}
</style>
