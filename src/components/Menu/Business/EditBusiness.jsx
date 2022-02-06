var products = [
  {
    _id: 1,
    productName: 'פחית קולה',
    category: 'drink',
    numberInStock: 10,
    imgUrl:
      'https://d3m9l0v76dty0.cloudfront.net/system/photos/5997245/extra_large/1455424b46b04adbf2c8a453f25573e4.jpg',
    sum: 0,
    price: 7,
    productDescription:
      'Console of Sony./Comes with stand, game to choose from and extra sign./official importer warranty for 3 years.',
  },
  {
    _id: 2,
    productName: 'פחית פאנטה',
    category: 'drink',
    numberInStock: 10,
    imgUrl: 'https://vgs.co.il/wp-content/uploads/2016/11/PS4-PRO-CONSOLE.jpg',
    sum: 0,
    price: 7,
    productDescription:
      'Console of Sony./Comes with stand, game to choose from and extra sign./official importer warranty for 3 years.',
  },
  {
    _id: 3,
    productName: 'פחית קולה זירו',
    category: 'drink',
    numberInStock: 10,
    imgUrl: 'https://img.zap.co.il/pics/new/308201593115c.gif',
    sum: 0,
    price: 7,
    productDescription:
      'Console of Sony./Comes with stand, game to choose from and extra sign./official importer warranty for 3 years.',
  },
  {
    _id: 4,
    productName: 'פחית ספריט',
    category: 'drink',
    numberInStock: 3,
    imgUrl:
      'https://ofekpc.co.il/images/thumbs/0004046_fifa-21-ps5-21-5_510.jpeg',
    sum: 0,
    price: 7,
    productDescription:
      'Game of FIFA for PS./official importer warranty for 3 years.',
  },
  {
    _id: 5,
    productName: 'בקבוק קולה',
    category: 'drink',
    numberInStock: 4,
    imgUrl:
      'https://d3m9l0v76dty0.cloudfront.net/system/photos/6273852/large/2ace509d77a9ab6db149bc7edd45fadf.jpg',
    sum: 0,
    price: 10,
    productDescription:
      'Game of God Of War for PS./official importer warranty for 3 years.',
  },
  {
    _id: 6,
    productName: 'בקבוק פאנטה',
    category: 'drink',
    numberInStock: 10,
    imgUrl:
      'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/9f2f00be-82c7-467d-9ceb-170c4b00ec4e/ddsajsw-d1199ea0-bcc2-493f-b73c-8f30484d8bdf.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvOWYyZjAwYmUtODJjNy00NjdkLTljZWItMTcwYzRiMDBlYzRlXC9kZHNhanN3LWQxMTk5ZWEwLWJjYzItNDkzZi1iNzNjLThmMzA0ODRkOGJkZi5qcGcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.hxUXVwdTVvDdDisyAO-x_kuTIWIRCV1eCXVJjW6A4Do',
    sum: 0,
    price: 10,
    productDescription:
      'Call Of Duty War Zone(kroos Play)./official importer warranty for 3 years.',
  }, //__________________
  {
    _id: 7,
    productName: 'בקבוק קולה זירו',
    category: 'drink',
    numberInStock: 10,
    imgUrl:
      'https://konimboimages.s3.amazonaws.com/system/photos/6153419/large/880497e4af81b0b196d76970f1ae8ad9.jpg',
    sum: 0,
    price: 10,
    productDescription:
      'Connect to all devices./Comes with stand./official importer warranty for 3 years.',
  },
  {
    _id: 8,
    productName: 'בקבוק ספריט',
    category: 'drink',
    numberInStock: 10,
    imgUrl:
      'https://vgs.co.il/wp-content/uploads/2015/12/sonywirelessheadset2.0.jpg',
    sum: 0,
    price: 10,
    productDescription:
      'Connect to all devices./Comes with stand./official importer warranty for 3 years.',
  },
  {
    _id: 9,
    productName: 'בקבוק מים',
    category: 'drink',
    numberInStock: 10,
    imgUrl:
      'https://vgs.co.il/wp-content/uploads/2015/12/sonywirelessheadset2.0.jpg',
    sum: 0,
    price: 8,
    productDescription:
      'Connect to all devices./Comes with stand./official importer warranty for 3 years.',
  },
  {
    _id: 10,
    productName: 'קפה',
    category: 'hotDrink',
    numberInStock: 10,
    imgUrl:
      'https://www.headsound.co.il/images/itempics/193429_02112020125855.jpg',
    sum: 0,
    price: 6,
    productDescription:
      'Connect to all devices./Comes with Top cover./official importer warranty for 1 year.',
  }, //__________________
  {
    _id: 11,
    productName: 'תה',
    category: 'hotDrink',
    numberInStock: 10,
    imgUrl:
      'https://www.kickmobiles.com/images/thumbs/0013868_apple-iphone-12-pro-max_808.jpeg',
    sum: 0,
    price: 6,
    productDescription:
      'New Phone of Apple./Comes with Headphones, shield, back cover ./ official importer warranty for 3 years.',
  },
  {
    _id: 12,
    productName: 'סופלה',
    category: 'desserts',
    numberInStock: 10,
    imgUrl:
      'https://img.router-switch.com/media/customoptions/74/1/1/samsung-galaxy-note20-ultra-5g-black.jpg',
    sum: 0,
    price: 26,
    productDescription:
      'New Phone of Samsung./Comes with Headphones, shield, back cover ./ official importer warranty for 3 years.',
  },
  {
    _id: 13,
    productName: 'וואפל בלגי',
    category: 'desserts',
    numberInStock: 10,
    imgUrl:
      'https://static.digit.in/default/2cb740112aaabdf34d18e326fdb755d625127695.png?tr=n-product_detail_leader_thumb',
    sum: 0,
    price: 32,
    productDescription:
      'New Phone of OnePlus./Comes with Headphones, shield, back cover./official importer warranty for 3 years.',
  },
  {
    _id: 14,
    productName: 'עוגת שוקולד',
    category: 'desserts',
    numberInStock: 10,
    imgUrl:
      'https://static.digit.in/default/2cb740112aaabdf34d18e326fdb755d625127695.png?tr=n-product_detail_leader_thumb',
    sum: 0,
    price: 32,
    productDescription:
      'New Phone of OnePlus./Comes with Headphones, shield, back cover./official importer warranty for 3 years.',
  },
  {
    _id: 15,
    productName: 'עוגת גבינה',
    category: 'desserts',
    numberInStock: 10,
    imgUrl:
      'https://static.digit.in/default/2cb740112aaabdf34d18e326fdb755d625127695.png?tr=n-product_detail_leader_thumb',
    sum: 0,
    price: 35,
    productDescription:
      'New Phone of OnePlus./Comes with Headphones, shield, back cover./official importer warranty for 3 years.',
  },
  {
    _id: 16,
    productName: 'טבעות בצל קטן',
    category: 'extras',
    numberInStock: 10,
    imgUrl:
      'https://static.digit.in/default/2cb740112aaabdf34d18e326fdb755d625127695.png?tr=n-product_detail_leader_thumb',
    sum: 0,
    price: 16,
    productDescription:
      'New Phone of OnePlus./Comes with Headphones, shield, back cover./official importer warranty for 3 years.',
  },
  {
    _id: 17,
    productName: 'טבעות בצל גדול',
    category: 'extras',
    numberInStock: 10,
    imgUrl:
      'https://static.digit.in/default/2cb740112aaabdf34d18e326fdb755d625127695.png?tr=n-product_detail_leader_thumb',
    sum: 0,
    price: 22,
    productDescription:
      'New Phone of OnePlus./Comes with Headphones, shield, back cover./official importer warranty for 3 years.',
  },
  {
    _id: 18,
    productName: 'פוטטו קטן',
    category: 'extras',
    numberInStock: 10,
    imgUrl:
      'https://static.digit.in/default/2cb740112aaabdf34d18e326fdb755d625127695.png?tr=n-product_detail_leader_thumb',
    sum: 0,
    price: 16,
    productDescription:
      'New Phone of OnePlus./Comes with Headphones, shield, back cover./official importer warranty for 3 years.',
  },
  {
    _id: 19,
    productName: 'פוטטו גדול',
    category: 'extras',
    numberInStock: 10,
    imgUrl:
      'https://static.digit.in/default/2cb740112aaabdf34d18e326fdb755d625127695.png?tr=n-product_detail_leader_thumb',
    sum: 0,
    price: 22,
    productDescription:
      'New Phone of OnePlus./Comes with Headphones, shield, back cover./official importer warranty for 3 years.',
  },
  {
    _id: 20,
    productName: `צ'יפס קטן`,
    category: 'extras',
    numberInStock: 10,
    imgUrl:
      'https://static.digit.in/default/2cb740112aaabdf34d18e326fdb755d625127695.png?tr=n-product_detail_leader_thumb',
    sum: 0,
    price: 16,
    productDescription:
      'New Phone of OnePlus./Comes with Headphones, shield, back cover./official importer warranty for 3 years.',
  },
  {
    _id: 21,
    productName: `צ'יפס גדול`,
    category: 'extras',
    numberInStock: 10,
    imgUrl:
      'https://static.digit.in/default/2cb740112aaabdf34d18e326fdb755d625127695.png?tr=n-product_detail_leader_thumb',
    sum: 0,
    price: 22,
    productDescription:
      'New Phone of OnePlus./Comes with Headphones, shield, back cover./official importer warranty for 3 years.',
  },
  {
    _id: 22,
    productName: `צ'יפס בטטטה קטן`,
    category: 'extras',
    numberInStock: 10,
    imgUrl:
      'https://static.digit.in/default/2cb740112aaabdf34d18e326fdb755d625127695.png?tr=n-product_detail_leader_thumb',
    sum: 0,
    price: 16,
    productDescription:
      'New Phone of OnePlus./Comes with Headphones, shield, back cover./official importer warranty for 3 years.',
  },
  {
    _id: 23,
    productName: `צ'יפס בטטטה גדול`,
    category: 'extras',
    numberInStock: 10,
    imgUrl:
      'https://static.digit.in/default/2cb740112aaabdf34d18e326fdb755d625127695.png?tr=n-product_detail_leader_thumb',
    sum: 0,
    price: 16,
    productDescription:
      'New Phone of OnePlus./Comes with Headphones, shield, back cover./official importer warranty for 3 years.',
  },
];

export function getProducts() {
  return products;
}
export function getProductsCatgory(id) {
  let a = [];
  a.push('All');
  products.forEach((element) => {
    if (!a.includes(element.category)) a.push(element.category);
  });
  return a;
}
export function getProduct(name) {
  return products.find((m) => m.productName === name);
}
