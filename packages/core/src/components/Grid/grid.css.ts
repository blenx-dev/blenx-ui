import { baseSprinkles } from "../../utils/sprinkles";

const spanEntries: Record<number, { gridColumn: string }> = {};
for (let i = 1; i <= 12; i++) {
  spanEntries[i] = { gridColumn: `span ${i} / span ${i}` };
}
export const gridSpanVariants = spanEntries;

export const gridItem = baseSprinkles({
  minWidth: "0",
});
