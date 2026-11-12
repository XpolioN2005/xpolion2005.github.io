/**
 * Skills for the homepage Skills tab.
 *
 * Every skill uses an online SVG icon.
 *
 * Icons can come from:
 * - Devicon CDN: devicon("python")
 * - Simple Icons CDN: simpleIcon("rust", "DEA584")
 *
 * Simple Icons are monochrome by default, so a brand color can be
 * supplied when the default icon would be too dark for the UI.
 */

export type SkillItem =
	| string
	| {
			name: string;
			icon?: string;
	  };

export type SkillGroup = {
	category: string;
	items: SkillItem[];
};

/**
 * Devicon icon URL.
 *
 * Example:
 * devicon("python")
 * -> https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg
 *
 * Devicon's original SVG variants are generally already colored.
 */
const devicon = (name: string, variant = "original") =>
	`https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${name}/${name}-${variant}.svg`;

/**
 * Simple Icons CDN URL.
 *
 * Simple Icons are monochrome by default.
 *
 * Pass a color when the icon needs to be visible against a dark
 * background or when the official brand color is preferred.
 *
 * Example:
 * simpleIcon("rust", "DEA584")
 * -> Rust's orange logo
 */
const simpleIcon = (name: string, color?: string) =>
	color
		? `https://cdn.simpleicons.org/${name}/${color}`
		: `https://cdn.simpleicons.org/${name}`;

/**
 * Skills displayed on the homepage.
 */
export const skillGroups: SkillGroup[] = [
	/**
	 * Game development engines, frameworks, and tools.
	 */
	{
		category: "Game Development",
		items: [
			{
				name: "Godot",
				icon: devicon("godot"),
			},
			{
				name: "Unity",
				icon: devicon("unity"),
			},
			{
				name: "Pygame",
				icon: "https://www.pygame.org/docs/_static/pygame_logo.svg",
			},
			{
				name: "GDevelop 5",
				icon: "https://cdn.brandfetch.io/idBXYtaGPD/w/400/h/400/theme/dark/icon.jpeg?c=1dxbfHSJFAPEGdCLU4o5B",
			},
		],
	},

	/**
	 * Programming languages used across game development,
	 * software development, graphics, and web development.
	 */
	{
		category: "Programming Languages",
		items: [
			{
				name: "C",
				icon: devicon("c"),
			},
			{
				name: "C++",
				icon: devicon("cplusplus"),
			},
			{
				name: "C#",
				icon: devicon("csharp"),
			},
			{
				name: "Python",
				icon: devicon("python"),
			},
			{
				name: "GDScript",
				icon: simpleIcon("godotengine", "7b32a8"),
			},
			{
				name: "Rust",
				icon: simpleIcon("rust", "DEA584"),
			},
			{
				name: "Java",
				icon: devicon("java"),
			},
			{
				name: "Lua",
				icon: devicon("lua"),
			},
			{
				name: "JavaScript",
				icon: devicon("javascript"),
			},
		],
	},

	/**
	 * Graphics APIs and shader languages.
	 *
	 * GLSL and HLSL do not have universally standardized standalone
	 * logos, so recognizable ecosystem icons are used instead.
	 */
	{
		category: "Graphics & Rendering",
		items: [
			{
				name: "OpenGL",
				icon: devicon("opengl"),
			},
			{
				name: "GLSL",
				icon: simpleIcon("opengl", "5586A4"),
			},
			{
				name: "GDShader",
				icon: simpleIcon("godotengine", "32a87f"),
			},
		],
	},

	/**
	 * Machine learning, numerical computing, data analysis,
	 * and computer vision tools.
	 */
	{
		category: "Machine Learning & Data Science",
		items: [
			{
				name: "scikit-learn",
				icon: devicon("scikitlearn"),
			},
			{
				name: "OpenCV",
				icon: devicon("opencv"),
			},
			{
				name: "NumPy",
				icon: devicon("numpy"),
			},
			{
				name: "Pandas",
				icon: simpleIcon("pandas", "5973de"),
			},
			{
				name: "Matplotlib",
				icon: devicon("matplotlib"),
			},
		],
	},

	/**
	 * Web frameworks and cross-platform application technologies.
	 */
	{
		category: "Web & App Development",
		items: [
			{
				name: "React",
				icon: devicon("react"),
			},
			{
				name: "Svelte",
				icon: simpleIcon("svelte", "FF3E00"),
			},
			{
				name: "Astro",
				icon: simpleIcon("astro"),
			},
			{
				name: "Flutter",
				icon: devicon("flutter"),
			},
		],
	},

	/**
	 * 3D creation and digital content tools.
	 */
	{
		category: "3D & Digital Content",
		items: [
			{
				name: "Blender",
				icon: simpleIcon("blender", "E87D0D"),
			},
		],
	},

	/**
	 * Development, version control, and source-code management tools.
	 */
	{
		category: "Developer Tools",
		items: [
			{
				name: "Git",
				icon: devicon("git"),
			},
			{
				name: "GitHub",
				icon: simpleIcon("github", "FFFFFF"),
			},
			{
				name: "VS Code",
				icon: devicon("vscode"),
			},
		],
	},
];
