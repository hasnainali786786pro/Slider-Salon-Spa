import { ServiceItem, GalleryItem, BeforeAfterItem, TestimonialItem, ChooseUsItem } from '../types';

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 's1',
    name: 'Premium Hair Cut',
    category: 'hair',
    price: '1,500',
    duration: '45 mins',
    description: 'Bespoke precision haircut styled by our senior barber to fit your facial structure. Includes hair wash, scalp massage, and luxury hot towel finish.',
    image: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 's2',
    name: 'Beard Sculpting & Styling',
    category: 'beard',
    price: '800',
    duration: '35 mins',
    description: 'Symmetric beard grooming with clipper design, premium beard oil application, razor neck-lining, and hot towel relaxation.',
    image: 'https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 's3',
    name: 'Signature Hair Styling',
    category: 'hair',
    price: '700',
    duration: '20 mins',
    description: 'Pre-styling treatment, blow-drying, and styling using premium masculine clay, pomade, or wax for the perfect look.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTM9GMOKByYdDHe-lijWvLdsus12yn0kLRePUdAl5NmVojLzG9d9ZMV7Nhp&s=10'
  },
  {
    id: 's4',
    name: 'Luxury Hair Color',
    category: 'hair',
    price: '3,500',
    duration: '60 mins',
    description: 'In-demand colors and complete gray coverage using premium ammonia-free organic colors to preserve hair health.',
    image: 'https://thumbs.dreamstime.com/b/men-hair-salon-barber-doing-haircut-barbershop-handsome-male-client-hairdresser-high-resolution-men-hair-salon-barber-doing-121115496.jpg'
  },
  {
    id: 's5',
    name: 'Royal Hot Towel Shave',
    category: 'beard',
    price: '1,000',
    duration: '40 mins',
    description: 'Traditional straight razor wet shave with pre-shave essential oils, rich warm lathering, and post-shave gold mist balm.',
    image: 'https://images.unsplash.com/photo-1517832606299-7ae9b720a186?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 's6',
    name: 'Advanced Hydra Facial',
    category: 'skin',
    price: '5,000',
    duration: '50 mins',
    description: 'Premium multi-step facial utilizing localized high-pressure hydration and serum infusions to deeply clean, exfoliate, and refresh male skin.',
    image: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 's7',
    name: 'Gold Face Cleanup',
    category: 'skin',
    price: '2,000',
    duration: '35 mins',
    description: 'Deep pore cleansing, removal of blackheads, charcoal scrub exfoliation, and a revitalizing gold dust face mask.',
    image: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 's8',
    name: 'Deep-Tissue Massage & Spa',
    category: 'spa',
    price: '4,500',
    duration: '60 mins',
    description: 'Full body deep-tissue muscle release therapy using warm organic stress-relieving oils to eliminate chronic body tension.',
    image: 'https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 's9',
    name: 'Therapeutic Head Massage',
    category: 'spa',
    price: '1,200',
    duration: '30 mins',
    description: 'Soothing massage of the head, scalp, neck, and shoulders using fresh mentholated essential oils to relieve everyday stress.',
    image: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 's10',
    name: 'Brazilian Keratin Treatment',
    category: 'hair',
    price: '6,500',
    duration: '90 mins',
    description: 'Intense keratin protein reconstruction to smooth out frizzy hair, restore lost shine, and provide lasting premium refinement.',
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 's11',
    name: 'Hair Straightening / Rebonding',
    category: 'hair',
    price: '5,500',
    duration: '80 mins',
    description: 'Professional thermal straightening treatment that safely alters hair structure to offer ultra-slick, straight, manageable hair.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRryLJUjTqjbA2yYiRDGTtgIPVL2O6IYYtcuFe3SV4Wcg&s=10'
  },
  {
    id: 's12',
    name: 'Premium Hair Spa Treatment',
    category: 'hair',
    price: '2,500',
    duration: '45 mins',
    description: 'Scalp detoxification, deep conditioning cream therapy, and nourishing steam to target dry, damaged, or thinning hair.',
    image: 'https://images.unsplash.com/photo-1596178065887-1198b6148b2b?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 's13',
    name: 'Acne Defense Skincare',
    category: 'skin',
    price: '2,200',
    duration: '40 mins',
    description: 'Targeted facial treating stubborn skin oils, blackheads, and redness using organic salicylic acid cleanser, tea tree steam, and soothing mud-pack.',
    image: 'https://images.unsplash.com/photo-1515688594390-b649af70d282?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 's14',
    name: 'Groom Imperial Package',
    category: 'package',
    price: '12,000',
    duration: '180 mins',
    description: 'The ultimate wedding or event package. Includes VIP Precision Haircut, Sculpting Beard Waxing, Hydra Facial, Hair Styling, and Head & Shoulder massage.',
    image: 'https://t3.ftcdn.net/jpg/05/06/74/32/360_F_506743235_coW6QAlhxlBWjnRk0VNsHqaXGGH9F4JS.jpg'
  },
  {
    id: 's15',
    name: 'Executive Grooming Express',
    category: 'package',
    price: '3,200',
    duration: '75 mins',
    description: 'Essential combo designed for busy executives: Classic Premium Haircut, Clean Shave or Beard Styling, and deep blackhead cleansing.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=600'
  }
];

