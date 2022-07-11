<template>
  <div class="container px-5">
    <div class="flex">
      <div class="flex flex-col">
        <h1>Invoices</h1>
        <span>There are 4 total invoices</span>
      </div>
      <div class="flex">
        <div @click="toggleFilter" class="flex" ref="filter">
          <span>Filter by status</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>