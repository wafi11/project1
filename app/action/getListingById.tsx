import prisma from "@/app/api/lib/prismaDb";

interface IParams {
  listingsId?: string;
}

export default async function getListingById(params: IParams) {
  try {
    const { listingsId } = params;

    const listing = await prisma.listing.findUnique({
      where: {
        id: listingsId,
      },
      include: {
        user: true,
      },
    });

    if (!listing) {
      return null;
    }

    return {
      ...listing,
      createdAt: listing.createdAt.toString(),
      user: {
        ...listing.user,
        createdAt: listing.user.createdAt.toString(),
        updatedAt: listing.user.updatedAt.toString(),
        emailVerified: listing.user.emailVerified?.toString() || null,
      },
    };
  } catch (error: any) {
    throw new Error(error);
  }
}
