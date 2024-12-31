<script>
    let { children } = $props();
</script>

<div class="flex justify-center">
    <div class="prose prose-invert mt-16">
        {@render children()}
    </div>
</div>
