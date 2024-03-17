import { City, Tour } from '@/utils/types/models'

export const cities: City[] = [
  {
    id: crypto.randomUUID(),
    name: 'Niagara Falls',
    tours: [
      {
        id: crypto.randomUUID(),
        name: 'Immerse into the Falls',
        description:
          'Discover the awe-inspiring beauty of Niagara Falls up close with our "Immerse into the Falls" tour. Feel the mist on your face as you experience the raw power of nature.',
        duration: 5,
        rating: 4.5,
        numberOfReviews: 462,
        price: 465,
        image:
          'https://tcproduction.blob.core.windows.net/media/%7B240f8b72-1159-4fd3-a150-0a837f50ba4a%7D.2573758641_297d6d19fa_o.jpg',
      },
      {
        id: crypto.randomUUID(),
        name: 'Helicopter Over the Falls',
        description:
          'Take your Niagara Falls experience to new heights with our exhilarating helicopter tour. Marvel at the majestic cascade from above and capture breathtaking views.',
        duration: 8,
        rating: 3,
        numberOfReviews: 641,
        price: 385,
        image: 'https://d2ru2mvuh5wx24.cloudfront.net/avtivity_bootstrap/1241/flight_of_angels_3__1920x864.jpg',
      },
      {
        id: crypto.randomUUID(),
        name: 'The Falls at Night',
        description:
          'Witness the magic of Niagara Falls illuminated against the night sky. Experience the enchanting ambiance and capture unforgettable moments.',
        duration: 2,
        rating: 4,
        numberOfReviews: 133,
        price: 144,
        image:
          'https://www.niagarafallsstatepark.com/~/media/parks/niagara-falls/attractions-and-tours/illumination/niagarafalls-illumination-header-desktop.jpg?h=500&w=1500&la=en&hash=123E6D5F1744FBCC74EC36570E77872608D24891g',
      },
      {
        id: crypto.randomUUID(),
        name: 'Immerse into the Falls',
        description:
          'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
        duration: 5,
        rating: 5,
        numberOfReviews: 462,
        price: 465,
        image:
          'https://tcproduction.blob.core.windows.net/media/%7B240f8b72-1159-4fd3-a150-0a837f50ba4a%7D.2573758641_297d6d19fa_o.jpg',
      },
    ],
  },
  {
    id: crypto.randomUUID(),
    name: 'Las Vegas',
    tours: [
      {
        id: crypto.randomUUID(),
        name: 'All Around the World',
        description:
          'Embark on a journey through the iconic Las Vegas Strip. Experience the vibrant energy and world-class entertainment that defines Sin City.',
        duration: 5,
        rating: 2,
        numberOfReviews: 462,
        price: 465,
        image:
          'https://assets.simpleviewcms.com/simpleview/image/upload/c_limit,h_1200,q_75,w_1200/v1/clients/lasvegas/strip_b86ddbea-3add-4995-b449-ac85d700b027.jpg',
      },
      {
        id: crypto.randomUUID(),
        name: 'View the Casinos',
        description:
          "Get an exclusive look at the glitz and glamour of Las Vegas's famous casinos. Immerse yourself in the excitement of the city that never sleeps.",
        duration: 5,
        rating: 1,
        numberOfReviews: 462,
        price: 465,
        image:
          'https://assets.simpleviewcms.com/simpleview/image/upload/c_limit,h_1200,q_75,w_1200/v1/clients/lasvegas/strip_b86ddbea-3add-4995-b449-ac85d700b027.jpg',
      },
      {
        id: crypto.randomUUID(),
        name: 'Show me the Magic',
        description:
          'Indulge in the enchanting world of Las Vegas magic shows. Prepare to be dazzled by mind-bending illusions and captivating performances.',
        duration: 8,
        rating: 3.5,
        numberOfReviews: 641,
        price: 385,
        image: 'https://footwearnews.com/wp-content/uploads/2020/10/magic-trade-show-las-vegas.jpg',
      },
      {
        id: crypto.randomUUID(),
        name: 'The Falls at Night',
        description:
          'Witness the magic of Niagara Falls illuminated against the night sky. Experience the enchanting ambiance and capture unforgettable moments.',
        duration: 2,
        rating: 4,
        numberOfReviews: 133,
        price: 144,
        image:
          'https://assets.simpleviewcms.com/simpleview/image/upload/c_limit,h_1200,q_75,w_1200/v1/clients/lasvegas/strip_b86ddbea-3add-4995-b449-ac85d700b027.jpg',
      },
    ],
  },
]
