<script lang="ts">
    import { Input } from "$lib/components/ui/input";
    import { Button } from "$lib/components/ui/button";
    import { enhance } from "$app/forms";
    import type { SubmitFunction } from "@sveltejs/kit";

    let form_filled = $state(false);

    function onSubmit() {
        //@ts-ignore
        return async ({ result }: SubmitFunction) => {
            console.log(result)
            if (result.type === "success") {
                form_filled = true;
            } else {
                if (result.data?.incorrect) {
                    alert("Please enter a valid smail (@iitpkd.ac.in) address");
                }
            }
        };
    }
</script>

<h3 class="text-7xl" id="join">
    Wanna Join
    <span class="text-red-500"> DevInc</span>?
</h3>
{#if form_filled}
    <h1 class="text-4xl py-8">Thank you for your interest!</h1>
{:else}
    <form class="w-1/2 p-4 flex flex-col gap-4" method="POST" use:enhance={onSubmit as any}>
        <label for="message" class="w-1/2 text-left text-xl"
            >Message for us</label
        >
        <Input
            class="text-black bg-slate-400 placeholder:text-slate-50"
            name="message"
            placeholder="Write something about yourself"
        />
        <label for="message" class="w-1/2 text-left text-xl"
            >Your smail address</label
        >
        <Input
            class="text-black bg-slate-400 placeholder:text-slate-50"
            name="smail"
            type="email"
            placeholder="Enter your @iitpkd.ac.in email"
        />
        <Button type="submit" class="invert">Submit</Button>
    </form>
{/if}

<div class="flex w-1/2 pt-8 gap-4 justify-center">
    <a href="https://instgram.com" class="hover:underline">Email</a>
    <a href="https://instgram.com" class="hover:underline">Instagram</a>
    <a href="https://instgram.com" class="hover:underline">Whatsapp</a>
    <a href="https://instgram.com" class="hover:underline">Phone</a>
</div>
