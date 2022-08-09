<script>
    export let title = "Tdi Reviews";
</script>

<div class="title">
    <img src="/controller.svg" alt="site logo">
    <h1>{title}</h1>
</div>

<style lang=scss>
    .title {
        display: flex;
        img {
            display: inline-block;
            filter: invert(88%) sepia(18%) saturate(886%) hue-rotate(199deg) brightness(100%) contrast(90%);
        }
        h1 {
            margin-left: 10px;
        }
    }
</style>