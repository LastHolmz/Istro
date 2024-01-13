type Product = {
  title: string;
  categoryId: number;
  productId: number;
  quantity: {
    total: number;
    available: number;
  };
  description: string;
  orders: number;
  storeInfo: {
    name: string;
    logo: string;
    companyId: number;
    storeNumber: number;
    isTopRated: boolean;
    hasPayPalAccount: boolean;
    ratingCount: number;
    rating: float;
  };
  ratings: {
    totalStar: number;
    averageStar: number;
    totalStartCount: number;
    fiveStarCount: number;
    fourStarCount: number;
    threeStarCount: number;
    twoStarCount: number;
    oneStarCount: number;
  };
  images: string[];
  reviews: [
    {
      anonymous: boolean;
      name: string;
      displayName: string;
      gender: string;
      country: string;
      rating: number;
      info: string;
      date: string;
      content: string;
      photos: string[];
      thumbnails: string[];
    }
  ];
  variants: {
    options: [
      {
        id: number;
        name: string;
        values: [
          {
            id: number;
            name: string;
            displayName: string;
            image: string;
          }
        ];
      }
    ];
  };
  prices: [
    {
      skuId: number;
      optionValueIds: number[];
      availableQuantity: number;
      originalPrice: {
        currency: string;
        formatedAmount: string;
        value: float;
      };
      salePrice: {
        currency: string;
        formatedAmount: string;
        value: floar;
      };
    }
  ];
  specs: [
    {
      attrValue: string;
      attrName: string;
    }
  ];
  currencyInfo: {
    baseCurrencyCode: string;
    enableTransaction: boolean;
    currencySymbol: string;
    symbolFront: false;
    currencyRate: float;
    baseSymbolFront: Boolean;
    currencyCode: string;
    baseCurrencySymbol: string;
    multiCurrency: boolean;
  };
  originalPrice: {
    min: {
      currency: string;
      formatedAmount: string;
      value: float;
    };
    max: {
      currency: string;
      formatedAmount: string;
      value: float;
    };
    salePrice: {
      min: {
        currency: string;
        formatedAmount: string;
        value: float;
      };
      max: {
        currency: string;
        formatedAmount: string;
        value: float;
      };
    };
  };
  shipping: [
    {
      deliveryProviderName: string;
      tracking: string;
      provider: string;
      company: string;
      deliveryInfo: {
        min: number;
        max: number;
      };
      shippingInfo: {
        from: string;
        fromCode: string;
        to: string;
        toCode: string;
        fees: string;
        displayAmount: string;
        displayCurrency: string;
      };
      warehouseType: string;
    }
  ];
};
enum filterReviewsBy {
  1 = 1,
  2 = 2,
  3 = 3,
  4 = 4,
  5 = 5,
}

type Options = {
  reviewsCount?: number;
  filterReviewsBy?: filterReviewsBy;
  puppeteerOptions?: {};
};

declare module "aliexpress-product-scraper" {
  export default function scrape(
    id: string,
    options?: Options
  ): Promise<Product>;
}
