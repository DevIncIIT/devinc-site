<script lang="ts">
    import type { Projects } from "$lib/types";
    import * as Carousel from "$lib/components/ui/carousel";

    import ProjectCard from "$lib/components/ProjectCard.svelte";
    import Footer from "$lib/components/Footer.svelte";
    import DevInc from "$lib/components/DevInc.svelte";

    let projects: Projects[] = [
        {
            id: 1,
            name: "SAC Website",
            image_link:
                "https://www.thefastmode.com/media/k2/items/src/f89f5a6bd3107234fb0b76f8f2aeb812.jpg?t=20230502_064103",
        },
        {
            id: 2,
            name: "ISRO 3D MoonViewer",
            image_link:
                "https://www.thefastmode.com/media/k2/items/src/f89f5a6bd3107234fb0b76f8f2aeb812.jpg?t=20230502_064103",
        },
        {
            id: 3,
            name: "Dream 11 (Inter IIT)",
            image_link:
                "https://www.thefastmode.com/media/k2/items/src/f89f5a6bd3107234fb0b76f8f2aeb812.jpg?t=20230502_064103",
        },
        {
            id: 4,
            name: "Astronomy Club Site",
            image_link:
                "https://www.thefastmode.com/media/k2/items/src/f89f5a6bd3107234fb0b76f8f2aeb812.jpg?t=20230502_064103",
        },
        {
            id: 5,
            name: "Petrichor 2025",
            image_link:
                "https://www.thefastmode.com/media/k2/items/src/f89f5a6bd3107234fb0b76f8f2aeb812.jpg?t=20230502_064103",
        },
    ];
</script>

<center>
    <div class="pt-16">
        <DevInc font_style="text-9xl" />
    </div>
    <h3 class="text-3xl text-gray-300">DevInc Is Not CP</h3>
    <p class="text-xl w-1/2 mt-16">
        DevInc is a community of developers at
        <a href="http://iitpkd.ac.in/" class="text-red-500">IIT Palakkad</a>,
        that build production-ready applications using modern technologies.
    </p>

    <Carousel.Root class="w-[90vw] mt-16" id="projects">
        <Carousel.Content>
            {#each Array(5) as _, i (i)}
                <Carousel.Item class="md:basis-1/2 lg:basis-1/4">
                    <ProjectCard {...projects[i]} />
                </Carousel.Item>
            {/each}
        </Carousel.Content>
        <Carousel.Previous />
        <Carousel.Next />
    </Carousel.Root>
</center>
