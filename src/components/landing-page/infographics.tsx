import Image from "next/image";
import InfographicImage from "@/assets/images/infographics.png";

export default function Infographics() {
  return (
    <>
      <Image
        src={InfographicImage}
        alt="Infographic"
        className="h-auto object-cover mx-auto"
        width={500}
        height={500}
      />
    </>
  );
}
