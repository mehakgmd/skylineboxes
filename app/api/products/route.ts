
import { NextRequest, NextResponse } from "next/server";
import { serverClient } from "@/sanity/lib/client";

export const dynamic = 'force-dynamic';

export async function GET(request: NextRequest) {
  try {
    const params = request.nextUrl.searchParams;

   const orignalData = await serverClient.fetch(
  `*[_type == "packagingProduct"]`
);


    console.log('✅ Fetched products:', orignalData.length);
    console.log('📦 First product:', orignalData[0]);

    if (params.has("start") && params.has("end")) {
      const start = Number(params.get("start"));
      const end = Number(params.get("end"));

      if (!isNaN(start) && !isNaN(end) && orignalData[start]) {
        const productArray = orignalData.slice(start, end);
        return NextResponse.json({ productArray });
      }

      return NextResponse.json({ productArray: "Not found" });
    }

    return NextResponse.json({ orignalData });
  } catch (error) {
    console.error('❌ Error:', error);
    return NextResponse.json({ error: String(error) }, { status: 500 });
  }
}
