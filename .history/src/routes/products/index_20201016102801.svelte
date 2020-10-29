<script context="module" lang="ts">
	import { onMount } from 'svelte';
	export function preload() {
    return this.fetch(`products.json`)
      .then((r: { json: () => any; }) => r.json())
      .then((products: { description: string; name: string }[]) => {
			return { products };
		});
	}
</script>

<script lang="ts">
  

  export let products: { description: string; name: string }[];
  
  onMount(() => {
    console.log(products);
  });
</script>

<style></style>

<h2>All Current Products</h2>
