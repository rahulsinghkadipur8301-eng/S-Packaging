import { Product } from '../types';

export const PRODUCTS: Product[] = [
  {
    id: 'prod-1',
    slug: '3-ply-corrugated-box',
    name: '3 Ply Corrugated Box',
    category: 'Corrugated Packaging',
    shortDescription: 'Durable corrugated packaging boxes designed for product protection, storage and transportation.',
    overview:
      'Durable single-wall corrugated packaging boxes designed for product protection, storage and transportation. Available in different sizes and configurations according to customer requirements.',
    primaryImage: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=1000&auto=format&fit=crop',
    galleryImages: [
      'https://images.unsplash.com/photo-1587293852726-70cdb56c2866?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?q=80&w=1000&auto=format&fit=crop'
    ],
    specifications: {
      productType: 'Corrugated Box',
      material: 'Available as per requirement',
      plyConstruction: '3 Ply (Single Wall)',
      application: 'Storage, Product Protection, Dispatch & Transportation',
      customization: 'Available as per requirement',
      packagingRequirements: 'Available as per requirement',
    },
    features: [
      'Lightweight yet sturdy construction for standard handling',
      'Optimized for transit protection and stackability',
      'Custom dimensions manufactured according to order specifications',
      'Suitable for ecommerce, logistics, and retail distribution'
    ],
    recommendedUse: ['Standard shipping', 'Consumer goods packaging', 'Inventory storage']
  },
  {
    id: 'prod-2',
    slug: '7-ply-corrugated-box',
    name: '7 Ply Corrugated Box',
    category: 'Corrugated Packaging',
    shortDescription: 'Heavy-duty multi-layer corrugated boxes engineered for high load-bearing capacity and transit safety.',
    overview:
      'Heavy-duty 7-ply corrugated packaging boxes designed for demanding industrial transport, heavy equipment, and bulk goods that require reinforced structural rigidity.',
    primaryImage: 'https://images.unsplash.com/photo-1530587191325-3db32d826c18?q=80&w=1000&auto=format&fit=crop',
    galleryImages: [
      'https://images.unsplash.com/photo-1586528116493-a029325540fa?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1580674285054-bed31e145f59?q=80&w=1000&auto=format&fit=crop'
    ],
    specifications: {
      productType: 'Heavy Duty Corrugated Box',
      material: 'Available as per requirement',
      plyConstruction: '7 Ply (Triple Wall)',
      application: 'Heavy Goods, Machinery Parts, Export Transport & Bulk Storage',
      customization: 'Available as per requirement',
      packagingRequirements: 'Available as per requirement',
    },
    features: [
      'High resistance against vertical compression and impact',
      'Reinforced multi-wall design for heavy payloads',
      'Engineered for long-distance transport and warehouse stacking',
      'Custom dimensions based on payload dimensions'
    ],
    recommendedUse: ['Industrial components', 'Automotive parts', 'Heavy hardware']
  },
  {
    id: 'prod-3',
    slug: 'printed-gift-box',
    name: 'Printed Gift Box',
    category: 'Specialized Packaging',
    shortDescription: 'Finely constructed printed presentation boxes tailored for gifting, festive hampers, and promotional goods.',
    overview:
      'Premium printed gift packaging boxes designed to elevate product presentation. Built with precision finishing to protect contents while enhancing brand appeal.',
    primaryImage: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?q=80&w=1000&auto=format&fit=crop',
    galleryImages: [
      'https://images.unsplash.com/photo-1513201099705-a9746e1e201f?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1512909006721-3d6018887383?q=80&w=1000&auto=format&fit=crop'
    ],
    specifications: {
      productType: 'Rigid / Foldable Gift Box',
      material: 'Available as per requirement',
      plyConstruction: 'Available as per requirement',
      application: 'Gift Presentation, Festive Hampers, Premium Merchandising',
      customization: 'Available as per requirement',
      packagingRequirements: 'Available as per requirement',
    },
    features: [
      'Clean surface finish suited for custom brand artwork',
      'Firm structure ensuring contents remain safely nestled',
      'Available in diverse closure styles and lid arrangements',
      'Custom sizing tailored to product sets'
    ],
    recommendedUse: ['Corporate gifting', 'Festive packaging', 'Retail showcases']
  },
  {
    id: 'prod-4',
    slug: 'electronics-flat-boxes',
    name: 'Electronics Flat Boxes',
    category: 'Specialized Packaging',
    shortDescription: 'Slim-profile protective packaging boxes designed for electronic gadgets, PCBs, accessories, and flatware.',
    overview:
      'Engineered for compact consumer electronics and delicate components, offering snug containment and edge protection during transit and storage.',
    primaryImage: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?q=80&w=1000&auto=format&fit=crop',
    galleryImages: [
      'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1000&auto=format&fit=crop'
    ],
    specifications: {
      productType: 'Flat Electronic Packaging Box',
      material: 'Available as per requirement',
      plyConstruction: 'Available as per requirement',
      application: 'Consumer Electronics, Flat Accessories, Hardware Components',
      customization: 'Available as per requirement',
      packagingRequirements: 'Available as per requirement',
    },
    features: [
      'Slim dimensional form factor minimizing shipping volume',
      'Reinforced folding tabs for tight locking closure',
      'Can accommodate anti-static inserts and foam cushioning',
      'Clean exterior for part number labeling and branding'
    ],
    recommendedUse: ['Mobile accessories', 'Smart home devices', 'Circuit assemblies']
  },
  {
    id: 'prod-5',
    slug: 'long-packaging-box',
    name: 'Long Packaging Box',
    category: 'Specialized Packaging',
    shortDescription: 'Extended-length corrugated packaging boxes built for elongated items, profiles, tubes, and roll-ups.',
    overview:
      'Long-format corrugated packaging designed to safeguard extended products against bending, dropping, and transit abrasion.',
    primaryImage: 'https://images.unsplash.com/photo-1584824486509-112e4181ff6b?q=80&w=1000&auto=format&fit=crop',
    galleryImages: [
      'https://images.unsplash.com/photo-1568667256549-094345857637?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1585776245991-cf89dd7fc73a?q=80&w=1000&auto=format&fit=crop'
    ],
    specifications: {
      productType: 'Elongated Packaging Box',
      material: 'Available as per requirement',
      plyConstruction: 'Available as per requirement',
      application: 'Lighting Fixtures, Hardware Rods, Extrusions & Rolled Media',
      customization: 'Available as per requirement',
      packagingRequirements: 'Available as per requirement',
    },
    features: [
      'Extended horizontal geometry with reinforced longitudinal scores',
      'End-loading or top-opening configurations',
      'Resistant to axial flexing under load',
      'Manufactured to custom dimensions according to item length'
    ],
    recommendedUse: ['Industrial tubing', 'Window blinds/fixtures', 'Automotive trims']
  },
  {
    id: 'prod-6',
    slug: 'fruit-and-vegetable-packaging-boxes',
    name: 'Fruit & Vegetable Packaging Boxes',
    category: 'Food Packaging',
    shortDescription: 'Ventilated, moisture-tolerant corrugated boxes crafted for bulk horticulture transport and farm produce.',
    overview:
      'Agricultural corrugated packaging manufactured to facilitate air circulation, protect fresh produce against bruising, and maintain stability in cold chains.',
    primaryImage: 'https://images.unsplash.com/photo-1610832958506-aa56368176cf?q=80&w=1000&auto=format&fit=crop',
    galleryImages: [
      'https://images.unsplash.com/photo-1590779033100-9f60a05a013d?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1540420773420-3366772f4999?q=80&w=1000&auto=format&fit=crop'
    ],
    specifications: {
      productType: 'Produce Corrugated Box',
      material: 'Available as per requirement',
      plyConstruction: 'Available as per requirement',
      application: 'Farms, Mandis, Wholesale Produce & Cold Chain Storage',
      customization: 'Available as per requirement',
      packagingRequirements: 'Available as per requirement',
    },
    features: [
      'Punch holes available for optimized aeration and humidity control',
      'Interlocking stackable design for refrigerated transit',
      'Protective interior surface reducing skin abrasion on produce',
      'Configurable dimensions based on harvest basket weights'
    ],
    recommendedUse: ['Wholesale greens', 'Orchard fruits', 'Root crops']
  },
  {
    id: 'prod-7',
    slug: 'fruit-packaging-box',
    name: 'Fruit Packaging Box',
    category: 'Food Packaging',
    shortDescription: 'Sturdy packaging boxes designed for handling, sorting, and delivering delicate fresh fruits safely.',
    overview:
      'Customized fruit packaging boxes engineered to guard fresh harvests against transit compression, impact, and moisture during regional distribution.',
    primaryImage: 'https://images.unsplash.com/photo-1577705998148-6da4f3963bc8?q=80&w=1000&auto=format&fit=crop',
    galleryImages: [
      'https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1519996529931-28324d5a630e?q=80&w=1000&auto=format&fit=crop'
    ],
    specifications: {
      productType: 'Fruit Transport Box',
      material: 'Available as per requirement',
      plyConstruction: 'Available as per requirement',
      application: 'Fruit Packing, Distribution, Retail Supply',
      customization: 'Available as per requirement',
      packagingRequirements: 'Available as per requirement',
    },
    features: [
      'Resilient corner strength for multi-tier stacking',
      'Easy-grip hand holes available upon request',
      'Maintains box integrity under varied temperature conditions',
      'Customizable print for grower and batch identification'
    ],
    recommendedUse: ['Apples', 'Citrus fruits', 'Pears and stone fruits']
  },
  {
    id: 'prod-8',
    slug: 'kraft-printed-corrugated-boxes',
    name: 'Kraft Printed Corrugated Boxes',
    category: 'Printed Packaging',
    shortDescription: 'Classic brown kraft corrugated boxes imprinted with clean corporate logos, instructions, and handling marks.',
    overview:
      'Combines the rugged natural aesthetic of virgin kraft board with crisp printed typography. An economical, professional packaging standard for modern B2B businesses.',
    primaryImage: 'https://images.unsplash.com/photo-1607344645866-009c320b5ab8?q=80&w=1000&auto=format&fit=crop',
    galleryImages: [
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=1000&auto=format&fit=crop'
    ],
    specifications: {
      productType: 'Printed Kraft Corrugated Box',
      material: 'Kraft Paperboard / Corrugated Liner',
      plyConstruction: 'Available as per requirement',
      application: 'Ecommerce Shipments, Warehousing, Industrial Distribution',
      customization: 'Available as per requirement',
      packagingRequirements: 'Available as per requirement',
    },
    features: [
      'High tear resistance and natural fiber durability',
      'High-contrast printing for barcodes, logos, and handling symbols',
      '100% recyclable and sustainably positioned',
      'Flexible configurations for RSC or die-cut cartons'
    ],
    recommendedUse: ['Direct-to-consumer goods', 'Supply chain dispatch', 'Contract manufacturing']
  },
  {
    id: 'prod-9',
    slug: 'plain-packaging-boxes',
    name: 'Plain Packaging Boxes',
    category: 'Corrugated Packaging',
    shortDescription: 'Unprinted, practical utility corrugated boxes for versatile industrial storage, shipping, and bulk repacking.',
    overview:
      'Cost-efficient plain boxes built for straightforward industrial packaging needs. Designed with reliable structural integrity without unneeded frills.',
    primaryImage: 'https://images.unsplash.com/photo-1563178406-4cdc2923acbc?q=80&w=1000&auto=format&fit=crop',
    galleryImages: [
      'https://images.unsplash.com/photo-1532635241-17e820acc59f?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1000&auto=format&fit=crop'
    ],
    specifications: {
      productType: 'Plain Industrial Box',
      material: 'Available as per requirement',
      plyConstruction: 'Available as per requirement',
      application: 'General Packing, Buffer Stock Storage, Secondary Packaging',
      customization: 'Available as per requirement',
      packagingRequirements: 'Available as per requirement',
    },
    features: [
      'Economical solution for high-volume dispatch operations',
      'Quick assembly and uniform dimensions',
      'Ready for automated or manual taping and strapping',
      'Broad range of standard and bespoke aspect ratios'
    ],
    recommendedUse: ['Warehouse staging', 'Internal part transfers', 'Universal shipping']
  },
  {
    id: 'prod-10',
    slug: 'printed-packaging-box',
    name: 'Printed Packaging Box',
    category: 'Printed Packaging',
    shortDescription: 'Custom-printed packaging boxes engineered to display brand identity and product specifications cleanly.',
    overview:
      'Manufactured to provide both outer structural resilience and eye-catching exterior artwork for shelf presentation and brand distinction.',
    primaryImage: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=1000&auto=format&fit=crop',
    galleryImages: [
      'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?q=80&w=1000&auto=format&fit=crop'
    ],
    specifications: {
      productType: 'Custom Printed Box',
      material: 'Available as per requirement',
      plyConstruction: 'Available as per requirement',
      application: 'Retail Packaging, Consumer Goods, Brand Identity',
      customization: 'Available as per requirement',
      packagingRequirements: 'Available as per requirement',
    },
    features: [
      'Sharply registered multi-color printing capabilities',
      'Uniform color reproduction across large order batches',
      'Protective varnish or laminate options according to need',
      'Enhances unboxing appeal and retail brand value'
    ],
    recommendedUse: ['Apparel packaging', 'Household electronics', 'Specialty goods']
  },
  {
    id: 'prod-11',
    slug: 'printed-corrugated-box',
    name: 'Printed Corrugated Box',
    category: 'Printed Packaging',
    shortDescription: 'Combines corrugated cushioning with high-visibility brand graphics and compliance information.',
    overview:
      'Built for commercial shipments where box graphics communicate brand identity, instructions, and handling warnings while guarding heavy or fragile payloads.',
    primaryImage: 'https://images.unsplash.com/photo-1549924231-f129b911e442?q=80&w=1000&auto=format&fit=crop',
    galleryImages: [
      'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1512485800893-b09ec8679b11?q=80&w=1000&auto=format&fit=crop'
    ],
    specifications: {
      productType: 'Printed Corrugated Shipping Carton',
      material: 'Available as per requirement',
      plyConstruction: 'Available as per requirement',
      application: 'Branded Logistics, Retail Freight, B2B Distribution',
      customization: 'Available as per requirement',
      packagingRequirements: 'Available as per requirement',
    },
    features: [
      'Balanced shock absorption and external print durability',
      'Fade-resistant inks suitable for warehouse storage',
      'Engineered flute structures tailored to weight demands',
      'Complete dimension flexibility for standard pallet layouts'
    ],
    recommendedUse: ['Appliance packaging', 'FMCG transit cartons', 'Wholesale bundles']
  },
  {
    id: 'prod-12',
    slug: 'pastry-printed-box',
    name: 'Pastry Printed Box',
    category: 'Food Packaging',
    shortDescription: 'Attractive printed boxes designed for bakeries, confectioneries, delicate pastries, and sweet treats.',
    overview:
      'Designed to protect delicate crusts, frostings, and confectionery shapes while presenting bakery goods in clean, appetizing branded packaging.',
    primaryImage: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=1000&auto=format&fit=crop',
    galleryImages: [
      'https://images.unsplash.com/photo-1555507036-ab1f4038808a?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1579372786545-d24232daf58c?q=80&w=1000&auto=format&fit=crop'
    ],
    specifications: {
      productType: 'Bakery / Pastry Box',
      material: 'Available as per requirement',
      plyConstruction: 'Available as per requirement',
      application: 'Bakeries, Cafes, Confectionery Retail, Patisseries',
      customization: 'Available as per requirement',
      packagingRequirements: 'Available as per requirement',
    },
    features: [
      'Convenient lock-corner or pop-up assembly for quick counter packing',
      'Grease-resistant barrier options available per requirement',
      'Vibrant printing highlighting bakery identity and flavors',
      'Maintains box rigidity without collapsing on contents'
    ],
    recommendedUse: ['Pastries & croissants', 'Gourmet cookies', 'Dessert takeaways']
  },
  {
    id: 'prod-13',
    slug: 'food-packaging-box',
    name: 'Food Packaging Box',
    category: 'Food Packaging',
    shortDescription: 'Reliable, hygienic packaging boxes tailored for packaged foods, dry snacks, and food processing units.',
    overview:
      'Manufactured to meet the rigorous demands of food distribution, keeping contents fresh, sanitary, and intact during transport and storage.',
    primaryImage: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=1000&auto=format&fit=crop',
    galleryImages: [
      'https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=1000&auto=format&fit=crop'
    ],
    specifications: {
      productType: 'Food Packaging Carton',
      material: 'Available as per requirement',
      plyConstruction: 'Available as per requirement',
      application: 'Food Processing, Dry Goods, Sweets, Ready-to-Eat Items',
      customization: 'Available as per requirement',
      packagingRequirements: 'Available as per requirement',
    },
    features: [
      'Manufactured under clean, disciplined workshop conditions',
      'Sturdy base construction preventing sifting and leaks',
      'Compatible with internal pouch packing and liner trays',
      'Custom printing for nutritional info, batching, and branding'
    ],
    recommendedUse: ['Dry snacks & namkeen', 'Packaged grains & cereals', 'Food gift assortments']
  },
  {
    id: 'prod-14',
    slug: 'packaging-box',
    name: 'Packaging Box',
    category: 'Corrugated Packaging',
    shortDescription: 'General-purpose packaging boxes built with durable corrugated board for multi-industry versatility.',
    overview:
      'An all-round packaging solution offering dependable durability, practical stackability, and customizable options for manufacturing businesses.',
    primaryImage: 'https://images.unsplash.com/photo-1616401784845-180882ba9ba8?q=80&w=1000&auto=format&fit=crop',
    galleryImages: [
      'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?q=80&w=1000&auto=format&fit=crop'
    ],
    specifications: {
      productType: 'Standard Utility Packaging Box',
      material: 'Available as per requirement',
      plyConstruction: 'Available as per requirement',
      application: 'Multi-industry Packaging, Storage, Product Shipping',
      customization: 'Available as per requirement',
      packagingRequirements: 'Available as per requirement',
    },
    features: [
      'Reliable balance between weight, cost, and puncture resistance',
      'Standardized folding flaps for straightforward sealing',
      'Adaptable to varied weight classes and handling routines',
      'Available in small, medium, and large production runs'
    ],
    recommendedUse: ['General manufacturing', 'Commercial dispatch', 'Third-party logistics']
  },
  {
    id: 'prod-15',
    slug: 'liquor-packaging-boxes',
    name: 'Liquor Packaging Boxes',
    category: 'Specialized Packaging',
    shortDescription: 'Reinforced compartmented and single-bottle packaging boxes crafted to protect fragile glass bottles.',
    overview:
      'Heavy-duty corrugated and rigid boxes engineered with impact-absorbing partitions and snug closures to safely transport glass liquor and beverage bottles.',
    primaryImage: 'https://images.unsplash.com/photo-1527061011665-3652c757a4d4?q=80&w=1000&auto=format&fit=crop',
    galleryImages: [
      'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1569919659476-f0852f6834b7?q=80&w=1000&auto=format&fit=crop'
    ],
    specifications: {
      productType: 'Bottle / Beverage Packaging Box',
      material: 'Available as per requirement',
      plyConstruction: 'Available as per requirement',
      application: 'Wine, Spirits, Craft Beverages, Bottle Merchandising',
      customization: 'Available as per requirement',
      packagingRequirements: 'Available as per requirement',
    },
    features: [
      'High vertical crush resistance for stacked bottle cartons',
      'Internal corrugated separator grids available upon request',
      'Cushions against bottle-to-bottle clinking during transit',
      'Premium exterior printing options for brand presentation'
    ],
    recommendedUse: ['Distilleries & wineries', 'Beverage distributors', 'Premium gift bottles']
  },
  {
    id: 'prod-16',
    slug: 'mango-packing-box',
    name: 'Mango Packing Box',
    category: 'Food Packaging',
    shortDescription: 'Specialized agricultural boxes tailored for Alphonso and regional mango harvesting, sorting, and transport.',
    overview:
      'Purpose-built packaging boxes engineered specifically for mangoes, featuring balanced aeration to regulate ripening temperature while cushioning delicate fruit skin.',
    primaryImage: 'https://images.unsplash.com/photo-1553279768-865429fa0078?q=80&w=1000&auto=format&fit=crop',
    galleryImages: [
      'https://images.unsplash.com/photo-1601493700631-2b16ec4b4716?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1591073113125-e46713c829ed?q=80&w=1000&auto=format&fit=crop'
    ],
    specifications: {
      productType: 'Specialized Mango Carton',
      material: 'Available as per requirement',
      plyConstruction: 'Available as per requirement',
      application: 'Mango Orchards, Mandi Trading, Domestic Courier & Gifting',
      customization: 'Available as per requirement',
      packagingRequirements: 'Available as per requirement',
    },
    features: [
      'Aerated vent patterns facilitating natural ethylene and heat exchange',
      'Accommodates paper hay, net sleeves, or partitioned trays',
      'Reinforced edges to endure rigorous seasonal transit',
      'Attractive orchard or grower branding options available'
    ],
    recommendedUse: ['Alphonso mangoes', 'Kesar mangoes', 'Export and domestic packs']
  },
  {
    id: 'prod-17',
    slug: 'cake-box',
    name: 'Cake Box',
    category: 'Food Packaging',
    shortDescription: 'Easy-to-open, rigid paperboard and corrugated cake boxes designed to preserve delicate icing and toppers.',
    overview:
      'Designed with wide-opening flaps and a sturdy base to allow effortless cake insertion and removal without contacting decorative frosting.',
    primaryImage: 'https://images.unsplash.com/photo-1542826438-bd32f43d626f?q=80&w=1000&auto=format&fit=crop',
    galleryImages: [
      'https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1565958011703-44f9829ba187?q=80&w=1000&auto=format&fit=crop'
    ],
    specifications: {
      productType: 'Bakery Cake Box',
      material: 'Available as per requirement',
      plyConstruction: 'Available as per requirement',
      application: 'Custom Cakes, Pastry Shops, Celebration Deliveries',
      customization: 'Available as per requirement',
      packagingRequirements: 'Available as per requirement',
    },
    features: [
      'Firm floor prevents flexing under multi-pound celebration cakes',
      'Front-drop or side-fold panel for smooth sliding retrieval',
      'Optional transparent display windows as per customer requirement',
      'Custom printed with bakery logo, instructions, and handles'
    ],
    recommendedUse: ['Birthday & wedding cakes', 'Celebration bakes', 'Dessert catering']
  }
];

export const CATEGORIES = [
  'All Products',
  'Corrugated Packaging',
  'Printed Packaging',
  'Food Packaging',
  'Specialized Packaging'
] as const;
