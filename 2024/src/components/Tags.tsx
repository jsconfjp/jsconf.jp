import React from "react"
import { styled } from "styled-components"

const TagList = styled.ul`
  display: flex;
  gap: 0.5rem;
  margin: 0;
  padding: 0;

  li {
    margin: 0;
    padding: 0;
    color: ${({ theme }) => theme.colors.text};
    font-family: ${({ theme }) => theme.fonts.header};
    font-size: 1.2rem;
    list-style: none;

    padding: 0.25em 0.5em 0.25em;
    margin: 0;

    background: rgba(255, 255, 255, 0.6);
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 0.5em;
  }

  @media print {
    display: none;
  }
`

type TagsProps = {
  children: string | null | false | Array<string | null | false>
}
function toArray<T>(input: T | T[]): T[] {
  return Array.isArray(input) ? input : [input]
}
export const Tags = ({ children }: TagsProps) => {
  const tags = toArray(children).filter(Boolean) as string[]
  if (tags.length === 0) {
    return null
  }
  return (
    <TagList>
      {tags.map(text => (
        <li key={text}>{text}</li>
      ))}
    </TagList>
  )
}
