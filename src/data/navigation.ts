import { CATS_DISCOVER } from "@/components/CardCategories/data";
import { NavItemType } from "@/shared/Navigation/NavigationItem";
import ncNanoId from "@/utils/ncNanoId";

export const MEGAMENU_TEMPLATES: NavItemType[] = [
  {
    id: ncNanoId(),
    href: "/#",
    name: "Home Page",
    children: [
      { id: ncNanoId(), href: "/", name: "Home  1" },
      { id: ncNanoId(), href: "/home-2", name: "Home  2", isNew: true },
      { id: ncNanoId(), href: "/", name: "Header  1" },
      { id: ncNanoId(), href: "/home-2", name: "Header  2", isNew: true },
      { id: ncNanoId(), href: "/", name: "Coming Soon" },
    ],
  },
  {
    id: ncNanoId(),
    href: "/#",
    name: "Shop Pages",
    children: [
      { id: ncNanoId(), href: "/collection", name: "Category Page 1" },
      { id: ncNanoId(), href: "/collection", name: "Category Page 2" },
      { id: ncNanoId(), href: "/product-detail", name: "Product Page 1" },
      { id: ncNanoId(), href: "/cart", name: "Cart Page" },
      { id: ncNanoId(), href: "/checkout", name: "Checkout Page" },
    ],
  },
  {
    id: ncNanoId(),
    href: "/#",
    name: "Other Pages",
    children: [
      { id: ncNanoId(), href: "/checkout", name: "Checkout Page" },
      { id: ncNanoId(), href: "/search", name: "Search Page" },
      { id: ncNanoId(), href: "/cart", name: "Cart Page" },
      { id: ncNanoId(), href: "/account", name: "Accout Page" },
      { id: ncNanoId(), href: "/account-order", name: "Order Page" },
      { id: ncNanoId(), href: "/subscription", name: "Subscription" },
    ],
  },
  {
    id: ncNanoId(),
    href: "/#",
    name: "Blog Page",
    children: [
      { id: ncNanoId(), href: "/blog", name: "Blog Page" },
      { id: ncNanoId(), href: "/blog-single", name: "Blog Single" },
      { id: ncNanoId(), href: "/about", name: "About Page" },
      { id: ncNanoId(), href: "/contact", name: "Contact Page" },
      { id: ncNanoId(), href: "/login", name: "Login" },
      { id: ncNanoId(), href: "/signup", name: "Signup" },
      { id: ncNanoId(), href: "/forgot-pass", name: "Forgot Password" },
    ],
  },
];

export const MEGAMENU_MENS: NavItemType[] = [
  {
    id: ncNanoId(),
    href: "/#",
    name: "Topwear",
    children: [
      { id: ncNanoId(), href: "/", name: "T-Shirts" },
      { id: ncNanoId(), href: "/", name: "Casual Shirts" },
      { id: ncNanoId(), href: "/", name: "Sweatshirts" },
      { id: ncNanoId(), href: "/", name: "Sweaters" },
      { id: ncNanoId(), href: "/", name: "Jackets" },
      { id: ncNanoId(), href: "/", name: "Blazers & Coats" },
      { id: ncNanoId(), href: "/", name: "Suits" },
      { id: ncNanoId(), href: "/", name: "Rain Jacketsn" },
      { id: ncNanoId(), href: "/", name: "Coming Soon" },
    ],
  },

  {
    id: ncNanoId(),
    href: "/#",
    name: "Bottomwear",
    children: [
      { id: ncNanoId(), href: "/", name: "Jeans" },
      { id: ncNanoId(), href: "/", name: "Casual Trousers" },
      { id: ncNanoId(), href: "/", name: "Formal Trousers" },
      { id: ncNanoId(), href: "/", name: "Shorts" },
      { id: ncNanoId(), href: "/", name: "Track Pants & Joggers" },
      { id: ncNanoId(), href: "/", name: "Briefs & Trunks" },
      { id: ncNanoId(), href: "/", name: "Boxers" },
    ],
  },

  {
    id: ncNanoId(),
    href: "/#",
    name: "Footwear",
    children: [
      { id: ncNanoId(), href: "/", name: "Casual Shoes" },
      { id: ncNanoId(), href: "/", name: "Sports Shoes" },
      { id: ncNanoId(), href: "/cart", name: "Formal Shoes" },
      { id: ncNanoId(), href: "/account", name: "Sneakers" },
      { id: ncNanoId(), href: "/account-order", name: "Sandals & Floaters" },
      { id: ncNanoId(), href: "/subscription", name: "Flip Flops" },
    ],
  },

  {
    id: ncNanoId(),
    href: "/#",
    name: "Fashion Accessories",
    children: [
      { id: ncNanoId(), href: "/", name: "Wallets" },
      { id: ncNanoId(), href: "/", name: "Perfumes & Body Mists" },
      { id: ncNanoId(), href: "/", name: "Trimmers" },
      { id: ncNanoId(), href: "/", name: "Deodorants" },
      { id: ncNanoId(), href: "/", name: "Caps & Hats" },
      { id: ncNanoId(), href: "/", name: "Rings & Wristwear" },
      { id: ncNanoId(), href: "/", name: "Accessory Gift Sets" },
    ],
  },
];

