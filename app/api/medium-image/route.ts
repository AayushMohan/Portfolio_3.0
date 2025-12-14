import { NextResponse } from "next/server";

export const runtime = "edge";

export async function GET(req: Request) {
 const { searchParams } = new URL(req.url);
 const url = searchParams.get("url");
 if (!url) {
  return new NextResponse("Missing url", { status: 400 });
 }

 try {
  const res = await fetch(url, {
   // Prevent referrer leakage
   headers: {
    Referer: "",
    "User-Agent":
     "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
   },
  });

  if (!res.ok) {
   return new NextResponse("Upstream failed", { status: res.status });
  }

  const contentType = res.headers.get("content-type") || "image/jpeg";
  const body = await res.arrayBuffer();

  const response = new NextResponse(body, {
   status: 200,
   headers: {
    "content-type": contentType,
    // Cache for 1 day on Vercel CDN; allow browsers to cache too
    "cache-control": "public, max-age=86400, s-maxage=86400, stale-while-revalidate=604800",
   },
  });

  return response;
 } catch (e) {
  return new NextResponse("Fetch error", { status: 500 });
 }
}
