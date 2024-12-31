<script lang="ts">
    import type { Projects } from "$lib/types";

    let { id, name, image_link }: Projects = $props();
</script>

<div class="w-full h-96 text-center hover:border-white border-2 border-black">
    <a href="/project/{id}">
        <img src={image_link} alt="project: {name}" class="w-full h-full" />
        <h1 class="text-2xl font-bold -mt-8 text-white">
            {name}
        </h1>
    </a>
</div>
