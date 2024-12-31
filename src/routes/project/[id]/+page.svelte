<script lang="ts">
    import type { PageServerData } from "./$types";

    let { data }: { data: PageServerData } = $props();
</script>

<div class="flex mt-16 gap-4 px-4 h-[80vh]">
    <img
        src={data.image_link}
        alt="project: {data.name}"
        class="w-2/3 rounded-sm"
    />
    <div class="w-1/3 h-full flex flex-col">
        <p class="border-2 rounded-sm px-2 w-min">project/{data.id}</p>
        <h1 class="text-5xl font-bold">{data.name}</h1>
        <div class="flex gap-4 my-2">
            {#each data.technologies as tech}
                <p class="text-xl text-gray-500">{tech}</p>
            {/each}
        </div>
        <p class="block overflow-scroll">
            {data.description} Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Tempore ipsa facilis beatae officia facere deleniti est culpa?
            Odio, quis eos consequatur at molestias voluptatibus incidunt, aliquid
            cumque accusamus sed necessitatibus excepturi officia fugit quos laudantium
            ducimus dicta doloremque quisquam saepe enim laborum. At ad, alias sint
            inventore quam quas facilis nobis architecto nesciunt fugit odit debitis
            omnis voluptates nostrum consectetur quibusdam aliquam officiis voluptas.
            Fuga, atque saepe aliquid doloremque, esse nulla officia totam laborum
            nam recusandae dolor vitae facere praesentium, odio delectus fugit? Necessitatibus
            asperiores iusto, excepturi laborum sed soluta vel, illum id obcaecati
            magnam, modi inventore quia deleniti provident corporis! Sit explicabo
            eveniet veniam quae enim similique distinctio? Dignissimos repudiandae
            ratione dolorem ipsum deleniti ipsa tempore nihil voluptatibus deserunt?
            Dolore, magnam sint non repudiandae eum maxime ratione? Sapiente labore
            corporis molestiae modi illo reprehenderit voluptates eius nesciunt,
            quibusdam similique! Beatae ad laboriosam odit! Reprehenderit iste odit
            qui facere repudiandae quae ullam, maiores vero, culpa sit laudantium
            minus laboriosam. Id optio molestias omnis atque! Temporibus et iste
            assumenda nesciunt aut eius, alias accusamus tempora explicabo aliquam
            excepturi voluptatum doloribus doloremque enim, autem illo voluptatibus
            facere deserunt reiciendis aperiam! Expedita architecto maiores impedit
            quisquam. Consectetur neque a eligendi assumenda esse recusandae.
        </p>
        <div class="flex gap-4">
            {#if data.github_link}
                <a href={data.github_link} class="text-xl font-bold text-red-500 hover:underline"
                    >Github</a
                >
            {/if}
            {#if data.live_link}
                <a href={data.live_link} class="text-xl font-bold text-red-500 hover:underline"
                    >Live Link</a
                >
            {/if}
        </div>
    </div>
</div>
