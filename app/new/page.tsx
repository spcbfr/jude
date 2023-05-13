import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Group } from "@prisma/client"
export default async function Page(){
    return (
        <main className="min-h-screen">
        <section className=" flex-col flex justify-center  min-h-screen items-center flex-nowrap">
            <h1 className="text-xl font-bold">Create a new relationship</h1>
            <form action="" className="flex gap-3 flex-col">
                
                <div>
                <Label htmlFor="firstName">First Name</Label>
                <Input type="text" name="firstName" />
                </div>

                <div>
                <Label htmlFor="lastName">Last Name</Label>
                <Input type="text" name="lastName" />
</div>
<div>
                <Label htmlFor="group">Groups</Label>
                
                <Select>
                <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Select Group" />
                </SelectTrigger>
                <SelectContent>
                    {Object.keys(Group).map((key, index) => (

                    <SelectItem value={key}>{key}</SelectItem>
                    ))}

                </SelectContent>
                </Select>
</div>
            </form>

        </section>
        </main>
    )
}