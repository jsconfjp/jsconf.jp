export const times = {
  day1: {
    startsAt: new Date(2022, 10, 26, 10),
    endsAt: new Date(2022, 10, 26, 21),
  },
}
export type Dates = keyof typeof times

export type Rooms = "A" | "B" | "C"
export const rooms: Rooms[] = ["A", "B", "C"]
