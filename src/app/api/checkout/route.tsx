const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
import { NextApiRequest, NextApiResponse,  } from 'next';
import { NextResponse, NextRequest } from 'next/server';
import { Stripe } from 'stripe';
import { headers } from 'next/headers'

export async function POST(req : NextApiRequest, res: NextApiResponse) {
  const ticketDataString = await new Response(req.body).text();
  const ticketDataJson = JSON.parse(ticketDataString);
  // console.log(ticketDataJson.showId);
  const url = headers().get('origin');
  const currentTimestamp : number = Math.floor(Date.now() / 1000); // Get the current Unix timestamp in seconds
  const futureTimestamp :number = currentTimestamp + 1800; // Add 5 seconds
  // console.log(currentTimestamp);
  
  if (req.method === "POST") {
    try {
      const session = await stripe.checkout.sessions.create({
        line_items: [
          {
            price: 'price_1O3BT5DkLPcWi5RDpMU888aj',
            quantity: ticketDataJson.amount,
          }
        ],
        // expires_at: expirationTime, // Set the expiration time
        mode: 'payment',
        success_url: `${url}/paymentSummary?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${url}/movieSeats/1`,
        metadata: {
            seatingData: `${ticketDataJson.seat}`,
            showId: `${ticketDataJson.showId}`,
        },
        expires_at:futureTimestamp 
      });
      // console.log(session.id);
      // console.log(session.url);
      return NextResponse.json({url: session.url}, {status:200});

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