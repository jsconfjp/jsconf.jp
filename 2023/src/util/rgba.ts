const hexNum = (color: string, offset: number) =>
  parseInt(color.slice(offset, offset + 2), 16)

export const rgba = (c: string, alpha: number) =>
  `rgba(${hexNum(c, 1)}, ${hexNum(c, 3)}, ${hexNum(c, 5)}, ${alpha})`
