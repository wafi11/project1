import getCurrentUser from "@/app/action/getCurrentUser";
import getListings, { ListingParams } from "@/app/action/getListings";
import React from "react";
import ListingCard from "./[listingId]/main/ListingCard";
import Container from "./[listingId]/main/utils/Container";
import ClientOnly from "@/components/ClientOnly";

interface HomeProps {
  searchParams: ListingParams;
}

const Home = async ({ searchParams }: { searchParams: ListingParams }) => {
  const currentUser = await getCurrentUser();
  const listing = await getListings(searchParams);
  return (
    <ClientOnly>
      <Container>
        <div
          className="pt-24 
        grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3
        lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8">
          {listing?.map((list: any) => {
            return (
              <ListingCard
                currentUser={currentUser}
                key={list.id}
                data={list}
              />
            );
          })}
        </div>
      </Container>
    </ClientOnly>
  );
};

export default Home;
