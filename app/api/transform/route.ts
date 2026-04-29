import { NextRequest, NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";
import cloudinary from "@/lib/cloudinary";

export async function POST(req: NextRequest) {
  try {
    // 1. Check if the user is logged in
    const { userId } = await auth();

    if (!userId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    // 2. Process the transformation
    const { type, publicId, prompt } = await req.json(); // Using publicId is safer!

    let transformation = [];

    switch (type) {
      case "restore":
        transformation.push({ effect: "gen_restore" });
        break;
      case "remove-object":
        transformation.push({ effect: `gen_remove:prompt_${prompt}` });
        break;
      case "background-remove":
        transformation.push({ effect: "background_removal" });
        break;
      default:
        return NextResponse.json({ error: "Invalid type" }, { status: 400 });
    }

    const transformedUrl = cloudinary.url(publicId, {
      transformation: transformation,
    });

    return NextResponse.json({ url: transformedUrl });
  } catch (err) {
    return NextResponse.json({ error: "Transform failed" }, { status: 500 });
  }
}
