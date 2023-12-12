enum AvatarOptions {
  HEAD = 'HEAD',
  HAIRSTYLE = 'HAIRSTYLE',
  FACIALEXPRESSION = 'FACIALEXPRESSION',
  COSTUM = 'COSTUM',
  ACCESSORIES = 'ACCESSORIES',
}

const cardData: Record<
  AvatarOptions,
  { title: string; description: string }[]
> = {
  HEAD: [
    { title: 'head 1', description: 'Description for Card 1' },
    { title: 'head 2', description: 'Description for Card 2' },
    { title: 'head 3', description: 'Description for Card 3' },
  ],
  HAIRSTYLE: [
    { title: 'hairstyle 1', description: 'Description for Card 1' },
    { title: 'hairstyle 2', description: 'Description for Card 2' },
    { title: 'hairstyle 3', description: 'Description for Card 3' },
  ],
  FACIALEXPRESSION: [
    { title: 'facialExpression1', description: 'Description for Card 1' },
    { title: 'facialExpression 2', description: 'Description for Card 2' },
    { title: 'facialExpression 3', description: 'Description for Card 3' },
  ],
  COSTUM: [
    { title: 'costum 1', description: 'Description for Card 1' },
    { title: 'costum 2', description: 'Description for Card 2' },
    { title: 'costum 3', description: 'Description for Card 3' },
  ],
  ACCESSORIES: [
    { title: 'accessories 1', description: 'Description for Card 1' },
    { title: 'accessories 2', description: 'Description for Card 2' },
    { title: 'accessories 3', description: 'Description for Card 3' },
  ],
};

export { AvatarOptions, cardData };
