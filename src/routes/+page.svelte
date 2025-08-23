<script lang="ts">
  import type { PageData } from './$types'

  export let data: PageData
</script>

{#each data.monsters as monster, id (monster.url)}
  <p>{monster.id}: {monster.name}</p>
{/each}

<style>
</style>
