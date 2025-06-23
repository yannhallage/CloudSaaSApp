import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { DonneesInscription } from "../context/authContext"
import { useContext, useEffect, useState } from "react"
import toast from 'react-hot-toast';
import { SelectDemoSend } from "./SelectDemoSend"


export function Addnumber() {
    const { ajouterNumero, setAjouterNumero } = useContext(DonneesInscription)
    const [numeroAjouter, setNumeroAjouter] = useState('')

    useEffect(() => {
        console.log(ajouterNumero)
    }, [ajouterNumero])
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="outline">
                    Ajouter Numero
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
                <DialogHeader>
                    <DialogTitle>Ajouter un numero de téléphone</DialogTitle>
                    <DialogDescription>
                        Vous pouvez ajouter un numero de téléphone pour effectuer la transaction.
                    </DialogDescription>
                </DialogHeader>
                <div className="flex items-center gap-2">
                    <div className="grid flex-1 gap-2">
                        <Label htmlFor="link" className="sr-only">
                            Link
                        </Label>
                        <Input
                            type="text"
                            value={numeroAjouter}
                            onChange={(e) => setNumeroAjouter(e.target.value)}
                            placeholder="+225 0747170370"
                        />
                    </div>
                </div>
                <DialogFooter className="sm:justify-start">
                    <DialogClose asChild>
                        <Button type="button" 
                            onClick={() => {
                                if (numeroAjouter.trim()) {
                                    setAjouterNumero((prev) => [...prev, numeroAjouter.trim()])
                                    setNumeroAjouter('')
                                    toast.success('Numéro ajouté avec succès')
                                    // onOpenChange(false)
                                } else {
                                    toast.error('Veuillez saisir un numéro de téléphone')
                                }
                            }}

                        >
                            Ajouter

                        </Button>
                    </DialogClose>
                </DialogFooter>
            </DialogContent>
        </Dialog >
    )
}
