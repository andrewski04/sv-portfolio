import type { PageServerLoad } from './$types';
import YAML from 'yaml';
import resume from '$lib/pages/resume.yaml?raw';

export const load = (async () => {
	const resumeData = YAML.parse(resume);
	return { resume: resumeData };
}) satisfies PageServerLoad;
