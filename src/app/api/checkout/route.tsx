const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
import { NextApiRequest, NextApiResponse,  } from 'next';
import { NextResponse, NextRequest } from 'next/server';
import { Stripe } from 'stripe';
import { headers } from 'next/headers'

export async function POST(req : NextApiRequest, res: NextApiResponse) {
  const ticketData = await new Response(req.body).text();
  let valueToJson = JSON.parse(ticketData);
  const url = headers().get('origin');

  if (req.method === "POST") {
    try {
      const session = await stripe.checkout.sessions.create({
        line_items: [
          {
            price: 'price_1O3BT5DkLPcWi5RDpMU888aj',
            quantity: valueToJson.amount,
          }
        ],
        // expires_at: expirationTime, // Set the expiration time
        mode: 'payment',
        success_url: `${url}/paymentSummary?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${url}/1`,
      });
      
      return NextResponse.json(session.url, {status:200});

    } catch (err: any) {
      res.status;
    }
  } else {
    // res.setHeader('Allow', 'POST');
    // res.status(405).end('Method Not Allowed');
  }
  return NextResponse.json({status:405});

}



  // const expirationTime = Math.floor(Date.now() / 1000) + 10; // 600 seconds = 10 minutes
  // let seatString : string = "";
  // valueToJson.seat.map((data : any) => {
  //   seatString += data.rowCharacter + data.columnNumber + "";
  // })
  // console.log(seatString);