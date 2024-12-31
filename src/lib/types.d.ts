export type Projects = {
    id: number,
    name: string;
    image_link: string;
}

export type ProjectFull = {
    id: number,
    name: string;
    image_link: string;
    description: string;
    technologies: string[];
    github_link?: string;
    live_link?: string;
}