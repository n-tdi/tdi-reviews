<script>
    import Title from "$lib/title.svelte";
    import '../../styles/global.css';
</script>

<header>
    <nav>
        <Title />
        <div class="links">
            <a href="/">Home</a>
            <a href="/about">About</a>
            <a href="/reviews">Reviews</a>
        </div>
    </nav>
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
        text-align: center;
        background-color: rgba(0,0,0,0.1);
        nav {
            display: flex;
            align-items: center;
            max-width: 88%;
            margin: 0 auto;
        }
    }
    main {
        max-width: 88%;
        margin: 20px auto;
    }
    footer { 
        text-align: center;
    }
    .links {
        margin-left: auto;
        a {
            margin-left: 10px;
        }
    }
</style>