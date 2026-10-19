import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { productId, couponCode } = body;

    // Simulate LemonSqueezy / Stripe checkout session URL
    // Ready to wire with process.env.LEMONSQUEEZY_API_KEY or process.env.STRIPE_SECRET_KEY
    const isTripwireDiscount = couponCode === "OTO40";

    return NextResponse.json({
      success: true,
      checkoutUrl: `https://checkout.familyrootshub.com/order?product=${productId || "genealogy-research-binder"}${
        isTripwireDiscount ? "&discount=OTO40" : ""
      }`,
      message: "Ready for payment gateway redirection.",
    });
  } catch (error) {
    console.error("Checkout simulation error:", error);
    return NextResponse.json(
      { error: "Internal checkout error." },
      { status: 500 }
    );
  }
}
