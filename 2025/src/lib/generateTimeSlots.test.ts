import { describe, it, expect } from "vitest";
import {
  generateTimeSlots,
  TIME_SLOT_INTERVAL_MINUTES,
} from "./generateTimeSlots";

describe("generateTimeSlots", () => {
  it("should generate time slots in configured intervals", () => {
    const slots = generateTimeSlots();

    // スロット数を確認（開始時間から終了時間まで設定された間隔刻み）
    expect(slots.length).toBeGreaterThan(0);

    // 設定された間隔になっているかチェック
    for (let i = 1; i < slots.length; i++) {
      expect(slots[i] - slots[i - 1]).toBe(TIME_SLOT_INTERVAL_MINUTES);
    }

    // 最初のスロットが09:30 (570分) であることを確認
    expect(slots[0]).toBe(570); // 9:30
  });

  it("should throw error for empty sessions array", () => {
    expect(() => generateTimeSlots([])).toThrow(
      "Sessions array cannot be empty for time slot generation"
    );
  });

  it("should use default SCHEDULE when undefined sessions provided", () => {
    // undefinedを渡してもデフォルトパラメータによりSCHEDULEが使用される
    const slots = generateTimeSlots(undefined);
    expect(slots.length).toBeGreaterThan(0);
  });

  it("should throw error for invalid time range", () => {
    // 通常のセッションの開始と終了時間を逆転させてテスト
    const invalidSessions = [
      {
        kind: "break" as const,
        track: "all" as const,
        day: "1" as const,
        startTime: "11:40", // 同じ時間に設定
        endTime: "11:40", // 同じ時間に設定（start >= end）
      },
    ];

    expect(() => generateTimeSlots(invalidSessions)).toThrow(
      "Invalid time range: start time must be before end time"
    );
  });
});
