import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const data = await request.json();

    const { name, email, phone, service, message } = data;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Please provide your name, email, and message." },
        { status: 400 }
      );
    }

    // In production, send email to pranabeautyandwellness@gmail.com
    console.log("=== NEW CONTACT INQUIRY RECEIVED ===", {
      name,
      email,
      phone,
      service,
      message,
      timestamp: new Date().toISOString()
    });

    return NextResponse.json(
      {
        success: true,
        message: "Thank you for reaching out to Prana Beauty & Wellness. A team member will contact you shortly."
      },
      { status: 200 }
    );
  } catch (err: any) {
    return NextResponse.json(
      { error: "Internal server error. Please try again or call (303) 304-8077." },
      { status: 500 }
    );
  }
}
