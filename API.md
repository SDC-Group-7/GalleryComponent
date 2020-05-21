## Server API

### Get list of images url
  * GET `/api/images/:productid`

**Path Parameters:**
  * `productid` product id

**Success Status Code:** `200`

**Returns:** JSON

```json
  [
    {
      "image_id": "Number", 
      "image_url": "String", 
      "product_id": "Number", 
      "reference_id": "Number"
    },
    {
      "image_id": "Number", 
      "image_url": "String", 
      "product_id": "Number", 
      "reference_id": "Number"
    },
    ...
  ]
```

### Add an image
  * POST `/api/images`

**Success Status Code:** `201`

**Request Body**: Expects JSON with the following keys.

```json
    {
      "product_id": "Number",
      "image_url": "String"
    }
```

### Update restaurant info
  * PATCH `/api/images/:imageid`

**Path Parameters:**
  * `imageid` image id

**Success Status Code:** `204`

**Request Body**: Expects JSON with any of the following keys (include only keys to be updated)

```json
    {
      "image_url": "String",
    }
```

### Delete restaurant
  * DELETE `/api/images/:imageid`

**Path Parameters:**
  * `imageid` image id

**Success Status Code:** `204`

