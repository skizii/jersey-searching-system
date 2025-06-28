export type Store = {
  id: string;
  index: number;
  createDate: string; // 'MM-DD-YYYY'
  name: string;
  website: string;
  defaultImage: string;
  assortment: string;
  rating: string;
  statuses: {
    isAssortmentHighlighted: boolean;
    isEmailVerified: boolean;
  };
  additionalInfo: {
    address: {
      address: string;
      country: string;
      city: string;
      province: string;
      postIndex: number;
      street: string;
      buildingNumber: number;
    } | {
      address: string;
      country: string;
      city: string;
      province: string;
      postIndex: number;
      street: string;
      buildingNumber: number;
    }[];
    contacts: {
      tel: {
        value: string;
        isVerified: boolean;
      };
      email: {
        value: string;
        isVerified: boolean;
      };
      website: {
        value: string;
        isVerified: boolean;
      };
    };
    socialMedia: {
      platform: string;
      url: string;
      icon: string;
    }[];
  };
};
