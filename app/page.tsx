// import HeroSection from "@/components/Hero";
// import PackagingSection from "@/components/PackagingSection";
// import ProductCarousel from "@/components/ProductCarousel";
// import CustomBoxesSection from "@/components/TypesOfBusiness";
// import { responseType } from "@/components/utils/ProductArrayAndTypes";
// import WhyChooseSection from "@/components/WhyChooseUs";
// import Card from "@/components/Card";
// import Image from "next/image";
// import Product from "@/sanity/schemaTypes/Product";

// async function fetchAllProductsData() {
//   let res = await fetch(`https://${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}.api.sanity.io/v2025-12-03/data/query/production2?query=*[_type == "packagingProduct"]`, {
//     next: {
//       revalidate: 60
//     }
//   });

//   if (!res.ok) {
//     throw new Error("Failed to fetch")
//   }

//   return res.json();
// }


// export default async function Home() {
//   let { result }: responseType = await fetchAllProductsData();
//   return (
//  <>
//  {/* <HeroSection/>
//  <PackagingSection/> */}
// {/* <ProductCarousel ProductData={result}/> */}
//  {/* <WhyChooseSection/>

//  <CustomBoxesSection/> */}
// <Card singleProductData={result[0]}/>
//  </>
//   );
// }



import ProductCarousel from '@/components/ProductCarousel'
import { serverClient } from '@/sanity/lib/client'
import { oneProductType } from '@/components/utils/ProductArrayAndTypes'
import HeroSection from '@/components/Hero'
import PackagingSection from "@/components/PackagingSection";
import CustomBoxesSection from "@/components/TypesOfBusiness";
import WhyChooseSection from "@/components/WhyChooseUs";
import Benefits from '@/components/Benefits';
import EcoFriendlySection from '@/components/Order-Processing';
import { InfiniteMovingCardsDemo } from '@/components/Reviews';
import FAQSection from '@/components/FAQs';
const products: oneProductType[] = await serverClient.fetch(
  `*[_type == "packagingProduct"]{
      _id,
      title,
      shortDescription,
      image[]{
        _type,
        _key,
        alt,
        asset->{
          _ref,
          _type,
          url
        }
      }
    }`
)
export default async function Page() {
  return (
    <>
      <HeroSection />
      <ProductCarousel ProductData={products} />
      <PackagingSection />
      <WhyChooseSection />
      <CustomBoxesSection />
      <Benefits />
      <EcoFriendlySection />
      <InfiniteMovingCardsDemo />
      <FAQSection />
    </>

  )
}
