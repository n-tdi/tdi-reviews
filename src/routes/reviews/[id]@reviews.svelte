<script context="module">
    export async function load({ params, fetch }) {
        const id = params.id;
        const res = await fetch(`/api/${id}.json`);
        const { review } = await res.json();

        if (res.ok) {
            return {
                props: {
                    review,
                }
            }
        }

        return {
            status: 301,
            // error: new Error(res.statusText)
            redirect: '/reviews'
        }
    }
</script>

<script>
    // @ts-nocheck
    export let review;

    const share = () => {
        navigator.clipboard.writeText(window.location.href);
    }
</script>

<div class="review">
    <h2>{review.title}</h2>
    <p>{review.body}</p>
    <div class="review--footer">
        <button class="button-32" on:click={share}><img src="/share-solid.svg" alt="share"></button>
    </div>
</div>

<style lang=scss>
    .review { 
        margin-top: 40px;
        padding: 10px;
        border: 1px solid rgba(255,255,255,0.2);
        .review--footer {
            width: 100%;
            margin-top: 10px;
            display: flex;
            justify-content: end;
        }
    }
    .button-32 {
        border: 2px solid #fff000;
        border-radius: 12px;
        color: rgb(255, 255, 255);
        cursor: pointer;
        font-weight: bold;
        padding: 10px;
        text-align: center;
        transition: 200ms;
        width: 50px;
        box-sizing: border-box;
        background-color: #422d5d;
        font-size: 16px;
        user-select: none;
        -webkit-user-select: none;
        touch-action: manipulation;
        img {
            width: 20px;
            height: 20px;
            filter: invert(100%) sepia(18%) saturate(886%) hue-rotate(199deg) brightness(100%) contrast(90%);
        }
    }

    .button-32:not(:disabled):hover {
        outline: 0;
        border-color: #fffba8;
        box-shadow: 0 0 0 2px rgba(0,0,0,.2), 0 3px 8px 0 rgba(0,0,0,.15);
    }

    .button-32:active {
        transform: translateY(4px);
    }

    .button-32:disabled {
        filter: saturate(0.2) opacity(0.5);
        -webkit-filter: saturate(0.2) opacity(0.5);
        cursor: not-allowed;
        background-color: #fff000;
    }
</style>