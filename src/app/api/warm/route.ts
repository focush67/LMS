import { dbConnect } from "@/lib/DBConnection";

export async function GET(request: Request) {
  await dbConnect();
  return Response.json(
    {
      message: "Warm Up Route Hit",
    },
    {
      status: 200,
    }
  );
}
