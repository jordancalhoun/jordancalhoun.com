<script lang="ts">
  import { enhance } from '$app/forms';
  import type { ActionData } from './$types';
  export let form: ActionData;
</script>

{#if form?.success}
  <p>Thank you for your email, {form.name}</p>
{:else if form?.success === false}
  <p>Email sending error</p>
{:else}
  <h1>Contact me</h1>
  <form method="post" use:enhance>
    <input name="name" type="text" placeholder="Your name" />
    <br />
    {#if form?.missingEmail}
      <p>Please enter your email address</p>
    {/if}
    <input type="email" name="email" id="email" placeholder="Email address" required />
    <br />
    <textarea name="message" cols="30" rows="10" />
    <br />
    <button>Submit</button>
  </form>
{/if}
