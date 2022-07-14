<template>
    <div>
    <main class="wrapper">
        <h1>Products</h1>
            <ProductCard
            v-for="(product, index) in inventory"
            :key="product.id"
            class="card"
            :index="index"
            :addToCart="addToCart"
            :product="product"
          />
      </main>
    </div>
</template>

<script>
import ProductCard from '@/components/ProductCard.vue'

export default {
  name: 'ProductView',
  props: ['addToCart', 'inventory'],
  components: {
    ProductCard
  }
}
</script>
