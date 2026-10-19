import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, firstName, researchFocus } = body;

    if (!email || !email.includes("@")) {
      return NextResponse.json(
        { error: "A valid email address is required." },
        { status: 400 }
      );
    }

    // In production, integrate with ConvertKit, Mailchimp, or Beehiiv
    console.log("Captured genealogy research lead:", {
      email,
      firstName,
      researchFocus,
      createdAt: new Date().toISOString(),
    });

    return NextResponse.json({
      success: true,
      message: "Lead successfully recorded. Archival starter kit dispatched.",
      downloadUrl: "/api/download-starter-kit",
    });
  } catch (error) {
    console.error("Lead capture error:", error);
    return NextResponse.json(
      { error: "Internal server error." },
      { status: 500 }
    );
  }
}
