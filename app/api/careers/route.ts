import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const data = await request.json();

    const { name, email, phone, specialty, interestType, yearsExperience, portfolio, message } = data;

    if (!name || !email || !specialty || !message) {
      return NextResponse.json(
        { error: "Please fill in all required fields (name, email, specialty, and note)." },
        { status: 400 }
      );
    }

    console.log("=== NEW CAREERS / BOOTH RENTAL APPLICATION ===", {
      name,
      email,
      phone,
      specialty,
      interestType,
      yearsExperience,
      portfolio,
      message,
      timestamp: new Date().toISOString()
    });

    return NextResponse.json(
      {
        success: true,
        message: "Thank you for your interest in joining Prana Beauty & Wellness. Jessica and our leadership team will review your application and get in touch!"
      },
      { status: 200 }
    );
  } catch (err: any) {
    return NextResponse.json(
      { error: "Error submitting application. Please email pranabeautyandwellness@gmail.com directly." },
      { status: 500 }
    );
  }
}
