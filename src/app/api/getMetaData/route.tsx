// This is your test secret API key.
import { SeatingInterface } from "@/app/interface/interface";
import { NextRequest, NextResponse } from "next/server";
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

export async function GET(req, res) {
  //converts the meta data needed 
  const dataString = await new Response(req.body).text();
  //converts to JSON to extract
  const data = JSON.parse(dataString);

  const paymentIntent = await stripe.paymentIntents.retrieve(`data`);
  // console.log(paymentIntent);
  
  return NextResponse.json({metadata: paymentIntent.metadata})
}