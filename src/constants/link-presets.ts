import { LinkPreset, type NavBarLink } from "@/types/config";

export const LinkPresets: { [key in LinkPreset]: NavBarLink } = {
	[LinkPreset.Home]: {
		name: "主页",
		url: "/",
	},
	[LinkPreset.Archive]: {
		name: "归档",
		url: "/archive/",
	},
	[LinkPreset.Friends]: {
		name: "友链",
		url: "/friends/",
	},
	[LinkPreset.Sponsors]: {
		name: "赞助",
		url: "/sponsors/",
	},
};
