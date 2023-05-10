import Image from 'next/image'

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"


import prisma from './lib/prisma'
import {months} from './lib/dateUtils'
export const revalidate = 60

export default async function Home() {
  const people = await prisma.person.findMany({})
  return (

    <Table>
  <TableCaption>A list of your relationships.</TableCaption>
  <TableHeader>
    <TableRow>
      <TableHead>Full Name</TableHead>
      <TableHead>Birthday</TableHead>
      <TableHead>Group</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    {people.map((person) => (
    <TableRow key={person.id}>
      <TableCell>{person.first_name} {person.last_name}</TableCell>
      <TableCell>{person.birth_day} {person.birth_month ? months[person.birth_month - 1] : null} {person.birth_year}</TableCell>
      <TableCell><Badge>{person.group}</Badge></TableCell>
    </TableRow>
    ))}
  </TableBody>
</Table>

  )
}
