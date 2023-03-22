type navLink = {
	name: string;
	href: string;
	src?: string;
};

type socialLink = {
	name: string;
	href: string;
	icon: ComponentType;
};

type Post = {
	postPath: string;
	meta: {
		active: boolean;
		title: string;
		date: string;
		updated: string;
		categories: string[];
		coverImage: string;
		coverWidth: number;
		coverHeight: number;
		excerpt: string;
		preview: string;
		coverPhotoCredited: boolean;
		coverSource: string?;
		coverAuther: string?;
		coverAuthorSource: string?;
	};
};

type Goal = {
	title: string;
	date: string;
	ontrack: boolean;
	completed: boolean;
};
