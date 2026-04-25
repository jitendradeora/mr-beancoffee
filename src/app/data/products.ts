import product1 from '../../imports/asegedech-adane-coffee_2.jpg';
import product2 from '../../imports/asegedech-adane-coffee_3.jpg';
import product3 from '../../imports/asegedech-adane-coffee_4.jpg';
import product4 from '../../imports/asegedech-adane-coffee_5.jpg';
import product5 from '../../imports/asegedech-adane-coffee_6.jpg';
import product6 from '../../imports/asegedech-adane-coffee_7.jpg';
import product7 from '../../imports/asegedech-adane-coffee_8.jpg';
import product8 from '../../imports/asegedech-adane-coffee_9.jpg';

export interface Product {
  id: string;
  name: string;
  image: string;
  images: string[];
  description: string;
  price: string;
  origin: string;
  category: string;
  altitude: string;
  process: string;
  variety: string;
  harvestSeason: string;
  cupProfile: string[];
  minOrder: string;
  inStock: boolean;
  featured: boolean;
  details: string;
}

export const products: Product[] = [
  {
    id: 'guji-natural',
    name: 'Guji Natural Green Coffee Beans',
    image: product1,
    images: [product1, product2, product3],
    description: 'Fruity and floral notes with bright acidity.',
    price: '25.00',
    origin: 'Guji, Ethiopia',
    category: 'Single Origin',
    altitude: '1,950 - 2,200 MASL',
    process: 'Natural (Dry)',
    variety: 'Heirloom Arabica',
    harvestSeason: 'November - January',
    cupProfile: ['Fruity', 'Floral', 'Bright Acidity', 'Complex'],
    minOrder: '25kg',
    inStock: true,
    featured: true,
    details: 'Our Guji Natural coffee comes from the renowned Hambella Wamena region, where our family has been cultivating coffee for generations. The natural processing method allows the beans to dry with the fruit intact, creating a complex, fruit-forward flavor profile that coffee enthusiasts worldwide seek out. Grown at high altitude between 1,950 and 2,200 meters above sea level, these beans develop slowly, resulting in dense, flavorful coffee with exceptional body and sweetness.'
  },
  {
    id: 'yirgacheffe',
    name: 'Ethiopian Yirgacheffe Beans',
    image: product2,
    images: [product2, product3, product4],
    description: 'Light body with citrus and tea-like finish.',
    price: '28.00',
    origin: 'Yirgacheffe, Ethiopia',
    category: 'Single Origin',
    altitude: '1,700 - 2,200 MASL',
    process: 'Washed (Wet)',
    variety: 'Heirloom Arabica',
    harvestSeason: 'October - December',
    cupProfile: ['Citrus', 'Tea-like', 'Light Body', 'Delicate'],
    minOrder: '25kg',
    inStock: true,
    featured: true,
    details: 'Yirgacheffe is legendary in the coffee world, known for producing some of the most distinctive and sought-after coffees globally. Our Yirgacheffe beans undergo meticulous washed processing, where the fruit is removed before drying, resulting in a clean, bright cup with exceptional clarity of flavor. The floral aromatics and citrus notes are balanced by a delicate honey sweetness, creating a sophisticated coffee experience that showcases why Ethiopian coffee is revered worldwide.'
  },
  {
    id: 'sidamo-organic',
    name: 'Organic Sidamo Green Coffee',
    image: product3,
    images: [product3, product4, product5],
    description: 'Smooth, balanced flavor with mild sweetness.',
    price: '26.00',
    origin: 'Sidamo, Ethiopia',
    category: 'Single Origin',
    altitude: '1,800 - 2,000 MASL',
    process: 'Washed (Wet)',
    variety: 'Heirloom Arabica',
    harvestSeason: 'November - January',
    cupProfile: ['Smooth', 'Balanced', 'Mild Sweetness', 'Clean'],
    minOrder: '25kg',
    inStock: true,
    featured: true,
    details: 'Our organic Sidamo coffee is certified organic and grown using traditional, sustainable farming methods that have been passed down through generations. The Sidamo region produces coffee with a balanced, complex flavor profile that appeals to a wide range of coffee lovers. The bergamot and stone fruit notes provide brightness and character, while the caramel undertones add depth and sweetness. This coffee represents the perfect balance between traditional cultivation and modern organic certification standards.'
  },
  {
    id: 'bulk-arabica',
    name: 'Premium Bulk Arabica Beans',
    image: product4,
    images: [product4, product5, product6],
    description: 'High-quality export-grade beans for bulk buyers.',
    price: 'Contact for pricing',
    origin: 'Mixed Regions, Ethiopia',
    category: 'Bulk Orders',
    altitude: '1,600 - 2,000 MASL',
    process: 'Mixed (Natural & Washed)',
    variety: 'Heirloom Arabica',
    harvestSeason: 'October - February',
    cupProfile: ['Chocolate', 'Nuts', 'Fruit', 'Balanced'],
    minOrder: '50kg',
    inStock: true,
    featured: true,
    details: 'Designed specifically for commercial roasters and high-volume buyers, our Premium Bulk Arabica offers exceptional value without compromising on quality. This carefully blended selection combines beans from multiple Ethiopian regions, ensuring consistency and a well-rounded flavor profile that works beautifully in various roasting styles. The balanced cup with chocolate and nut notes makes it versatile for espresso blends, drip coffee, and more.'
  },
  {
    id: 'limu-washed',
    name: 'Limu Washed Coffee Beans',
    image: product5,
    images: [product5, product6, product7],
    description: 'Clean and sweet washed coffee from Limu region. Crisp acidity with notes of lemon, green apple, and milk chocolate.',
    price: '12.00',
    origin: 'Limu, Ethiopia',
    category: 'Single Origin',
    altitude: '1,400 - 2,200 MASL',
    process: 'Washed (Wet)',
    variety: 'Heirloom Arabica',
    harvestSeason: 'November - January',
    cupProfile: ['Lemon', 'Green Apple', 'Milk Chocolate', 'Crisp'],
    minOrder: '25kg',
    inStock: true,
    featured: false,
    details: 'Limu coffee is prized for its clean, sweet character and balanced acidity. The washed processing method highlights the intrinsic qualities of the bean, producing a crisp, refreshing cup with bright citrus notes and a smooth chocolate finish. This coffee is perfect for those who appreciate clarity and complexity in their cup.'
  },
  {
    id: 'harrar-natural',
    name: 'Harrar Natural Coffee Beans',
    image: product6,
    images: [product6, product7, product8],
    description: 'Wild, fruity natural processed coffee from the ancient Harrar region. Bold berry notes with a full body and wine-like finish.',
    price: '15.50',
    origin: 'Harrar, Ethiopia',
    category: 'Specialty Beans',
    altitude: '1,500 - 2,100 MASL',
    process: 'Natural (Dry)',
    variety: 'Heirloom Arabica',
    harvestSeason: 'October - December',
    cupProfile: ['Wild Berry', 'Wine', 'Spice', 'Bold'],
    minOrder: '25kg',
    inStock: true,
    featured: false,
    details: 'Harrar is one of Ethiopia\'s most historic coffee-growing regions, producing beans with a distinctive wild, fruity character that sets them apart. The natural processing method intensifies the fruit-forward flavors, creating a bold, complex cup with pronounced berry notes and a wine-like finish. This is a coffee for adventurous palates seeking unique flavor experiences.'
  },
  {
    id: 'specialty-blend',
    name: 'Asegedech Special Blend',
    image: product7,
    images: [product7, product8, product1],
    description: 'Our signature blend combining the best of multiple regions. Rich, smooth, and complex with layers of flavor.',
    price: '11.75',
    origin: 'Multi-Region, Ethiopia',
    category: 'Specialty Beans',
    altitude: '1,700 - 2,100 MASL',
    process: 'Mixed (Natural & Washed)',
    variety: 'Heirloom Arabica',
    harvestSeason: 'Year-round availability',
    cupProfile: ['Rich', 'Smooth', 'Complex', 'Balanced'],
    minOrder: '25kg',
    inStock: true,
    featured: false,
    details: 'Our signature blend is a carefully crafted combination of beans from our family farms across multiple Ethiopian regions. This blend represents our expertise and understanding of coffee, bringing together the best characteristics of different origins to create a harmonious, complex cup that showcases the diversity of Ethiopian coffee.'
  },
  {
    id: 'export-grade',
    name: 'Export Grade Commercial Beans',
    image: product8,
    images: [product8, product1, product2],
    description: 'High-quality commercial grade beans perfect for large-scale operations. Reliable quality and competitive pricing.',
    price: '8.50',
    origin: 'Mixed Regions, Ethiopia',
    category: 'Bulk Orders',
    altitude: '1,400 - 1,900 MASL',
    process: 'Mixed (Natural & Washed)',
    variety: 'Heirloom Arabica',
    harvestSeason: 'Year-round availability',
    cupProfile: ['Chocolate', 'Nutty', 'Smooth', 'Mild'],
    minOrder: '100kg',
    inStock: true,
    featured: false,
    details: 'Our Export Grade Commercial Beans are ideal for large-scale roasting operations, cafes, and distributors seeking reliable quality at competitive prices. While these beans are priced for volume, they still maintain the quality standards that Ethiopian coffee is known for, offering a smooth, approachable cup profile that works well in various applications.'
  }
];

export function getProductById(id: string): Product | undefined {
  return products.find(product => product.id === id);
}

export function getFeaturedProducts(): Product[] {
  return products.filter(product => product.featured);
}

export function getProductsByCategory(category: string): Product[] {
  if (category === 'All Beans') {
    return products;
  }
  return products.filter(product => product.category === category);
}