// 30+ Premium Curated Gallery Images (High Quality Unsplash references)
export const GALLERY_DATA: GalleryItem[] = [
  {
    id: 'g1',
    title: 'Precision Razor Lining',
    category: 'beard',
    url: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'g2',
    title: 'Vintage Leather Barber Chair',
    category: 'interior',
    url: 'https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'g3',
    title: 'Modern Hair Styling',
    category: 'haircut',
    url: 'https://images.unsplash.com/photo-1605497746444-ac9dbd39f675?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'g4',
    title: 'Luxury Beard Sculpting',
    category: 'beard',
    url: 'https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'g5',
    title: 'Elite Hydra Facial Setup',
    category: 'facial',
    url: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'g6',
    title: 'Aromatherapy Hot Stone Massage',
    category: 'massage',
    url: 'https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'g7',
    title: 'Gold Dust Pack Therapy',
    category: 'facial',
    url: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'g8',
    title: 'Gentlemens Grooming Suite',
    category: 'interior',
    url: 'https://images.unsplash.com/photo-1512864084360-7c0c4d0a0845?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'g9',
    title: 'Undercut Fade Precision',
    category: 'haircut',
    url: 'https://images.unsplash.com/photo-1517832606299-7ae9b720a186?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'g10',
    title: 'Professional Scissors Trim',
    category: 'haircut',
    url: 'https://images.unsplash.com/photo-1534774592507-488885376ad3?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'g11',
    title: 'Traditional Soap Lather',
    category: 'grooming',
    url: 'https://images.unsplash.com/photo-1593121925328-7b900504a555?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'g12',
    title: 'Stress Relief Head Spa',
    category: 'massage',
    url: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'g13',
    title: 'Classic Pompadour Finish',
    category: 'haircut',
    url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'g14',
    title: 'Spa Oasis Waiting Room',
    category: 'interior',
    url: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'g15',
    title: 'Barber tools of the Trade',
    category: 'grooming',
    url: 'https://images.unsplash.com/photo-1592647429448-f800d3aa30ab?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'g16',
    title: 'Beard Line Foil Shaver',
    category: 'beard',
    url: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'g17',
    title: 'Scented Towel Therapy',
    category: 'grooming',
    url: 'https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'g18',
    title: 'Charcoal Blackhead Scrub',
    category: 'facial',
    url: 'https://images.unsplash.com/photo-1515688594390-b649af70d282?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'g19',
    title: 'Luxury Keratin Coating',
    category: 'haircut',
    url: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'g20',
    title: 'Deep Neck Relief Therapy',
    category: 'massage',
    url: 'https://images.unsplash.com/photo-1596178065887-1198b6148b2b?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'g21',
    title: 'Al Jannat Mart Elite Station',
    category: 'interior',
    url: 'https://images.unsplash.com/photo-1493246318656-5bfd4cfb29b8?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'g22',
    title: 'Classic Gents Cologne Selection',
    category: 'grooming',
    url: 'https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'g23',
    title: 'Textured Shag Cut',
    category: 'haircut',
    url: 'https://images.unsplash.com/photo-1620331702283-4a16104bc11c?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'g24',
    title: 'Executive Beard Oil Inoculation',
    category: 'beard',
    url: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'g25',
    title: 'High-Contrast Bald Fade',
    category: 'haircut',
    url: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'g26',
    title: 'Luxury Scalp Wash',
    category: 'grooming',
    url: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'g27',
    title: 'Detoxifying Steamer',
    category: 'facial',
    url: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'g28',
    title: 'Pre-wedding Groom Prep',
    category: 'grooming',
    url: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'g29',
    title: 'Lounge Waiting Area',
    category: 'interior',
    url: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'g30',
    title: 'Surgical Steel Shaving Razor',
    category: 'grooming',
    url: 'https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'g31',
    title: 'Deep Body Aromatherapy Pack',
    category: 'massage',
    url: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&q=80&w=800'
  }
];

