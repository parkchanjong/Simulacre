import { prisma } from '../../../../generated/prisma-client';

export default {
  Query: {
    explorePost: async (_, __, { request }) => {
      return prisma.posts({ orderBy: 'createdAt_DESC' });
    },
  },
};
