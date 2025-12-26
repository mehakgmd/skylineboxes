
import { FaBoxOpen, FaIndustry, FaBook, FaQuestionCircle, FaBlog, FaLeaf, FaPalette, FaUtensils, FaShoppingBag, FaMobileAlt, FaTshirt } from "react-icons/fa";
import { IconType } from "react-icons";

export interface NavbarItemType {
  label: string;
  href: string;
  isDropDown: boolean;
  icon: IconType; 
  dropDownData?: Array<{
    label: string;
    href: string;
    isDropDown: boolean;
    icon: IconType; 
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
