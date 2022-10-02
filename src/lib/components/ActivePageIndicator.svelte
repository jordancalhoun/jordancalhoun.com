<script lang="ts">
  export let active = false;
</script>

{#if active}
  <span id="crisp-circle"/>
  <span id="blurred-circle"/>
{/if}

<style>
    #crisp-circle, #blurred-circle {
        position: relative;
        display: block;
        width: 6px;
        height: 6px;
        border-radius: 3px;
        background: #FF3C00;
        top: 10px;
        margin-bottom: -6px;
        margin-left: auto;
        margin-right: auto;
    }

    #crisp-circle {
        margin-bottom: -6px;
        z-index: 2;
    }

    #blurred-circle {
        filter: blur(2px);
        z-index: 1;
    }
</style>