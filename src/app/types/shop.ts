export default interface Shop {
    id: string;
    index: number;
    createDate: string;
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
        address: Address[];
        contacts: Contact[];
        socialMedia: SocialMedia[];
    };
    }

    interface Address {
    address: string;
    country: string;
    city: string;
    province: string;
    postIndex: number;
    street: string;
    buildingNumber: number;
    }

    interface Contact {
    type: 'email' | 'website';
    value: string;
    isVerified: boolean;
    }

    interface SocialMedia {
    platform: string;
    url: string;
    icon: string;
}  