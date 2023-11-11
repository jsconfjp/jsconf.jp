export const times = {
  day1: {
    startsAt: new Date(2023, 10, 19, 10),
    endsAt: new Date(2023, 10, 19, 21),
  },
}
export type Dates = keyof typeof times

export type Rooms = "A" | "B" | "C" | "D"
export const rooms: Rooms[] = ["A", "B", "C", "D"]
