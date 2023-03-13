<script>
    export let data;

    let img = data.img.data;
   
</script>

<body>
    <div style="position:relative">
        <!-- svelte-ignore a11y-missing-attribute -->
        <img
            class="trimmed-cover"
            src="https://github.com/mhdfarisx/showcase-gallery/blob/main/img/notAnArtist_wave_on_sand_colorful_neon_angle_from_top_make_it_a_9cb67ff6-9bf7-4b82-b930-fcb3de37649d.png?raw=true"
            alt="mhdfarisx"
        />
        <!-- svelte-ignore a11y-missing-attribute -->
        <img
            class="inlay"
            src="https://cdn-icons-png.flaticon.com/512/21/21104.png"
        />
    </div>

    <div class="carousel-item">
        {#each img as image}
            <!-- svelte-ignore a11y-missing-attribute -->
            <img src={image.img_url} />
            <div class="carousel-caption d-none d-md-block">
                <h5>...</h5>
                <p>...</p>
            </div>
        {/each}
    </div>

    <div class="container">
        <div class="row">
            {#each img as image}
                <div class="col-sm-3">
                    <div class="wrapper">
                        <div>
                            <div
                                class="card"
                                style="width: 18rem; background-color: black;"
                            >
                                <!-- svelte-ignore a11y-missing-attribute -->
                                <!-- svelte-ignore a11y-mouse-events-have-key-events -->
                                <img class="image" src={image.img_url} />

                                <div class="overlay">
                                    <p
                                        style="font-size: 13px; font-weight: bold;font-style: italic; color: white; padding: 5px; margin: 0"
                                    >
                                        Prompt:
                                    </p>
                                    <div class="text">{image.prompt}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            {/each}
        </div>
    </div>
</body>

<style>
    body {
        background-color: #252525;
    }

    .card {
        position: relative;
        width: 50%;
    }

    .image {
        display: block;
        width: 100%;
        height: auto;
        border-radius: 5px;
    }

    .card:hover .overlay {
        margin: 5%;
        height: 40%;
        opacity: 0.9;
        width: 90%;
        border-radius: 10px;
    }

    .overlay {
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        background-color: #171717;
        overflow: hidden;
        width: 90%;
        height: 0;
        transition: 0.4s;
    }

    .text {
        color: white;
        font-size: 16px;
        /* font-family: "PROXIMA NOVA"; */
        padding: 4px;
        text-align: center;
    }

    .inlay {
        position: absolute;
        bottom: 20%;
        left: 1%;
        height: 150px;
        width: 150px;
        padding: 4px;
        border-radius: 100px;
        border: rgb(123, 122, 122) solid 4px;
        background-color: rgb(255, 255, 255);
    }

    .trimmed-cover {
        margin-top: 3%;
        opacity: 0.85;
        object-fit: cover;
        width: 100%;
        height: 400px;
        object-position: 50% 50%;
        margin-bottom: 5%;
        transform: scale(1, 1);
        background-color: rgb(36, 36, 36);
        border: solid 2px rgb(144, 144, 144);
        border-radius: 50px;
    }

    .wrapper {
        margin: 10px;
    }
</style>
