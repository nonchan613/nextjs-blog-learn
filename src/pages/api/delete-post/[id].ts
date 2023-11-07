import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

let prisma: PrismaClient | undefined;

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
	if (req.method !== "DELETE") {
		return res.status(405).json({ error: "Method not allowed" });
	}

	const postId = req.query.id;

	if (!postId) {
		return res.status(400).json({ error: "Id is required" });
	}

	try {
		if (!prisma) {
			prisma = new PrismaClient();
		}

		// データを削除
		const deletedPost = await prisma.post.delete({
			where: {
				id: parseInt(postId as string),
			},
		});

		// SQL : DELETE FROM post WHERE id = postId

		if (!deletedPost) {
			return res.status(404).json({ error: "Post not found" });
		}

		res.status(200).json({ message: "Post deleted successfully" });
	} catch (error) {
		console.error("Error during delete post:", error);
		res
			.status(500)
			.json({ error: "An error occurred while deleting the post" });
	} finally {
		await prisma?.$disconnect(); // Prismaクライアントを切断
	}
};

export default handler;
