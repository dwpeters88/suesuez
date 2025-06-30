
interface ShopifyResponse<T> {
  data: T;
}

export async function shopifyFetch<T>({
  query,
  variables,
}: {
  query: string;
  variables?: Record<string, unknown>;
}): Promise<ShopifyResponse<T>> {
  const endpoint = `https://${import.meta.env.PUBLIC_SHOPIFY_STORE_DOMAIN}/api/2023-10/graphql.json`;
  const key = import.meta.env.PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN;

  if (!endpoint || !key) {
    throw new Error("Shopify environment variables are not set.");
  }

  const response = await fetch(endpoint, {
    method: "POST",
    headers: {
      "X-Shopify-Storefront-Access-Token": key,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query, variables }),
  });

  if (!response.ok) {
    const error = await response.text();
    throw new Error(`Shopify API error: ${error}`);
  }

  return response.json();
}
