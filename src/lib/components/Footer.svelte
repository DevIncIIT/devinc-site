<script>
    import { Input } from "$lib/components/ui/input";
    import { Button } from "$lib/components/ui/button";
</script>

<h3 class="text-7xl" id="join">
    Wanna Join
    <span class="text-red-500"> DevInc</span>?
</h3>
<form class="w-1/2 p-4 flex flex-col gap-4">
    <label for="message" class="w-1/2 text-left text-xl">Message for us</label>
    <Input class="text-black bg-slate-400 placeholder:text-slate-50" name="message" placeholder="Write something about yourself" />
    <label for="message" class="w-1/2 text-left text-xl"
        >Your smail address</label
    >
    <Input class="text-black bg-slate-400 placeholder:text-slate-50"
        name="email"
        type="email"
        placeholder="Enter your @iitpkd.ac.in email"
    />
    <Button class="invert">Submit</Button>
</form>

<div class="flex w-1/2 pt-8 gap-4 justify-center">
    <a href="https://instgram.com" class="hover:underline">Email</a>
    <a href="https://instgram.com" class="hover:underline">Instagram</a>
    <a href="https://instgram.com" class="hover:underline">Whatsapp</a>
    <a href="https://instgram.com" class="hover:underline">Phone</a>
</div>