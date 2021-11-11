export const times = {
  day1: {
    startsAt: new Date(2021, 10, 27, 12),
    endsAt: new Date(2021, 10, 27, 21)
  }
}
export type Dates = keyof typeof times

export type Rooms = "A" | "B" | "C"
export const rooms: Rooms[] = ["A", "B", "C"]
