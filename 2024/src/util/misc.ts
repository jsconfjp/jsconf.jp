export const times = {
  day1: {
    startsAt: new Date(2024, 10, 23, 9, 30),
    endsAt: new Date(2024, 10, 23, 20),
  },
}
export type Dates = keyof typeof times

export type Rooms = "A" | "B" | "C" | "D"
export const rooms: Rooms[] = ["A", "B", "C", "D"]
