export interface Sponsor {
	name: string;
	avatar?: string;
	date: string;
	amount: string;
}

export interface SponsorsData {
	sponsors: Sponsor[];
}

export interface Friend {
	name: string;
	avatar: string;
	description: string;
	url: string;
}

export interface FriendsData {
	friends: Friend[];
}

