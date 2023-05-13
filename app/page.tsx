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
      <TableHead>Creation Date</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    {people.map((person) => (
    <TableRow key={person.id}>
      <TableCell>{person.firstName} {person.lastName}</TableCell>
      <TableCell>{person.birthDay} {person.birthMonth ? months[person.birthMonth - 1] : null} {person.birthYear}</TableCell>
      <TableCell><Badge>{person.group}</Badge></TableCell>
      <TableCell><Badge>{person.createdAt.toString()}</Badge></TableCell>
    </TableRow>
    ))}
  </TableBody>
</Table>

  )
}
