import * as React from "react"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"

const transactions = Array.from({ length: 20 }).map((_, i) => ({
    id: i,
    name: `Utilisateur ${i + 1}`,
    amount: `${Math.floor(Math.random() * 100000)} FCFA`,
    date: new Date().toLocaleDateString("fr-FR"),
    avatar: "https://grafikart.fr/images/default.png",
}))

export function ScrollAreaDemo() {
    return (
        <ScrollArea className="h-96 w-full rounded-md  bg-white p-4">
            {/* <h4 className="mb-4 text-sm font-semibold">Transactions récentes</h4> */}
            {transactions.map((tx) => (
                <React.Fragment key={tx.id}>
                    <div className="flex justify-between items-center">
                        {/* Avatar + Nom */}
                        <div className="flex items-center space-x-4">
                            <img
                                src={tx.avatar}
                                width={45}
                                height={45}
                                alt="Avatar"
                                className="rounded-full"
                            />
                            <div>
                                <span className="block font-medium text-gray-800">{tx.name}</span>
                                <span className="text-sm text-gray-500">Transaction réussie</span>
                            </div>
                        </div>

                        {/* Montant + Date */}
                        <div className="text-right text-sm text-gray-700">
                            <span className="block font-bold">{tx.amount}</span>
                            <span className="text-gray-500">{tx.date}</span>
                        </div>
                    </div>
                    <Separator className="my-3" />
                </React.Fragment>
            ))}
        </ScrollArea>
    )
}