export const MEGAMENU_WOMENS: NavItemType[] = [
  {
    id: ncNanoId(),
    href: "/#",
    name: "Topwear",
    children: [
      { id: ncNanoId(), href: "/", name: "Kurtas & Suits" },
      { id: ncNanoId(), href: "/", name: "Kurtis, Tunics & Tops" },
      { id: ncNanoId(), href: "/", name: "Sarees" },
      { id: ncNanoId(), href: "/", name: "Ethnic Wear" },
      { id: ncNanoId(), href: "/", name: "Leggings, Salwars & Churidars" },
      { id: ncNanoId(), href: "/", name: "Skirts & Palazzos" },
      { id: ncNanoId(), href: "/", name: "Suits" },
      { id: ncNanoId(), href: "/", name: "Dress Materials" },
      { id: ncNanoId(), href: "/", name: "Dupattas & Shawls" },
    ],
  },

  {
    id: ncNanoId(),
    href: "/#",
    name: "Bottomwear",
    children: [
      { id: ncNanoId(), href: "/", name: "Jeans" },
      { id: ncNanoId(), href: "/", name: "Casual Trousers" },
      { id: ncNanoId(), href: "/", name: "Formal Trousers" },
      { id: ncNanoId(), href: "/", name: "Shorts" },
      { id: ncNanoId(), href: "/", name: "Track Pants & Joggers" },
      { id: ncNanoId(), href: "/", name: "Briefs & Trunks" },
      { id: ncNanoId(), href: "/", name: "Boxers" },
    ],
  },

  {
    id: ncNanoId(),
    href: "/#",
    name: "Footwear",
    children: [
      { id: ncNanoId(), href: "/", name: "Casual Shoes" },
      { id: ncNanoId(), href: "/", name: "Sports Shoes" },
      { id: ncNanoId(), href: "/cart", name: "Formal Shoes" },
      { id: ncNanoId(), href: "/account", name: "Sneakers" },
      { id: ncNanoId(), href: "/account-order", name: "Sandals & Floaters" },
      { id: ncNanoId(), href: "/subscription", name: "Flip Flops" },
    ],
  },

  {
    id: ncNanoId(),
    href: "/#",
    name: "Fashion Accessories",
    children: [
      { id: ncNanoId(), href: "/", name: "Fashion Jewellery" },
      { id: ncNanoId(), href: "/", name: "Perfumes & Body Mists" },
      { id: ncNanoId(), href: "/", name: "Fine Jewellery" },
      { id: ncNanoId(), href: "/", name: "Deodorants" },
      { id: ncNanoId(), href: "/", name: "Caps & Hats" },
      { id: ncNanoId(), href: "/", name: "Rings & Wristwear" },
      { id: ncNanoId(), href: "/", name: "Earrings" },
    ],
  },
];

