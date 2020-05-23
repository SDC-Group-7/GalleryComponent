## Server API

### Get list of images url
  * GET `/api/products/:productid/images`
  

**Path Parameters:**
  * `productid` product id

**Success Status Code:** `200`

**Returns:** JSON

```json
  {
    "product_id" : "Number",
    "images" : [
      {
        "image_id": "Number",
        "reference_id": "Number"
      },
      ...
    ]
  }
```

### Add an image
  * POST `/api/products/:productid/images`
  

**Path Parameters:**
  * `productid`

**Success Status Code:** `201`

**Request Body**: Expects JSON with the following keys.

```json
    {
      "image_url": "String"
    }
```

### Update product image
  * PATCH `/api/products/:productid/images/:imageid`

**Path Parameters:**
  * `imageid` image id
  * `productid` product id

**Success Status Code:** `204`

**Request Body**: Expects JSON with any of the following keys (include only keys to be updated)

```json
    {
      "image_url": "String",
    }
```

### Delete restaurant
  * DELETE `/api/products/:productid/images/:imageid`

**Path Parameters:**
  * `imageid` image id

**Success Status Code:** `204`

