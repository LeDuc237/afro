// Centralized product data with enhanced structure
export interface Product {
  id: string
  name: string
  color: string
  colorCode: string
  length: string
  price: number
  originalPrice?: number
  rating: number
  reviews: number
  image: string
  images: string[]
  inStock: boolean
  popular?: boolean
  description: string
  weight: string
  texture: string
  features: string[]
  category: string
}

// Reorder: 2 Natural Black first, then other colors, then remaining Natural Black at the end
export const afroKinkyProducts: Product[] = [
  // FIRST: 2 Natural Black Products - 14"
  {
    id: "afro-kinky-natural-black-14",
    name: 'Natural Black Afro Kinky Bulk Hair - 14"',
    color: "Natural Black",
    colorCode: "#1B1B1B",
    length: '14"',
    price: 35,
    originalPrice: 55,
    rating: 4.9,
    reviews: 234,
    image: "/IMG-20250629-WA0185.jpg",
    images: ["/IMG-20250629-WA0183.jpg", "/IMG-20250629-WA0185.jpg", "/IMG-20250629-WA0168.jpg"],
    inStock: true,
    popular: true,
    description:
      "Premium quality natural black afro kinky bulk hair perfect for braiding and protective styling. Made from 100% human hair with natural texture that blends seamlessly with your natural hair.",
    weight: "50g",
    texture: "Afro Kinky",
    category: "afro-kinky-bulk",
    features: [
      "100% Premium Human Hair",
      "Natural Afro Kinky Texture",
      "Perfect for Braiding & Dreadlocks",
      "Heat Resistant up to 350°F",
      "Chemical Free Processing",
      "Long Lasting Durability",
      "Tangle Free",
      "Natural Movement",
    ],
  },
  // SECOND: Natural Black 22"
  {
    id: "afro-kinky-natural-black-22",
    name: 'Natural Black Afro Kinky Bulk Hair - 22"',
    color: "Natural Black",
    colorCode: "#1B1B1B",
    length: '22"',
    price: 60,
    originalPrice: 85,
    rating: 4.8,
    reviews: 98,
    image: "/IMG-20250629-WA0197.jpg",
    images: ["/IMG-20250629-WA0197.jpg", "/IMG-20250702-WA0002.jpg", "/IMG-20250702-WA0006.jpg"],
    inStock: true,
    description:
      "Premium quality natural black afro kinky bulk hair perfect for braiding and protective styling. Made from 100% human hair with natural texture that blends seamlessly with your natural hair.",
    weight: "50g",
    texture: "Afro Kinky",
    category: "afro-kinky-bulk",
    features: [
      "100% Premium Human Hair",
      "Natural Afro Kinky Texture",
      "Perfect for Braiding & Dreadlocks",
      "Heat Resistant up to 350°F",
      "Chemical Free Processing",
      "Long Lasting Durability",
      "Tangle Free",
      "Natural Movement",
    ],
  },

  // THEN: Dark Brown Products
  {
    id: "afro-kinky-dark-brown-14",
    name: 'Dark Brown Afro Kinky Bulk Hair - 14"',
    color: "Dark Brown",
    colorCode: "#3C2415",
    length: '14"',
    price: 35,
    originalPrice: 55,
    rating: 4.8,
    reviews: 167,
    image: "/afro_kinky_bulk_human_hair_auburn_black_mix_for_dreadlocks.jpg",
    images: ["/afro_kinky_bulk_human_hair_auburn_black_mix_for_dreadlocks.jpg", "/afro_kinky_hair_extensions_two_color_4c_protective_hairstyle_114x144_crop_center.webp", "/realistic_afro_kinky_bulk_hair_for_locs_and_twists_styles_114x144_crop_center.webp"],
    inStock: true,
    popular: true,
    description:
      "Premium quality dark brown afro kinky bulk hair perfect for braiding and protective styling. Made from 100% human hair with rich brown color that complements various skin tones.",
    weight: "50g",
    texture: "Afro Kinky",
    category: "afro-kinky-bulk",
    features: [
      "100% Premium Human Hair",
      "Rich Dark Brown Color",
      "Perfect for Braiding & Dreadlocks",
      "Heat Resistant up to 350°F",
      "Chemical Free Processing",
      "Long Lasting Durability",
      "Tangle Free",
      "Natural Movement",
    ],
  },
  {
    id: "afro-kinky-dark-brown-16",
    name: 'Medium Brown Afro Kinky Bulk Hair - 18"',
    color: "Medium Brown",
    colorCode: "#8B4513",
    length: '18"',
    price: 50,
    originalPrice: 70,
    rating: 4.7,
    reviews: 134,
    image: "/IMG-20250629-WA0189.jpg",
    images: ["/IMG-20250629-WA0189.jpg", "/IMG-20250629-WA0193.jpg", "/afro_kinky_bulk_human_hair_braiding_mix_for_4c_textured_hair.webp"],
    inStock: true,
    description:
      "Premium quality dark brown afro kinky bulk hair perfect for braiding and protective styling. Made from 100% human hair with rich brown color that complements various skin tones.",
    weight: "50g",
    texture: "Afro Kinky",
    category: "afro-kinky-bulk",
    features: [
      "100% Premium Human Hair",
      "Rich Dark Brown Color",
      "Perfect for Braiding & Dreadlocks",
      "Heat Resistant up to 350°F",
      "Chemical Free Processing",
      "Long Lasting Durability",
      "Tangle Free",
      "Natural Movement",
    ],
  },
  {
    id: "afro-kinky-dark-brown-18",
    name: 'akhba Dark Brown Afro kinky Bulk Hair Extensions For Braiding Dreadlock Human Hair- 18"',
    color: "Dark Brown",
    colorCode: "#3C2415",
    length: '18"',
    price: 50,
    originalPrice: 70,
    rating: 4.6,
    reviews: 112,
    image: "/styles.webp",
    images: [ "/soft-afro-kinky-bulk-for-natural-twists-and-locs.jpg", "/styles.webp", "/natural_texture_afro_kinky_hair_extensions_for_braiding_black_women_114x144_crop_center.webp"],
    inStock: true,
    description:
      "Premium quality dark brown afro kinky bulk hair perfect for braiding and protective styling. Made from 100% human hair with rich brown color that complements various skin tones.",
    weight: "50g",
    texture: "Afro Kinky",
    category: "afro-kinky-bulk",
    features: [
      "100% Premium Human Hair",
      "Rich Dark Brown Color",
      "Perfect for Braiding & Dreadlocks",
      "Heat Resistant up to 350°F",
      "Chemical Free Processing",
      "Long Lasting Durability",
      "Tangle Free",
      "Natural Movement",
    ],
  },
  {
    id: "afro-kinky-medium-brown-18",
    name: 'Medium Brown Afro Kinky Bulk Hair - 18"',
    color: "Medium Brown",
    colorCode: "#8B4513",
    length: '18"',
    price: 50,
    originalPrice: 75,
    rating: 4.7,
    reviews: 145,
    image: "/rich_dark_brown_afro_kinky_bulk_for_4c_hair_and_loc_styles.webp",
    images: [
      "/rich_dark_brown_afro_kinky_bulk_for_4c_hair_and_loc_styles.webp",
      "/afro_kinky_bulk_extensions_suited_for_black_women_with_dreadlocks.jpg",
      "/tri-color_afro_kinky_bulk_human_hair_for_braiding_and_locs_114x144_crop_center.webp",
    ],
    inStock: true,
    description:
      "Premium quality medium brown afro kinky bulk hair perfect for braiding and protective styling. Made from 100% human hair with warm brown tones that enhance natural beauty.",
    weight: "50g",
    texture: "Afro Kinky",
    category: "afro-kinky-bulk",
    features: [
      "100% Premium Human Hair",
      "Warm Medium Brown Color",
      "Perfect for Braiding & Dreadlocks",
      "Heat Resistant up to 350°F",
      "Chemical Free Processing",
      "Long Lasting Durability",
      "Tangle Free",
      "Natural Movement",
    ],
  },
  {
    id: "afro-kinky-dark-brown-20",
    name: 'akhba Dark Brown Afro kinky Bulk Hair Extensions For Braiding Dreadlock Human Hair- 20"',
    color: "Dark Brown",
    colorCode: "#3C2415",
    length: '20"',
    price: 55,
    originalPrice: 75,
    rating: 4.6,
    reviews: 106,
    image: "/dark_brown_afro_kinky_bulk_human_hair_for_dreadlocks_black_women.webp",
    images: ["/soft_afro_kinky_bulk_hair_extensions_for_4c_protective_styles.webp", "/dark_brown_afro_kinky_bulk_human_hair_for_dreadlocks_black_women.webp", "/afro_kinky_bulk_human_hair_for_dreadlocks_and_twists_in_deep_brown_114x144_crop_center.webp", "/dark_brown_afro_kinky_bulk_hair_perfect_for_protective_hairstyles_114x144_crop_center.webp"],
    inStock: true,
    description:
      "Premium quality dark brown afro kinky bulk hair perfect for braiding and protective styling. Made from 100% human hair with rich brown color that complements various skin tones.",
    weight: "50g",
    texture: "Afro Kinky",
    category: "afro-kinky-bulk",
    features: [
      "100% Premium Human Hair",
      "Rich Dark Brown Color",
      "Perfect for Braiding & Dreadlocks",
      "Heat Resistant up to 350°F",
      "Chemical Free Processing",
      "Long Lasting Durability",
      "Tangle Free",
      "Natural Movement",
    ],
  },


  // THEN: Medium Brown Products
  {
    id: "afro-kinky-medium-brown-14",
    name: 'Medium Brown Afro Kinky Bulk Hair - 14"',
    color: "Medium Brown",
    colorCode: "#8B4513",
    length: '14"',
    price: 35,
    originalPrice: 55,
    rating: 4.7,
    reviews: 145,
    image: "/IMG-20250702-WA0001.jpg",
    images: [
      "/IMG-20250702-WA0001.jpg",
      "/highlight_afro_kinky_hair_extensions_for_natural_locs.webp",
      "/afro-kinky-bulk-perfect-for-building-volume-in-locs.webp",
      "/afro-kinky-bulk-perfect-for-building-volume-in-locs.webp",
    ],
    inStock: true,
    description:
      "Premium quality medium brown afro kinky bulk hair perfect for braiding and protective styling. Made from 100% human hair with warm brown tones that enhance natural beauty.",
    weight: "50g",
    texture: "Afro Kinky",
    category: "afro-kinky-bulk",
    features: [
      "100% Premium Human Hair",
      "Warm Medium Brown Color",
      "Perfect for Braiding & Dreadlocks",
      "Heat Resistant up to 350°F",
      "Chemical Free Processing",
      "Long Lasting Durability",
      "Tangle Free",
      "Natural Movement",
    ],
  },
  {
    id: "afro-kinky-medium-brown-16",
    name: 'Medium Brown Afro Kinky Bulk Hair - 16"',
    color: "Medium Brown",
    colorCode: "#8B4513",
    length: '16"',
    price: 45,
    originalPrice: 65,
    rating: 4.6,
    reviews: 89,
    image: "/IMG-20250629-WA0193.jpg",
    images: [
      "/IMG-20250702-WA0006.jpg",
      "/IMG-20250629-WA0193.jpg",
      "/WhatsApp Image 2025-06-29 at 14.09.11_581cec0e.jpg",
    ],
    inStock: true,
    description:
      "Premium quality medium brown afro kinky bulk hair perfect for braiding and protective styling. Made from 100% human hair with warm brown tones that enhance natural beauty.",
    weight: "50g",
    texture: "Afro Kinky",
    category: "afro-kinky-bulk",
    features: [
      "100% Premium Human Hair",
      "Warm Medium Brown Color",
      "Perfect for Braiding & Dreadlocks",
      "Heat Resistant up to 350°F",
      "Chemical Free Processing",
      "Long Lasting Durability",
      "Tangle Free",
      "Natural Movement",
    ],
  },

  // FINALLY: Remaining Natural Black Products (at the end)
  {
    id: "afro-kinky-natural-black-10",
    name: 'Natural Black Afro Kinky Bulk Hair - 10"',
    color: "Natural Black",
    colorCode: "#1B1B1B",
    length: '10"',
    price: 25,
    originalPrice: 40,
    rating: 4.6,
    reviews: 89,
    image: "/IMG-20250629-WA0200.jpg",
    images: ["/IMG-20250629-WA0200.jpg", "/IMG-20250629-WA0197.jpg", "/IMG-20250629-WA0183.jpg"],
    inStock: true,
    description:
      "Premium quality natural black afro kinky bulk hair perfect for braiding and protective styling. Made from 100% human hair with natural texture that blends seamlessly with your natural hair.",
    weight: "50g",
    texture: "Afro Kinky",
    category: "afro-kinky-bulk",
    features: [
      "100% Premium Human Hair",
      "Natural Afro Kinky Texture",
      "Perfect for Braiding & Dreadlocks",
      "Heat Resistant up to 350°F",
      "Chemical Free Processing",
      "Long Lasting Durability",
      "Tangle Free",
      "Natural Movement",
    ],
  },
  {
    id: "afro-kinky-natural-black-12",
    name: 'Natural Black Afro Kinky Bulk Hair - 12"',
    color: "Natural Black",
    colorCode: "#1B1B1B",
    length: '12"',
    price: 30,
    originalPrice: 45,
    rating: 4.7,
    reviews: 112,
    image: "/IMG-20250629-WA0185.jpg",
    images: ["/IMG-20250629-WA0185.jpg", "/IMG-20250629-WA0193.jpg", "/IMG-20250629-WA0180.jpg"],
    inStock: true,
    description:
      "Premium quality natural black afro kinky bulk hair perfect for braiding and protective styling. Made from 100% human hair with natural texture that blends seamlessly with your natural hair.",
    weight: "50g",
    texture: "Afro Kinky",
    category: "afro-kinky-bulk",
    features: [
      "100% Premium Human Hair",
      "Natural Afro Kinky Texture",
      "Perfect for Braiding & Dreadlocks",
      "Heat Resistant up to 350°F",
      "Chemical Free Processing",
      "Long Lasting Durability",
      "Tangle Free",
      "Natural Movement",
    ],
  },
  {
    id: "afro-kinky-natural-black-14-2",
    name: 'Natural Black Afro Kinky Bulk Hair - 14" (Premium)',
    color: "Natural Black",
    colorCode: "#1B1B1B",
    length: '14"',
    price: 35,
    originalPrice: 55,
    rating: 4.8,
    reviews: 189,
    image: "/IMG-20250629-WA0183.jpg",
    images: ["/IMG-20250629-WA0183.jpg", "/IMG-20250629-WA0197.jpg", "/IMG-20250629-WA0200.jpg"],
    inStock: true,
    description:
      "Premium quality natural black afro kinky bulk hair perfect for braiding and protective styling. Made from 100% human hair with natural texture that blends seamlessly with your natural hair.",
    weight: "50g",
    texture: "Afro Kinky",
    category: "afro-kinky-bulk",
    features: [
      "100% Premium Human Hair",
      "Natural Afro Kinky Texture",
      "Perfect for Braiding & Dreadlocks",
      "Heat Resistant up to 350°F",
      "Chemical Free Processing",
      "Long Lasting Durability",
      "Tangle Free",
      "Natural Movement",
    ],
  },
  {
    id: "afro-kinky-natural-black-16",
    name: 'Natural Black Afro Kinky Bulk Hair - 16"',
    color: "Natural Black",
    colorCode: "#1B1B1B",
    length: '16"',
    price: 45,
    originalPrice: 65,
    rating: 4.8,
    reviews: 189,
    image: "/natural-black-spring-twist-brading-hair-for-protective-hairstyle.jpg",
    images: ["/natural-black-spring-twist-brading-hair-for-protective-hairstyle.jpg", 
      "/kinky-4a-3c-spring-twists-perfect-for-black-women.webp", 
      "/soft-spring-twists-human-hair-extensions-for-afro-curls.jpg"],
    inStock: true,
    description:
      "Premium quality natural black afro kinky bulk hair perfect for braiding and protective styling. Made from 100% human hair with natural texture that blends seamlessly with your natural hair.",
    weight: "50g",
    texture: "Afro Kinky",
    category: "afro-kinky-bulk",
    features: [
      "100% Premium Human Hair",
      "Natural Afro Kinky Texture",
      "Perfect for Braiding & Dreadlocks",
      "Heat Resistant up to 350°F",
      "Chemical Free Processing",
      "Long Lasting Durability",
      "Tangle Free",
      "Natural Movement",
    ],
  },
  {
    id: "afro-kinky-natural-black-18",
    name: 'Natural Black Afro Kinky Bulk Hair - 18"',
    color: "Natural Black",
    colorCode: "#1B1B1B",
    length: '18"',
    price: 50,
    originalPrice: 70,
    rating: 4.9,
    reviews: 156,
    image: "/IMG-20250702-WA0001.jpg",
    images: ["/IMG-20250702-WA0001.jpg", "/IMG-20250702-WA0002.jpg", "/IMG-20250702-WA0003.jpg"],
    inStock: true,
    description:
      "Premium quality natural black afro kinky bulk hair perfect for braiding and protective styling. Made from 100% human hair with natural texture that blends seamlessly with your natural hair.",
    weight: "50g",
    texture: "Afro Kinky",
    category: "afro-kinky-bulk",
    features: [
      "100% Premium Human Hair",
      "Natural Afro Kinky Texture",
      "Perfect for Braiding & Dreadlocks",
      "Heat Resistant up to 350°F",
      "Chemical Free Processing",
      "Long Lasting Durability",
      "Tangle Free",
      "Natural Movement",
    ],
  },
  {
    id: "afro-kinky-medium-brown-22",
    name: 'Medium Brown Afro Kinky Bulk Hair - 22"',
    color: "Medium Brown",
    colorCode: "#8B4513",
    length: '22"',
    price: 60,
    originalPrice: 75,
    rating: 4.7,
    reviews: 143,
    image: "/IMG-20250629-WA0193.jpg",
    images: ["/IMG-20250629-WA0193.jpg",
       "/auburn_afro_kinky_hair_extensions_for_4c_hair_textures.jpg",
       "/brown_afro_kinky_bulk_pink_tone_for_unique_dreadlock_styles.webp"],
    inStock: true,
    description:
      "Premium quality natural black afro kinky bulk hair perfect for braiding and protective styling. Made from 100% human hair with natural texture that blends seamlessly with your natural hair.",
    weight: "50g",
    texture: "Afro Kinky",
    category: "afro-kinky-bulk",
    features: [
      "100% Premium Human Hair",
      "Natural Afro Kinky Texture",
      "Perfect for Braiding & Dreadlocks",
      "Heat Resistant up to 350°F",
      "Chemical Free Processing",
      "Long Lasting Durability",
      "Tangle Free",
      "Natural Movement",
    ],
  },
  {
    id: "afro-kinky-natural-others-22-2",
    name: 'Three Mix Colors Afro Kinky Bulk',
    color: "Natural red",
    colorCode: "#0000FF",
    length: '22"',
    price: 60,
    originalPrice: 85,
    rating: 4.7,
    reviews: 76,
    image: "/fluffy-afro-kinky-bulk-for-easy-twist-styling-on-4c-hair.webp",
    images: ["/afro-kinky-bulk-human-hair-that-blends-with-4c-hair.webp", 
      "/fluffy-afro-kinky-bulk-for-easy-twist-styling-on-4c-hair.webp", "/afro-kinky-bulk-hair-for-4c-hair-protective-styling.jpg"],
    inStock: true,
    description:
      "Premium quality natural black afro kinky bulk hair perfect for braiding and protective styling. Made from 100% human hair with natural texture that blends seamlessly with your natural hair.",
    weight: "50g",
    texture: "Afro Kinky",
    category: "afro-kinky-bulk",
    features: [
      "100% Premium Human Hair",
      "Natural Afro Kinky Texture",
      "Perfect for Braiding & Dreadlocks",
      "Heat Resistant up to 350°F",
      "Chemical Free Processing",
      "Long Lasting Durability",
      "Tangle Free",
      "Natural Movement",
    ],
  },
]

