<script context="module">
    export async function load({ fetch }) {
        const res = await fetch('/api/reviews.json');
        const { reviews}  = await res.json();

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

    console.log(reviews);
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
        margin-top: 1%;
        padding: 1%;
        border: 2px dotted rgba(255,255,255,0.2);
        font-weight: 300;
    }
</style>