curl 'https://www.lego.com/api/graphql/ProductRecommendedQuery' \
  -H 'authority: www.lego.com' \
  -H 'pragma: no-cache' \
  -H 'cache-control: no-cache' \
  -H 'session_cookie_id: aqNUlmtLrohrnRLHGs_ja' \
  -H 'x-locale: en-US' \
  -H 'features: storeInventory=true&salePercent=true&product3DViewer=true&rewardsCenter=false&newFonts=true' \
  -H 'authorization: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7InB1YiI6e30sInB2dCI6IjZpS0Z1Q05CQkkyQnR2UGFWTDk4V0txem4xR3FxeC9RL1BCWUpUbTFiNXA0ZEw1NTVZWVNvRWgzQzJzalZqL3VoOEh6Rm9oMHRCUXhGSE5QUVN0RmV6UGlKdDhUSTRXdEtlWHVzckwzZGhLTTYwNDJxNFk3a1JIZ25BM3NKc0pucGdTVHBjL21aTThNbUpST0psS3BiTkF3TzJrS3JMejBoOHJJU3VjaC9OWG9EVFJqUnhhOFl1TTFNcjY5UHJVY29XZ3VNL01mQ2FpcEpjTnp3VmJNcURPdlU5L1BWZEozdUR5b2g2UC9Pb0lyWDB3R3ZzZVNOR2krcjMxSk51UFpaQ1RTSUtXdmRwaEZYR1k3MWhQcjNqcmRKWDcrK2tGMFZjYUtSb0FHUTJtU3dlZE1heHRUQ0VIWEJtRGlwNDR1bUlnSXo4d0dnRGMrZTVpMnBDU09kRnlpUzB0bWh5WDZGWDFyeHVWOVhTWVVKa3M4OS9LMXlrcU54SW5ZWDM0TE5CTnFjaXFLR0RqaDYzSlJaUnAzK2RPYlZhUGxkS0NSN0Z5MFRDZCtTUWRvUnJZeWp1RkRndGNXY3FVZXEyWUZoNGRJQnIvTXllSnZqTWU5dmVrRngvcm5YY1JvWEoxamZWVnVzd2xjaHhXeWFEODcrWVlJd01QZm9VU2NMWTc2NkV0ekZOQTBoQmxJOS9IZi91MjJZdz09LjZ5QjUydWdsZ2FxcldaVU03WEd1UHc9PSJ9LCJpYXQiOjE1OTA1NTk1NzgsImV4cCI6MTU5MDczMjM3OH0.hD9SsCoecUqfh0osuDa6Ag2DiqSqKZvlmRCzqOo49-k' \
  -H 'newrelic: eyJ2IjpbMCwxXSwiZCI6eyJ0eSI6IkJyb3dzZXIiLCJhYyI6IjE3NDY4NzEiLCJhcCI6IjEwMzI0NzQ2OCIsImlkIjoiOTRkNTJhOGI3OTQzMzdlOCIsInRyIjoiNGY0MzEyNTI5OGJhMGFhYSIsInRpIjoxNTkwNjg2MTQ2MDM2fX0=' \
  -H 'content-type: application/json' \
  -H 'accept: */*' \
  -H 'user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.138 Safari/537.36' \
  -H 'lid: ' \
  -H 'x-lego-request-id: ea0574ed-f580-48fd-89c2-8212094b3ae3-c' \
  -H 'origin: https://www.lego.com' \
  -H 'sec-fetch-site: same-origin' \
  -H 'sec-fetch-mode: same-origin' \
  -H 'sec-fetch-dest: empty' \
  -H 'referer: https://www.lego.com/en-us/product/a-wing-starfighter-75275' \
  -H 'accept-language: en-US,en;q=0.9' \
  --data-binary $'{"operationName":"ProductRecommendedQuery","variables":{"siteArea":"PRODUCT_DETAIL_PAGE","productCode":"75275","sessionCookieId":"aqNUlmtLrohrnRLHGs_ja","crossSessionCookieId":"LC6lwQ3CpFVuva0v9sRjh","recentlyViewed":["76895","71044"],"cartItems":[],"wishlistItems":[]},"query":"query ProductRecommendedQuery($siteArea: RecommendationSiteAreas\u0021, $productCode: String, $cartItems: [String\u0021], $wishlistItems: [String\u0021], $recentlyViewed: [String\u0021], $sessionCookieId: String\u0021, $crossSessionCookieId: String) {\\n  recommendedProducts(limit: 4, siteArea: $siteArea, productCode: $productCode, cartItems: $cartItems, wishlistItems: $wishlistItems, recentlyViewedItems: $recentlyViewed, sessionCookieId: $sessionCookieId, crossSessionCookieId: $crossSessionCookieId) {\\n    id\\n    recommendations {\\n      ...Product_ProductItem\\n      __typename\\n    }\\n    __typename\\n  }\\n}\\n\\nfragment Product_ProductItem on Product {\\n  __typename\\n  id\\n  productCode\\n  name\\n  slug\\n  primaryImage(size: THUMBNAIL)\\n  baseImgUrl: primaryImage\\n  overrideUrl\\n  ... on ReadOnlyProduct {\\n    readOnlyVariant {\\n      ...Variant_ReadOnlyProduct\\n      __typename\\n    }\\n    __typename\\n  }\\n  ... on SingleVariantProduct {\\n    variant {\\n      ...Variant_ListingProduct\\n      __typename\\n    }\\n    __typename\\n  }\\n  ... on MultiVariantProduct {\\n    variants {\\n      ...Variant_ListingProduct\\n      __typename\\n    }\\n    __typename\\n  }\\n}\\n\\nfragment Variant_ListingProduct on ProductVariant {\\n  id\\n  sku\\n  salePercentage\\n  attributes {\\n    rating\\n    maxOrderQuantity\\n    availabilityStatus\\n    availabilityText\\n    vipAvailabilityStatus\\n    vipAvailabilityText\\n    canAddToBag\\n    canAddToWishlist\\n    vipCanAddToBag\\n    onSale\\n    isNew\\n    ...ProductAttributes_Flags\\n    __typename\\n  }\\n  ...ProductVariant_Pricing\\n  __typename\\n}\\n\\nfragment ProductVariant_Pricing on ProductVariant {\\n  price {\\n    formattedAmount\\n    centAmount\\n    currencyCode\\n    formattedValue\\n    __typename\\n  }\\n  listPrice {\\n    formattedAmount\\n    centAmount\\n    __typename\\n  }\\n  attributes {\\n    onSale\\n    __typename\\n  }\\n  __typename\\n}\\n\\nfragment ProductAttributes_Flags on ProductAttributes {\\n  featuredFlags {\\n    key\\n    label\\n    __typename\\n  }\\n  __typename\\n}\\n\\nfragment Variant_ReadOnlyProduct on ReadOnlyVariant {\\n  id\\n  sku\\n  attributes {\\n    featuredFlags {\\n      key\\n      label\\n      __typename\\n    }\\n    __typename\\n  }\\n  __typename\\n}\\n"}' \
  --compressed
