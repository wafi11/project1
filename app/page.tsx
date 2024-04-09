import Grid from "@/components/Grid";
import Search from "@/components/Search/Search";
import { ImagesSliderDemo } from "@/components/hero";
import Image from "next/image";
import getCurrentUser from "./action/getCurrentUser";

export default function Home() {
  return (
    <div className="bg-slate-200">
      <ImagesSliderDemo />
      <Grid />
      <Search />
    </div>
  );
}
