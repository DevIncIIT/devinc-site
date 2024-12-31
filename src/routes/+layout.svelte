<script lang="ts">
    import Header from "$lib/components/Header.svelte";
    import { ModeWatcher } from "mode-watcher";
    import "../app.css";
    import Footer from "$lib/components/Footer.svelte";
    
    let { children } = $props();
</script>

<ModeWatcher />

<div class="contents selection:bg-purple-500 selection:text-white">
    <Header />
    <div class="pt-16"></div>
    {@render children()}
    <center>
        <div class="py-16 mt-16 bg-gray-200 text-black">
            <Footer/>
        </div>
    </center>
</div>