const OTHER_PAGE_CHILD: NavItemType[] = [
  {
    id: ncNanoId(),
    href: "/",
    name: "Home Demo 1",
  },
  {
    id: ncNanoId(),
    href: "/home-2",
    name: "Home Demo 2",
  },
  {
    id: ncNanoId(),
    href: "/collection",
    name: "Category Pages",
    type: "dropdown",
    children: [
      {
        id: ncNanoId(),
        href: "/collection",
        name: "Category page 1",
      },
      {
        id: ncNanoId(),
        href: "/collection",
        name: "Category page 2",
      },
    ],
  },
  {
    id: ncNanoId(),
    href: "/product-detail",
    name: "Product Pages",
    type: "dropdown",
    children: [
      {
        id: ncNanoId(),
        href: "/product-detail",
        name: "Product detail 1",
      },
    ],
  },
  {
    id: ncNanoId(),
    href: "/cart",
    name: "Cart Page",
  },
  {
    id: ncNanoId(),
    href: "/checkout",
    name: "Checkout Page",
  },
  {
    id: ncNanoId(),
    href: "/search",
    name: "Search Page",
  },
  {
    id: ncNanoId(),
    href: "/account",
    name: "Account Page",
  },
  {
    id: ncNanoId(),
    href: "/about",
    name: "Other Pages",
    type: "dropdown",
    children: [
      {
        id: ncNanoId(),
        href: "/about",
        name: "About",
      },
      {
        id: ncNanoId(),
        href: "/contact",
        name: "Contact us",
      },
      {
        id: ncNanoId(),
        href: "/login",
        name: "Login",
      },
      {
        id: ncNanoId(),
        href: "/signup",
        name: "Signup",
      },
      {
        id: ncNanoId(),
        href: "/subscription",
        name: "Subscription",
      },
      { id: ncNanoId(), href: "/forgot-pass", name: "Forgot Password" },
    ],
  },
  {
    id: ncNanoId(),
    href: "/blog",
    name: "Blog Page",
    type: "dropdown",
    children: [
      {
        id: ncNanoId(),
        href: "/blog",
        name: "Blog Page",
      },
      {
        id: ncNanoId(),
        href: "/blog-single",
        name: "Blog Single",
      },
    ],
  },
];

export const POSTER_MENS: any = [
  {
    featuredImage: CATS_DISCOVER[0].featuredImage,
    name: CATS_DISCOVER[1].name,
    desc: CATS_DISCOVER[1].desc,
    color: CATS_DISCOVER[1].color,
  },
];

export const POSTER_WOMENS: any = [
  {
    featuredImage: CATS_DISCOVER[3].featuredImage,
    name: CATS_DISCOVER[3].name,
    desc: CATS_DISCOVER[3].desc,
    color: CATS_DISCOVER[3].color,
  },
];

export const NAVIGATION_DEMO_2: NavItemType[] = [
  {
    id: ncNanoId(),
    href: "/collection",
    name: "Men",
    type: "megaMenu",
    children: MEGAMENU_MENS,
    poster: POSTER_MENS,
  },
  {
    id: ncNanoId(),
    href: "/collection",
    name: "Women",
    type: "megaMenu",
    children: MEGAMENU_WOMENS,
    poster: POSTER_WOMENS,
  },
  {
    id: ncNanoId(),
    href: "/collection",
    name: "Beauty",
  },

  {
    id: ncNanoId(),
    href: "/collection",
    name: "Sport",
  },
  {
    id: ncNanoId(),
    href: "/collection",
    name: "Templates",
    type: "megaMenu",
    children: MEGAMENU_TEMPLATES,
  },
  {
    id: ncNanoId(),
    href: "/search",
    name: "Explore",
    type: "dropdown",
    children: OTHER_PAGE_CHILD,
  },
];
