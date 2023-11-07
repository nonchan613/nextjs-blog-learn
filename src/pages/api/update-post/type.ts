import type { NextApiRequest } from "next";

export interface data {
	name: string;
	email: string;
}

export interface UpdatePostNextApiRequest extends NextApiRequest {
	body: {
		email: string;
		name: string;
	};
}
