// // This is your test secret API key.
// import { NextResponse } from "next/server";
// const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

// export async function POST(req, res) {
//   const { items } = req.body;
//   console.log(items);
//   // Create a PaymentIntent with the order amount and currency
//   const paymentIntent = await stripe.paymentIntents.create({
//     amount: calculateOrderAmount(items),
//     currency: "eur",
//     // In the latest version of the API, specifying the `automatic_payment_methods` parameter is optional because Stripe enables its functionality by default.
//     automatic_payment_methods: {
//       enabled: true,
//     },
//   });

//   // res.send({
//   //   clientSecret: paymentIntent.client_secret,
//   // });
//   return NextResponse.json({clientSecret:paymentIntent.client_secret})
// }