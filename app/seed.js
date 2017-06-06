function generateVoteCount() {
    return Math.floor((Math.random() * 50) + 15);
  }

  const products = [
    {
      id: 1,
      title: 'Yellow Pail',
      description: 'On-demand sand castle construction expertise.',
      url: '#',
      votes: generateVoteCount(),
      submitterAvatarUrl: 'images/avatars/128.jpg',
      productImageUrl: 'http://hopperinnovative.com/wp-content/uploads/2016/02/img-01.png',
    },
    {
      id: 2,
      title: 'Supermajority: The Fantasy Congress League',
      description: 'Earn points when your favorite politicians pass legislation.',
      url: '#',
      votes: generateVoteCount(),
      submitterAvatarUrl: 'images/avatars/129.jpg',
      productImageUrl: 'https://www.cyberpowerpc.com/images/cs/ZeusMiniII/blk_400.png',
    },
    {
      id: 3,
      title: 'Tinfoild: Tailored tinfoil hats',
      description: 'We already have your measurements and shipping address.',
      url: '#',
      votes: generateVoteCount(),
      submitterAvatarUrl: 'images/avatars/130.jpg',
      productImageUrl: 'https://1.bp.blogspot.com/-OaHUeDy3Fhk/VVo2nga1N1I/AAAAAAAABSI/-KfwxJNlZJY/w800-h800/format.png',
    },
    {
      id: 4,
      title: 'Haught or Naught',
      description: 'High-minded or absent-minded? You decide.',
      url: '#',
      votes: generateVoteCount(),
      submitterAvatarUrl: 'images/avatars/131.jpg',
      productImageUrl: 'http://www.intel.com/content/dam/www/public/us/en/images/product/16x9/minipc-feature-size-16x9.png.rendition.intel.web.576.324.png',
    },
  ];

export {products, generateVoteCount};
