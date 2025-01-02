<script>
    let { font_style } = $props();
    let is_hovered = $state(false);
</script>

<h1
    class="{font_style} font-bold"
    onmouseenter={() => (is_hovered = true)}
    onmouseleave={() => (is_hovered = false)}
>
    {is_hovered ? "Dev/nc" : "<D/>"}
</h1>
