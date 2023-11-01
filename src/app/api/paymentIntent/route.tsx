// This is your test secret API key.
import { SeatingInterface } from "@/app/interface/interface";
import { NextRequest, NextResponse } from "next/server";
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

const calculateOrderAmount = (data) => {
  // Calculate the order total on the server to prevent
  // people from directly manipulating the amount on the client
  const seatData : SeatingInterface[] = data.seats;

  let price : number = 0;
  for (let i : number =0; i < seatData.length; i++) {
    price += seatData[i].price;
  }

  //return price is presented in cents
  return price * 100;
};

export async function POST(req, res) {

  //converts the meta data needed 
  const dataString = await new Response(req.body).text();
  //converts to JSON to extract
  const data = JSON.parse(dataString);

  const seatString= JSON.stringify(data.seats);
  const showIdString = JSON.stringify(data.showId);
  const titleString= JSON.stringify(data.showTitle);
  const hallString = JSON.stringify(data.showHall);
  const showDateString = JSON.stringify(data.showDate);
  const showTimeString = JSON.stringify(data.showTime);


  const paymentIntent = await stripe.paymentIntents.create({
    amount: calculateOrderAmount(data),
    currency: "sgd",

    automatic_payment_methods: {
      enabled: true,
    },
    metadata: {
      seat: seatString,
      showId: showIdString,
      showTitle: titleString,
      showHall: hallString ,
      showDate:showDateString,
      showTime: showTimeString,
    }
  });
  // console.log(paymentIntent.id);
  
  return NextResponse.json({clientSecret:paymentIntent.client_secret, id:paymentIntent.id})
}