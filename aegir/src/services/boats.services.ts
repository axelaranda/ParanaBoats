import { boats, type Boats as Boat } from "@/helper/boatsImages";

export async function getBoatById(id: string): Promise<Boat | null> {

  const asNum = Number(id);
  const byNum = Number.isFinite(asNum)
    ? boats.find((b) => typeof b.id === "number" && b.id === asNum)
    : undefined;

  if (byNum) return byNum;

  const byStr = boats.find((b) => String(b.id) === id);
  return byStr ?? null;

}

