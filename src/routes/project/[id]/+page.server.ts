import { projects } from "$lib/server/projects";
import { error } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ params }) => {
    const id = parseInt(params.id);
    const project = projects.find((project) => project.id === id);

    if (!project) {
        return error(404, "Not found");
    }
    return project
};