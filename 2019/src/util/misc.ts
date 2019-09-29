export const dates = {
  day1: new Date(2019, 10, 30),
  day2: new Date(2019, 11, 1),
}
export type Dates = keyof typeof dates

export type Rooms = "A" | "B" | "C"
export const rooms: Rooms[] = ["A", "B", "C"]
