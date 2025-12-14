import { NextResponse } from "next/server";

export const runtime = "edge";

function extractOgImage(html: string): string | null {
 const ogMatch = html.match(/<meta[^>]*property=["']og:image["'][^>]*content=["']([^"']+)["'][^>]*>/i);
 if (ogMatch && ogMatch[1]) return ogMatch[1];
 const twitterMatch = html.match(/<meta[^>]*name=["']twitter:image["'][^>]*content=["']([^"']+)["'][^>]*>/i);
 if (twitterMatch && twitterMatch[1]) return twitterMatch[1];
 const firstImg = html.match(/<img[^>]*src=["']([^"']+)["'][^>]*>/i);
 if (firstImg && firstImg[1]) return firstImg[1];
 return null;
}

export async function GET(req: Request) {
 const { searchParams } = new URL(req.url);
 const pageUrl = searchParams.get("url");
 if (!pageUrl) return new NextResponse("Missing url", { status: 400 });

 try {
  const res = await fetch(pageUrl, {
   headers: {
    Referer: "",
    "User-Agent":
     "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
    Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
   },
  });
  if (!res.ok) return new NextResponse("Upstream failed", { status: res.status });
  const html = await res.text();
  const img = extractOgImage(html);
  return NextResponse.json({ image: img }, { status: 200, headers: { "cache-control": "public, max-age=3600, s-maxage=3600" } });
 } catch (e) {
  return new NextResponse("Fetch error", { status: 500 });
 }
}
