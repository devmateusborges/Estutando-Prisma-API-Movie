import { Post } from "@prisma/client";
import { prisma } from "../../../../prisma/client";

export class GetPostByDateUseCase {
  async execute(pPage: number, pPerPage: number): Promise<Post[]> {
    const posts = await prisma.post.findMany({
      skip: pPage,
      take: pPerPage,
      orderBy: {
        date_post: "asc",
      },
      include: {
        post_grupo: {
          select: {
            group: {
              select: {
                name_group: true,
                description: true,
              },
            },
          },
        },
      },
    });

    return posts;
  }
}
