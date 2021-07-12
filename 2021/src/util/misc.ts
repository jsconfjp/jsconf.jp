export const times = {
  day1: {
    startsAt: new Date(2019, 10, 30, 12, 0),
    endsAt: new Date(2019, 10, 30, 21, 0)
  },
  day2: {
    startsAt: new Date(2019, 11, 1, 10, 0),
    endsAt: new Date(2019, 11, 1, 19, 30)
  }
}
export type Dates = keyof typeof times

export type Rooms = "A" | "B" | "C"
export const rooms: Rooms[] = ["A", "B", "C"]
