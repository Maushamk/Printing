const axios = require("axios");

const apiKey = "test_163e5382-35c7-43ce-82c1-5ee1c6f84c26";
const prodigiBaseUrl = "https://api.sandbox.prodigi.com/v4.0/orders";

async function placeOrder() {
  const orderData = {
    merchantReference: "MyMerchantReference1",
    shippingMethod: "Standard",
    recipient: {
      name: "John Doe",
      address: {
        line1: "123 Main Street",
        line2: "Good Place",
        postalOrZipCode: "94103",
        countryCode: "US",
        townOrCity: "San Francisco",
        stateOrCounty: "CA",
      },
    },
    items: [
      {
        merchantReference: "item #1",
        sku: "GLOBAL-CAN-10x10",
        copies: 1,
        sizing: "fillPrintArea",
        attributes: { wrap: "ImageWrap" },
        assets: [
          {
            printArea: "default",
            url: "https://images.pexels.com/photos/60597/dahlia-red-blossom-bloom-60597.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          },
        ],
      },
    ],
  };

  try {
    const response = await axios.post(prodigiBaseUrl, orderData, {
      headers: {
        "X-API-Key": apiKey,
        "Content-Type": "application/json",
      },
    });

    console.log("Order created:", response.data);
  } catch (error) {
    console.error("Error creating order:", error.response.data);
  }
}

placeOrder();
