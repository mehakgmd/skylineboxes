// export interface NavbarItemType {
//     label: string,
//     href: string,
//     isDropDown: boolean,
//     dropDownData?: Array<NavbarItemType>,
// };


// export const NavbarArray: Array<NavbarItemType> = [
//     {
//         label: "Female",
//         href: "/female/Female",
//         isDropDown: true,
//         dropDownData: [
//             {
//                 label: "Dresses",
//                 href: "/female/Dresse",
//                 isDropDown: false,
//             },
//             {
//                 label: "T-Shirts",
//                 href: "/female/T-shirt",
//                 isDropDown: false,
//             },
//             {
//                 label: "Pents",
//                 href: "/female/Pant",
//                 isDropDown: false,
//             },
//             {
//                 label: "Jackets",
//                 href: "/female/Jacket",
//                 isDropDown: false,
//             },
//             {
//                 label: "Sweater",
//                 href: "/female/Sweater",
//                 isDropDown: false,
//             },
//         ]
//     },
//     {
//         label: "Male",
//         href: "/male/Male",
//         isDropDown: true,
//         dropDownData: [
//             {
//                 label: "Sweaters",
//                 href: "/male/Sweater",
//                 isDropDown: false,
//             },
//             {
//                 label: "Jackets",
//                 href: "/male/Jacket",
//                 isDropDown: false,
//             },
//         ]
//     },
//     {
//         label: "Kids",
//         href: "/kid",
//         isDropDown: false,
//     },
//     {
//         label: "All Products",
//         href: "/products",
//         isDropDown: false,
//     },
// ];


import { FaBoxOpen, FaIndustry, FaBook, FaQuestionCircle, FaBlog, FaLeaf, FaPalette, FaUtensils, FaShoppingBag, FaMobileAlt, FaTshirt } from "react-icons/fa";
import { IconType } from "react-icons";

export interface NavbarItemType {
  label: string;
  href: string;
  isDropDown: boolean;
  icon: IconType; // Added icon field
  dropDownData?: Array<{
    label: string;
    href: string;
    isDropDown: boolean;
    icon: IconType; // Dropdown icon
  }>;
}

export const NavbarArray: NavbarItemType[] = [
  {
    label: "Products",
    href: "/products",
    isDropDown: false,
    icon: FaBoxOpen,
  },
  {
    label: "Industries",
    href: "/industries",
    isDropDown: true,
    icon: FaIndustry,
    dropDownData: [
      { label: "CBD Packaging", href: "/industries/cbd", isDropDown: false, icon: FaLeaf },
      { label: "Cosmetic Packaging", href: "/industries/cosmetic", isDropDown: false, icon: FaPalette },
      { label: "Food Packaging", href: "/industries/food", isDropDown: false, icon: FaUtensils },
      { label: "Retail Packaging", href: "/industries/retail", isDropDown: false, icon: FaShoppingBag },
      { label: "Electronics Packaging", href: "/industries/electronics", isDropDown: false, icon: FaMobileAlt },
      { label: "Apparel Packaging", href: "/industries/apparel", isDropDown: false, icon: FaTshirt },
    ]
  },
  {
    label: "Resources",
    href: "/resources",
    isDropDown: true,
    icon: FaBook,
    dropDownData: [
      { label: "Blog", href: "/resources/blog", isDropDown: false, icon: FaBook },
      { label: "Packaging Guides", href: "/resources/guides", isDropDown: false, icon: FaBook },
      { label: "Case Studies", href: "/resources/case-studies", isDropDown: false, icon: FaBook },
      { label: "FAQ", href: "/resources/faq", isDropDown: false, icon: FaQuestionCircle },
    ]
  },
  {
    label: "Blog",
    href: "/blog",
    isDropDown: false,
    icon: FaBlog,
  },
];
