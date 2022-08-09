<script context="module">
	export function load({ error }) {
		return {
			props: { message: error.message }
		};
	}
</script>

<script lang=js>
// @ts-nocheck
  export let message;
</script>

<div class="error">
  <h2>Who let the dogs out?</h2>
  <p>{message}</p>
  <a href="/">Home</a>
  <br>
  <img src="/cymbals-monkey-brain.gif" alt="Monkey Brain">
</div>

<style lang=scss>
  .error {
    text-align: center;
    margin-bottom: 60px;
    h2 {
      font-size: 1.5em;
      margin-bottom: 10px;
    }
    p {
      font-size: 1.2em;
      margin-bottom: 10px;
    }

    a {
      font-size: 1.2em;
      margin-bottom: 10px;
      text-decoration: none;
      color: rgb(82, 82, 82);
    }
    img {
      width: 50%;
    }
  }
</style>


