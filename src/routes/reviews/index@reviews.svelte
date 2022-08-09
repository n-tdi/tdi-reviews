<script context="module">
    export async function load({ fetch }) {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts');
        const reviews = await res.json();

        if (res.ok) {
            return {
                props: {
                    reviews,
                }
            }
        }

        return {
            status: res.status,
            error: new Error(res.statusText)
        }
    }
</script>

<script>
// @ts-nocheck

    export let reviews;
</script>

<div class="review">
    <ul>
        {#each reviews as review} 
            <li>
                <a sveltekit:prefetch href="{`/reviews/${review.id}`}">{review.title}</a>
            </li>
        {/each}
    </ul>
</div>

<style lang=scss>
    .review {
        margin-top: 20px;
    }
    ul {
        list-style-type: none;
        padding: 0;
    }
    a {
        display: inline-block;
        margin-top: 10px;
        padding: 10px;
        border: 1px dotted rgba(255,255,255,0.2);
    }
</style>