import type { PageServerLoad } from './$types';
import { read } from '$app/server';
import YAML from 'yaml';

export const load = (async () => {
	const resume = await read('/content/pages/resume.yaml').text();
	const resumeData = YAML.parse(resume);
	return { resume: resumeData };
}) satisfies PageServerLoad;
