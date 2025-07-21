"use server"

import { readFile } from "fs/promises"
import { Work } from "./types"

export const fetchWorks = async (): Promise<Work[]> => {
  const result = await readFile("mock/works.json", { encoding: "utf8" })
  return result ? JSON.parse(result) : []
}

export const fetchWorkById = async (id: string): Promise<Work | undefined> => {
  const result = await readFile("mock/works.json", { encoding: "utf8" })
  const works: Work[] = result ? JSON.parse(result) : []
  return works.find((work) => work.id === id)
}
