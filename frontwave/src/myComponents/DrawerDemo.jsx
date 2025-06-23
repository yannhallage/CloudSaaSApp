"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"

import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer"
import { Input } from "@/components/ui/input"
import { Slider } from "@/components/ui/slider"
import { useNavigate } from "react-router-dom"
import { InputOTPDemo } from "./InputOTPDemo"
import axios from "axios";
import { DonneesInscription } from "../context/authContext"
import toast from "react-hot-toast"

export function DrawerDemo({ tester }) {
    const navigate = useNavigate()
    const { ajouterNumero, setAjouterNumero, codeOTP_, setCodOTP_ } = React.useContext(DonneesInscription)
    const [open, setOpen] = React.useState(false)
    const [value, setValue] = React.useState(50)

    React.useEffect(() => {
        if (tester) {
            setOpen(true)
        }
    }, [tester])

    const handleOTPChange = (value) => {
        setValue(value)
    }

    const handleSubmit = () => {
        console.log(ajouterNumero)
        // SendingDonnee(ajouterNumero, value)
        verificationDuCodeOTP(value)
        setOpen(false)
    }

    const verificationDuCodeOTP = (code) => {
        if (code && code === codeOTP_) {
            console.log("Verification du code OTP : ", code)
            navigate('/inscription/informations')
            toast.success(`code OTP correspond`)
        }else{
            toast.error(`code OTP incorrect !`)
        }
    }

    // const SendingDonnee = (donneeInscriptions, autreValeur) => {
    //     axios.post(`http://192.168.57.65:8080/otp/verify?numero=%2B${donneeInscriptions}&code=${autreValeur}`, {
    //         headers: {
    //             "Content-Type": "application/json"
    //         }
    //     })
    //         .then(response => {
    //             console.log('Donnée envoyée', response.data)
    //             navigate('/inscription/informations')
    //         })
    //         .catch(error => {
    //             console.log("une erreur au niveau de l'auth : ", error)
    //         })
    // }
    return (
        <Drawer open={open} onOpenChange={setOpen}>
            <DrawerTrigger asChild>
             
            </DrawerTrigger>
            <DrawerContent>
                <div className="mx-auto w-full max-w-sm">
                    <DrawerHeader>
                        <DrawerTitle>Connexion avec un code à usage unique</DrawerTitle>
                        <DrawerDescription>
                            Code envoyé a votre numéro.
                        </DrawerDescription>
                    </DrawerHeader>

                    <div className="p-4 space-y-4 ml-11">
                        <InputOTPDemo onChange={handleOTPChange} />
                    </div>

                    <DrawerFooter>
                        <Button onClick={handleSubmit}>Valider</Button>
                        <DrawerClose asChild>
                            <Button variant="outline">Annuler</Button>
                        </DrawerClose>
                    </DrawerFooter>
                </div>
            </DrawerContent>
        </Drawer>
    )
}
