<script>
    import DevInc from "./DevInc.svelte";

</script>
<div class="flex justify-center fixed w-screen z-10">
    <nav
        class="flex rounded-md justify-between items-center p-4 bg-white text-black m-4 w-1/2"
    >
        <a href="/" class="text-0 font-bold"><DevInc font_style="text-2xl" /></a>
        <div class="flex gap-4">
            <a href="/about" class="text-xl">About</a>
            <a href="/#projects" class="text-xl">Projects</a>
            <a href="#join" class="text-xl">Join</a>
        </div>
    </nav>
</div>
