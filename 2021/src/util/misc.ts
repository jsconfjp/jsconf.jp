export const times = {
  day1: {
    startsAt: new Date(2021, 0, 1, 0),
    endsAt: new Date(2021, 0, 1, 2)
  }
}
export type Dates = keyof typeof times

export type Rooms = "A" | "B"
export const rooms: Rooms[] = ["A", "B"]
