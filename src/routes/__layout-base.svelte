<script>
    import Title from "$lib/title.svelte";
    import '../styles/global.css';
</script>

<header>
    <Title />
</header>
<main>
    <!-- Page content -->
    <slot></slot>
</main>
<footer>
    <p>&copy; 2022 Tdi Reviews</p>
</footer>

<style lang=scss>
    header {
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: rgba(0,0,0,0.1);
    }
    main {
        max-width: 88%;
        margin: 20px auto;
    }
    footer { 
        text-align: center;
    }
</style>