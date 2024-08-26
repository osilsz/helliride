import { neon } from "@neondatabase/serverless";

// const posts = await sql("SELECT * FROM posts");

export async function POST(request: Request) {
  const sql = neon(`${process.env.BACKEND_URL}`);

  try {
    const { email, password } = await request.json();

    if (!email && !password) {
      return Response.json({
        error: "Missing email and password",
        status: 404,
      });
    }
    const responses =
      await sql`INSERT INTO users (email, password) VALUES (${email}, ${password})`;

    Response.json({ status: 200, data: responses });
  } catch (error) {
    console.error(error);
    Response.json({ error: "Failed to create post", status: 500 });
  }
}
