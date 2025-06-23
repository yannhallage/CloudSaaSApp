import * as React from "react"
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

export function SelectDemo() {
    return (
        <Select>
            <SelectTrigger className="w-[100px]">
                <SelectValue placeholder="Indicatif" />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    <SelectLabel>Afrique de l'ouest</SelectLabel>
                    <SelectItem value="+225">+225 </SelectItem>
                    <SelectItem value="+221">+221</SelectItem>
                    <SelectItem value="+223">+223</SelectItem>
                    <SelectItem value="+226">+226</SelectItem>
                    <SelectItem value="+228">+228</SelectItem>
                </SelectGroup>
            </SelectContent>
        </Select>
    )
}
