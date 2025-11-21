import type { PageServerLoad } from './$types';
import YAML from 'yaml';
import internship from '$lib/pages/internship.yaml?raw';

type internship = {
	title: string;
	sections: {
		title: string;
		subtitle: string;
		writeup?: string;
		list: {
			title: string;
			description: string[];
		}[];
	}[];
};

export const load = (async () => {
	const internshipData = YAML.parse(internship);
	return { internship: internshipData };
}) satisfies PageServerLoad;
