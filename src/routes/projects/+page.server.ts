import type { PageServerLoad } from './$types';
import YAML from 'yaml';
import projects from '$lib/pages/projects.yaml?raw';

type projects = {
	title: string;
	sections: {
		title: string;
		subtitle: string;
		list: {
			title: string;
			description: string[];
		}[];
		images: {
			src: string;
			alt: string;
		}[];
		link: {
			title: string;
			url: string;
		}[];
	}[];
};
export const load = (async () => {
	const projectsData = YAML.parse(projects) as projects;
	return { projects: projectsData };
}) satisfies PageServerLoad;
