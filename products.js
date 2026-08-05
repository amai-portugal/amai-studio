/* ============================================================
   Amai Studio — product catalogue
   To add or change a dessert, edit this file only.
   Each item: pt/en/jp names, image path, descPt/descEn, tags.
   Tags: 'gf' = sem glúten / gluten-free, 'vegan' = vegan.

   Kept in sync with the printed catalogue
   (amai_catalogue/build_catalogue_redesign.py) — last synced 2026-07-27.
   ============================================================ */

const TAG_LABELS = {
  gf: { pt: 'Sem glúten', en: 'Gluten-free' },
  vegan: { pt: 'Vegan', en: 'Vegan' },
};

const SECTIONS = [
  {
    pt: 'Mochi de Gelado', en: 'Mochi Ice Cream', jp: 'もちアイスクリーム',
    items: [
      {
        pt: 'Mochi de Morango', en: 'Strawberry Mochi', jp: 'いちごもち',
        img: 'assets/n-strawberry-mochi.webp',
        descPt: 'Gelado de morango com centro de compota de morango, envolto numa concha de mochi rosada.',
        descEn: 'Strawberry ice cream with a strawberry jam centre, wrapped in a rosy mochi shell.',
        tags: ['gf'],
      },
      {
        pt: 'Mochi de Chocolate', en: 'Chocolate Mochi', jp: 'チョコレートもち',
        img: 'assets/n-chocolate-mochi.webp',
        descPt: 'Gelado de chocolate intenso numa concha suave de mochi de baunilha.',
        descEn: 'Intense chocolate ice cream in a soft vanilla mochi shell.',
        tags: ['gf'],
      },
      {
        pt: 'Mochi de Manga', en: 'Mango Mochi', jp: 'マンゴーもち',
        img: 'assets/n-mango-mochi.webp',
        descPt: 'Gelado tropical de manga com centro de compota de manga, numa concha cor pêssego.',
        descEn: 'Tropical mango ice cream with a mango jam centre, in a peach-coloured shell.',
        tags: ['gf'],
      },
      {
        pt: 'Mochi de Pistácio', en: 'Pistachio Mochi', jp: 'ピスタチオもち',
        img: 'assets/n-pistachio-mochi.webp',
        descPt: 'Feito com pedaços de pistácio acabados de torrar e a nossa pasta de pistácio caseira.',
        descEn: 'Made with freshly roasted pistachio pieces and our own homemade pistachio paste.',
        tags: ['gf'],
      },
      {
        pt: 'Mochi de Limão', en: 'Lemon Mochi', jp: 'レモンもち',
        img: 'assets/n-lemon-mint-mochi.webp',
        descPt: 'Gelado de limão com leite condensado e geleia de hortelã, numa concha de mochi amarela viva.',
        descEn: 'Lemon ice cream with condensed milk and mint jelly, in a bright yellow mochi shell.',
        tags: ['gf'],
      },
      {
        pt: 'Mochi de Baunilha & Caramelo', en: 'Vanilla Mochi with Caramel', jp: 'バニラキャラメルもち',
        img: 'assets/n-vanilla-caramel-mochi.webp',
        descPt: 'Gelado de baunilha com centro fluido de caramelo salgado, numa concha branca.',
        descEn: 'Vanilla ice cream with a flowing salted caramel centre, in a white shell.',
        tags: ['gf'],
      },
      {
        pt: 'Mochi de Biscoff Cheesecake', en: 'Biscoff Cheesecake Mochi', jp: 'ビスコフチーズケーキもち',
        img: 'assets/n-biscoff-mochi.webp',
        descPt: 'Gelado tipo cheesecake com centro de pasta Biscoff.',
        descEn: 'Cheesecake-style ice cream with a Biscoff spread centre.',
        tags: [],
      },
      {
        pt: 'Mochi de Matcha com Morango', en: 'Matcha Mochi, Strawberry Coulis', jp: '抹茶いちごもち',
        img: 'assets/n-matcha-strawberry-mochi-04.webp',
        descPt: 'Gelado de matcha com centro de coulis de morango, numa concha de matcha suave.',
        descEn: 'Matcha ice cream with a strawberry coulis centre, in a soft matcha shell.',
        tags: ['gf'],
      },
      {
        pt: 'Mochi de Matcha', en: 'Classic Matcha Mochi', jp: '抹茶もち',
        img: 'assets/n-matcha-mochi-03.webp',
        descPt: 'Gelado puro de matcha numa concha clássica branca. Limpo, terroso e aromático.',
        descEn: 'Pure matcha ice cream in a classic white shell. Clean, earthy and aromatic.',
        tags: ['gf'],
      },
      {
        pt: 'Mochi de Cheesecake', en: 'Cheesecake Mochi with Berries', jp: 'チーズケーキベリーもち',
        img: 'assets/n-cheesecake-berry-mochi.webp',
        descPt: 'Gelado de cheesecake com centro de compota de frutos vermelhos, numa concha rosa.',
        descEn: 'Cheesecake ice cream with a mixed berry jam centre, in a pink shell.',
        tags: ['gf'],
      },
    ],
  },
  {
    pt: 'Mochi Vegan', en: 'Vegan Mochi', jp: 'ヴィーガンもち',
    items: [
      {
        pt: 'Mochi de Mirtilo', en: 'Blueberry Mochi (Vegan)', jp: 'ブルーベリーもち',
        img: 'assets/n-blueberry-vegan-mochi.webp',
        descPt: 'Gelado vegetal de mirtilo com compota de mirtilo. 100% vegan.',
        descEn: 'Plant-based blueberry ice cream with blueberry jam. 100% vegan.',
        tags: ['vegan', 'gf'],
      },
      {
        pt: 'Mochi de Coco', en: 'Coconut Mochi (Vegan)', jp: 'ココナッツもち',
        img: 'assets/n-coconut-mochi.webp',
        descPt: 'Gelado cremoso de coco com coco ralado tostado, numa concha delicada. 100% vegan.',
        descEn: 'Creamy coconut ice cream with toasted shredded coconut, in a delicate shell. 100% vegan.',
        tags: ['vegan', 'gf'],
      },
    ],
  },
  {
    pt: 'Cheesecakes', en: 'Cheesecakes', jp: 'チーズケーキ',
    items: [
      {
        pt: 'Cheesecake de Matcha', en: 'Matcha Cheesecake', jp: '抹茶チーズケーキ',
        img: 'assets/n-matcha-cheesecake.webp',
        descPt: 'Mousse vibrante de matcha sobre creme de baunilha. Sabor profundo, umami-doce.',
        descEn: 'Vibrant matcha mousse over vanilla cream. Deep, umami-sweet flavour.',
        tags: [],
      },
      {
        pt: 'Cheesecake de Sésamo Preto', en: 'Black Sesame Cheesecake', jp: '黒ゴマチーズケーキ',
        img: 'assets/n-black-sesame-cheesecake.webp',
        descPt: 'Mousse de sésamo preto sobre camada cremosa de baunilha, em base crocante.',
        descEn: 'Black sesame mousse over a creamy vanilla layer, on a crunchy base.',
        tags: [],
      },
      {
        pt: 'Cheesecake de Pistácio', en: 'Pistachio Cheesecake', jp: 'ピスタチオチーズケーキ',
        img: 'assets/n-pistachio-cheesecake.webp',
        descPt: 'Mousse de pistácio com cobertura de pistácio picado, sobre creme de baunilha.',
        descEn: 'Pistachio mousse topped with chopped pistachios, over vanilla cream.',
        tags: [],
      },
      {
        pt: 'Cheesecake de Yuzu', en: 'Yuzu Cheesecake', jp: 'ゆずチーズケーキ',
        img: 'assets/n-yuzu-cheesecake.webp',
        descPt: 'Curd ácido de yuzu sobre cream cheese sedoso. Leve e refrescante.',
        descEn: 'Tangy yuzu curd over silky cream cheese. Light and refreshing.',
        tags: [],
      },
    ],
  },
  {
    pt: 'Especialidades', en: 'Signature Desserts', jp: 'シグネチャーデザート',
    items: [
      {
        pt: 'Pudim de Sésamo Preto', en: 'Black Sesame Panna Cotta', jp: '黒ゴマパンナコッタ',
        img: 'assets/n-black-sesame-panna-cotta.webp',
        descPt: 'Pudim sedoso de sésamo preto, de sabor tostado, com acabamento escuro pintalgado.',
        descEn: 'Silky black sesame pudding with a toasted flavour and a dark speckled finish.',
        tags: ['gf'],
      },
      {
        pt: 'Domo Crocante de Chocolate', en: 'Crunchy Chocolate Dome', jp: 'クランチチョコドーム',
        img: 'assets/domo-chocolate-strawberry.webp',
        descPt: 'Gelado de morango com doce de morango, envolto em chocolate crocante com amendoim, sobre base de bolacha.',
        descEn: 'Strawberry ice cream with strawberry jam, wrapped in crunchy chocolate with peanut, on a biscuit base.',
        tags: [],
      },
      {
        pt: 'Tiramisù de Matcha', en: 'Matcha Tiramisu Delight', jp: '抹茶ティラミス',
        img: 'assets/matcha-tiramisu.webp',
        descPt: 'Creme de mascarpone e matcha em camadas, com biscoito.',
        descEn: 'Layered mascarpone and matcha cream with biscuit.',
        tags: [],
      },
      {
        pt: 'Dango', en: 'Dango', jp: 'だんご',
        img: 'assets/n-dango.webp',
        descPt: 'Três bolinhas de massa de arroz glutinoso em espeto, de textura macia e mastigável. Um clássico japonês.',
        descEn: 'Three glutinous rice dough balls on a skewer, soft and chewy in texture. A Japanese classic.',
        tags: ['vegan', 'gf'],
      },
      {
        pt: 'Panna Cotta de Yuzu', en: 'Yuzu Panna Cotta', jp: 'ゆずパンナコッタ',
        img: 'assets/n-yuzu-panna-cotta.webp',
        descPt: 'Panna cotta sedosa de yuzu com centro de mirtilo. Cítrica e delicada.',
        descEn: 'Silky yuzu panna cotta with a blueberry centre. Citrusy and delicate.',
        tags: ['gf'],
      },
      {
        pt: 'Mochi de Margarita', en: 'Margarita Mochi', jp: 'マルガリータもち',
        img: 'assets/n-margarita-mochi.webp',
        descPt: 'Gelado de lima e tequila inspirado no cocktail clássico.',
        descEn: 'Lime and tequila ice cream inspired by the classic cocktail.',
        tags: ['gf'],
      },
      {
        pt: 'Mochi de Chocolate Dubai', en: 'Dubai Chocolate Mochi', jp: 'ドバイチョコレートもち',
        img: 'assets/n-dubai-mochi.webp',
        descPt: 'Recheio crocante de kataifi e pasta de pistácio, inspirado no chocolate de Dubai.',
        descEn: 'Crunchy kataifi and pistachio paste filling, inspired by Dubai chocolate.',
        tags: [],
      },
      {
        pt: 'Mochi de Açaí', en: 'Açaí Mochi', jp: 'アサイーもち',
        img: 'assets/n-acai-mochi.webp',
        descPt: 'Concha de mochi branca e suave com recheio de polpa de açaí e guaraná. Fresco e tropical.',
        descEn: 'Soft white mochi shell filled with açaí and guaraná pulp. Fresh and tropical.',
        tags: ['gf'],
      },
      {
        pt: 'Mochi de Sakura Matcha', en: 'Sakura Matcha Mochi', jp: '桜抹茶もち',
        img: 'assets/n-sakura-matcha-mochi.webp',
        descPt: 'Mochi de gelado de matcha envolvido numa cobertura crocante de chocolate branco com noz.',
        descEn: 'Matcha ice cream mochi wrapped in a crunchy white chocolate and walnut coating.',
        tags: ['gf'],
      },
    ],
  },
];
