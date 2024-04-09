import getCurrentUser from "@/app/action/getCurrentUser";
import Listing from "@/app/listing/page";
import { NextResponse } from "next/server";

interface Iparmas {
  reservationId?: string;
}

export async function DELETE(
  request: Request,
  { params }: { params: Iparmas }
) {
  try {
    const currentUser = await getCurrentUser();

    if (!currentUser) {
      return NextResponse.error();
    }

    const { reservationId } = params;
    if (!reservationId || typeof reservationId !== "string") {
      throw new Error("invalid Id");
    }

    const reservation = await prisma?.listing.deleteMany({
      where: {
        id: currentUser.id,
      },
    });
    return NextResponse.json(reservation);
  } catch (err) {
    console.log(err);
  }
}