// Interactive Before & After comparison data
export const BEFORE_AFTER_DATA: BeforeAfterItem[] = [
  {
    id: 'ba1',
    title: 'The Slick Undercut & Beard Fade',
    tagline: 'Precision overhaul of unkempt hair and messy growth into an exquisite, contoured crown and razor-sharp beard.',
    beforeUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=500&blur=10', // Simulated raw look
    afterUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=500' // Clean outcome
  },
  {
    id: 'ba2',
    title: 'Therapeutic Hydra Facial Treatment',
    tagline: 'Deep restoration of direct sunburns, clogged skin pores and dehydration back to a healthy, youthful gold-glow.',
    beforeUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=500&blur=15', // Dull look
    afterUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=500' // Glowing skin
  },
  {
    id: 'ba3',
    title: 'Royal Emperor Keratin Makeover',
    tagline: 'Ultimate calming of stubborn dry frizz into slick, shiny, and fully manageable aligned luxury hair structure.',
    beforeUrl: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=500&blur=8', // Frizzy
    afterUrl: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=500' // Smooth hair
  }
];

// Why Choose Us reasons
export const CHOOSE_US_DATA: ChooseUsItem[] = [
  {
    id: 'c1',
    title: 'Professional Barbers',
    description: 'Our world-class certified stylists are experts in custom fades, beard anatomy, and contemporary grooming trends.',
    iconName: 'user-check'
  },
  {
    id: 'c2',
    title: 'Premium Products',
    description: 'We exclusively use premium styling clays, international skin serums, and organic ammonia-free hair colors.',
    iconName: 'sparkles'
  },
  {
    id: 'c3',
    title: 'Hygienic Environment',
    description: 'Strict, hospital-grade daily sterilization of shears, blades, chairs, and styling stations for your supreme safety.',
    iconName: 'shield'
  },
  {
    id: 'c4',
    title: 'Luxury Experience',
    description: 'Sit back, enjoy high-speed Wi-Fi, freshly-brewed coffee, warm premium lighting, and luxury seating in dry comfort.',
    iconName: 'crown'
  },
  {
    id: 'c5',
    title: 'Expert Grooming',
    description: 'Personalized face-shape consultation before every haircut to make sure your styles truly complement your profile.',
    iconName: 'scissors'
  },
  {
    id: 'c6',
    title: 'Modern Equipment',
    description: 'Fitted out with state-of-the-art styling chairs, advanced ultrasonic pore cleansers, and professional steam tools.',
    iconName: 'cog'
  },
  {
    id: 'c7',
    title: 'Affordable Packages',
    description: 'Opulent, high-end grooming packages formulated at incredibly competitive and transparent prices with zero hidden costs.',
    iconName: 'gem'
  },
  {
    id: 'c8',
    title: 'Customer Satisfaction',
    description: 'Over 26 authentic glowing client reviews and counting, testifying to our unrelenting commitment to premium standards.',
    iconName: 'smile'
  },
  {
    id: 'c9',
    title: 'Comfortable Environment',
    description: 'Spacious climate-controlled facility nestled within Al Jannat Mart, with accessible client parking and security.',
    iconName: 'sofa'
  }
];

// Real-world client testimonials
export const REVIEWS_DATA: TestimonialItem[] = [
  {
    id: 'r1',
    name: 'Hamza Siddique',
    date: '3 days ago',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=100',
    comment: 'Undoubtedly the best mens salon in Pir Mahal. Visited last evening for a premium haircut and Hydra Facial. The quality of products they use is supreme and the barbers are extremely professional. Loved the luxury feel!',
    verified: true
  },
  {
    id: 'r2',
    name: 'Zain Ul Abideen',
    date: '2 weeks ago',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100',
    comment: 'Highly professional hair styling and grooming. Slider Salon & Spa brings high-end international city standards straight to Pir Mahal. Located conveniently in Al Jannat Mart. Five stars all the way!',
    verified: true
  },
  {
    id: 'r3',
    name: 'Muhammad Haris',
    date: '1 month ago',
    rating: 4,
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=100',
    comment: 'Outstanding beard styling! They really listen to your preferences first. Hygienic, clean tools, comfortable leather chairs, and a very relaxing head massage to finish. Will surely recommend to everyone looking for quality.',
    verified: true
  },
  {
    id: 'r4',
    name: 'Ali Imran Hashmi',
    date: '1 month ago',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=100',
    comment: 'The Hydra Facial is an absolute game-changer. Excellent service by Slider Salon & Spa staff. They offer amazing affordable packages too. The open-daily status and late closing times are perfect for working professionals.',
    verified: true
  },
  {
    id: 'r5',
    name: 'Asad Cheema',
    date: '2 months ago',
    rating: 4,
    avatar: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?auto=format&fit=crop&q=80&w=100',
    comment: 'The barbers at Slider are highly skilled. I got their Keratin Hair Spa and a classic razor alignment. Clean atmosphere, nice background music, and overall premium luxury treatment.',
    verified: true
  }
];
