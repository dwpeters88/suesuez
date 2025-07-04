import { createStorefrontApiClient } from '@shopify/storefront-api-client';

const client = createStorefrontApiClient({
  storeDomain: import.meta.env.SHOPIFY_STORE_DOMAIN || 'your-store.myshopify.com',
  apiVersion: '2024-01',
  publicAccessToken: import.meta.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN || 'your-token',
});

export interface ShopifyProduct {
  id: string;
  title: string;
  handle: string;
  description: string;
  priceRange: {
    minVariantPrice: {
      amount: string;
      currencyCode: string;
    };
  };
  images: {
    nodes: Array<{
      id: string;
      url: string;
      altText: string;
      width: number;
      height: number;
    }>;
  };
  variants: {
    nodes: Array<{
      id: string;
      title: string;
      price: {
        amount: string;
        currencyCode: string;
      };
      availableForSale: boolean;
      selectedOptions: Array<{
        name: string;
        value: string;
      }>;
    }>;
  };
  options: Array<{
    name: string;
    values: string[];
  }>;
  tags: string[];
  vendor: string;
  productType: string;
  collections: {
    nodes: Array<{
      id: string;
      title: string;
      handle: string;
    }>;
  };
}

export interface ShopifyCollection {
  id: string;
  title: string;
  handle: string;
  description: string;
  image?: {
    url: string;
    altText: string;
  };
  products: {
    nodes: ShopifyProduct[];
  };
}

const GET_PRODUCTS_QUERY = `
  query getProducts($first: Int!) {
    products(first: $first) {
      nodes {
        id
        title
        handle
        description
        priceRange {
          minVariantPrice {
            amount
            currencyCode
          }
        }
        images(first: 5) {
          nodes {
            id
            url
            altText
            width
            height
          }
        }
        variants(first: 10) {
          nodes {
            id
            title
            price {
              amount
              currencyCode
            }
            availableForSale
            selectedOptions {
              name
              value
            }
          }
        }
        options {
          name
          values
        }
        tags
        vendor
        productType
        collections(first: 5) {
          nodes {
            id
            title
            handle
          }
        }
      }
    }
  }
`;

const GET_PRODUCT_BY_HANDLE_QUERY = `
  query getProductByHandle($handle: String!) {
    product(handle: $handle) {
      id
      title
      handle
      description
      priceRange {
        minVariantPrice {
          amount
          currencyCode
        }
      }
      images(first: 10) {
        nodes {
          id
          url
          altText
          width
          height
        }
      }
      variants(first: 20) {
        nodes {
          id
          title
          price {
            amount
            currencyCode
          }
          availableForSale
          selectedOptions {
            name
            value
          }
        }
      }
      options {
        name
        values
      }
      tags
      vendor
      productType
      collections(first: 5) {
        nodes {
          id
          title
          handle
        }
      }
    }
  }
`;

const GET_COLLECTIONS_QUERY = `
  query getCollections($first: Int!) {
    collections(first: $first) {
      nodes {
        id
        title
        handle
        description
        image {
          url
          altText
        }
        products(first: 20) {
          nodes {
            id
            title
            handle
            priceRange {
              minVariantPrice {
                amount
                currencyCode
              }
            }
            images(first: 1) {
              nodes {
                id
                url
                altText
                width
                height
              }
            }
          }
        }
      }
    }
  }
`;

export async function getProducts(count: number = 20): Promise<ShopifyProduct[]> {
  try {
    const response = await client.request(GET_PRODUCTS_QUERY, {
      variables: { first: count },
    });
    return response.data?.products?.nodes || [];
  } catch (error) {
    console.error('Error fetching products:', error);
    return [];
  }
}

export async function getProductByHandle(handle: string): Promise<ShopifyProduct | null> {
  try {
    const response = await client.request(GET_PRODUCT_BY_HANDLE_QUERY, {
      variables: { handle },
    });
    return response.data?.product || null;
  } catch (error) {
    console.error('Error fetching product:', error);
    return null;
  }
}

export async function getCollections(count: number = 10): Promise<ShopifyCollection[]> {
  try {
    const response = await client.request(GET_COLLECTIONS_QUERY, {
      variables: { first: count },
    });
    return response.data?.collections?.nodes || [];
  } catch (error) {
    console.error('Error fetching collections:', error);
    return [];
  }
}

export function formatPrice(amount: string, currencyCode: string = 'GBP'): string {
  const price = parseFloat(amount);
  return new Intl.NumberFormat('en-GB', {
    style: 'currency',
    currency: currencyCode,
  }).format(price);
}

export function getImageUrl(url: string, size: string = '800x800'): string {
  return url.replace(/\.(jpg|jpeg|png|gif|webp)/, `_${size}.$1`);
} 