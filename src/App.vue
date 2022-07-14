<template>
  <header class="top-bar spread">
      <nav class="top-bar-nav">
          <router-link to="/" class="top-bar-link">
          <i class="icofont-spoon-and-fork"></i>
          <span>Home</span>
          </router-link> |
          <router-link to="/products" class="top-bar-link">
          <span>Products</span>
          </router-link> |
          <router-link to="/past-orders" class="top-bar-link">
          <span>Past Orders</span>
          </router-link>
      </nav>
        <div @click="toggleSidebar" class="top-bar-cart-link">
          <i class="icofont-cart-alt icofont-1x"></i>
          <span>Cart ({{ getTotalQuantity() }})</span>
        </div>
  </header>
  <router-view
    :inventory="inventory"
    :addToCart="addToCart"
  />

  <MySidebar
    v-if="showSidebar"
    :toggle="toggleSidebar"
    :cart="cart"
    :inventory="inventory"
    :remove="removeItem"
  />
</template>

<script>
import MySidebar from '@/components/MySidebar.vue' // @ is the source folder
import food from '@/assets/food.json'

export default {
  components: {
    MySidebar
  },
  data () {
    return {
      cart: {},
      inventory: food,
      showSidebar: false
    }
  },
  methods: {
    addToCart (name, quantity) {
      if (!this.cart[name]) this.cart[name] = 0
      this.cart[name] += quantity
    },
    getTotalQuantity () {
      return Object.keys(this.cart).length
    },
    toggleSidebar () {
      this.showSidebar = !this.showSidebar
    },
    removeItem (name) {
      delete this.cart[name]
    }
  }
}
</script>