// Color options for variants
export const colorOptions = [
  { key: "natural-black", name: "Natural Black", colorCode: "#1B1B1B" },
  { key: "dark-brown", name: "Dark Brown", colorCode: "#3C2415" },
  { key: "medium-brown", name: "Medium Brown", colorCode: "#8B4513" },
]

// Update the pricing structure and product ordering
export const lengthOptions = ['10"', '12"', '14"', '16"', '18"', '20"', '22"']

// Pack options with discounts
export const packOptions = [
  { count: 1, label: "1 Pack", discount: 0, badge: "" },
  { count: 3, label: "3 Packs (Full Head)", discount: 15, badge: "Popular" },
  { count: 5, label: "5 Packs (Recommended)", discount: 30, badge: "Best Value" },
]

// Utility functions
export const getAllProducts = (): Product[] => {
  return afroKinkyProducts
}

export const getProductById = (id: string): Product | undefined => {
  return afroKinkyProducts.find((product) => product.id === id)
}

export const getProductsByColor = (color: string): Product[] => {
  return afroKinkyProducts.filter(
    (product) => product.color.toLowerCase().replace(" ", "-") === color.toLowerCase().replace(" ", "-"),
  )
}

export const getProductsByLength = (length: string): Product[] => {
  return afroKinkyProducts.filter((product) => product.length === length)
}

