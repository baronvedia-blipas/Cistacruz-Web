import { NextRequest, NextResponse } from "next/server";
import { revalidatePath } from "next/cache";

/**
 * On-demand ISR revalidation endpoint.
 * Strapi can call this webhook when content changes.
 *
 * POST /api/revalidate
 * Body: { "secret": "...", "paths": ["/", "/proyectos", "/blog"] }
 *
 * Or call without paths to revalidate everything.
 */
export async function POST(req: NextRequest) {
  const body = await req.json();
  const secret = body.secret;

  if (secret !== process.env.REVALIDATION_SECRET) {
    return NextResponse.json({ error: "Invalid secret" }, { status: 401 });
  }

  const paths: string[] = body.paths || [
    "/",
    "/nosotros",
    "/servicios",
    "/proyectos",
    "/blog",
    "/contacto",
  ];

  for (const path of paths) {
    revalidatePath(path);
  }

  return NextResponse.json({
    revalidated: true,
    paths,
    timestamp: Date.now(),
  });
}
