import type { PageServerLoad } from './$types';
import { read } from '$app/server';
import YAML from 'yaml';

export const load = (async () => {
	const projects = await read('$content/pages/projects.yaml').text();
	const projectsData = YAML.parse(projects);
	return { projects: projectsData };
}) satisfies PageServerLoad;