export const getAvailableColors = () => colorOptions
export const getAvailableLengths = () => lengthOptions
export const getPackOptions = () => packOptions

// Price calculation functions - Updated with your pricing
export const getPriceForLength = (length: string): number => {
  const basePrices: { [key: string]: number } = {
    '10"': 25,
    '12"': 30,
    '14"': 35,
    '16"': 45,
    '18"': 50,
    '20"': 55,
    '22"': 60,
  }
  return basePrices[length] || 35
}

export const getColorMultiplier = (colorKey: string): number => {
  const multipliers: { [key: string]: number } = {
    "natural-black": 1.0,
    "dark-brown": 1.1,
    "medium-brown": 1.15,
  }
  return multipliers[colorKey] || 1.0
}

export const calculateDiscountPercentage = (originalPrice: number, salePrice: number): number => {
  return Math.round(((originalPrice - salePrice) / originalPrice) * 100)
}

export const getSimilarProducts = (currentProduct: Product, limit = 4): Product[] => {
  if (!currentProduct) return []

  const sameColorProducts = afroKinkyProducts.filter(
    (p) => p.color === currentProduct.color && p.id !== currentProduct.id,
  )

  return sameColorProducts.slice(0, limit)
}

// Get products organized by length for better display
export const getProductsByLengthGroup = () => {
  const groups: { [key: string]: Product[] } = {}

  lengthOptions.forEach((length) => {
    groups[length] = afroKinkyProducts.filter((product) => product.length === length)
  })

  return groups
}

// Get the main product for each color (14" as default)
export const getMainProducts = (): Product[] => {
  const mainProducts: Product[] = []

  colorOptions.forEach((color) => {
    const product = afroKinkyProducts.find((p) => p.color === color.name && p.length === '14"')
    if (product) {
      mainProducts.push(product)
    }
  })

  return mainProducts
}
