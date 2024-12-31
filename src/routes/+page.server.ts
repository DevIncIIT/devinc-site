import client from "$lib/server/red";
import { fail, type Actions } from "@sveltejs/kit";

export const actions: Actions = {
    default: async ({ request }) => {
        const formdata = await request.formData();
        const message = formdata.get("message")?.toString();
        const smail = formdata.get("smail")?.toString();
        if (!message || !smail) {
            return fail(400, { missing: true });
        }
        if (!smail.endsWith("@iitpkd.ac.in")) {
            return fail(400, { smail, incorrect: true });
        }
        client.hSet("devinc-join", smail, message);
    },
};
