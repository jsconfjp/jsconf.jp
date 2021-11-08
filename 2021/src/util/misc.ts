export const times = {
  day1: {
    startsAt: new Date(2021, 10, 27),
    endsAt: new Date(2021, 10, 27)
  }
}
export type Dates = keyof typeof times

export type Rooms = "A" | "B"
export const rooms: Rooms[] = ["A", "B"]
