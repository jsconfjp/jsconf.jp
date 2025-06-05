import { describe, it, expect } from "vitest";
import { generateTimeSlots } from "./generateTimeSlots";

describe("generateTimeSlots", () => {
  it("should generate time slots in 5-minute intervals", () => {
    const slots = generateTimeSlots();

    // スロット数を確認（開始時間から終了時間まで5分刻み）
    expect(slots.length).toBeGreaterThan(0);

    // 5分刻みになっているかチェック
    for (let i = 1; i < slots.length; i++) {
      expect(slots[i] - slots[i - 1]).toBe(5);
    }

    // 最初のスロットが09:30 (570分) であることを確認
    expect(slots[0]).toBe(570); // 9:30
  });
});
