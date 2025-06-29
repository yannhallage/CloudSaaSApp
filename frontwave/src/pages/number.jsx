import { motion } from "framer-motion"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { RotatingLines } from "react-loader-spinner"
import axios from "axios";
import toast, { Toaster } from 'react-hot-toast';
import { DrawerDemo } from "../myComponents/DrawerDemo"
import { Label } from "@/components/ui/label"
import { SelectDemo } from "../myComponents/SelectDemo"
import { DonneesInscription } from "../context/authContext"


const NumberPhone = () => {
    const [numero, setNumero] = useState("")
    const { ajouterNumero, setAjouterNumero, codeOTP_, setCodOTP_, telephone_personne,
        setTelephone_personne } = useContext(DonneesInscription)
    const [justTest, setJustTest] = useState(false)
    const navigate = useNavigate()
    const [tstButton, setTstButton] = useState("Suivant")


    const notify = (justAnText) => toast.error(justAnText)

    const handleSubmit = () => {
        if (numero.trim() === "") {
            notify("Veuillez entrer un numero")
            return
        }

        setTstButton(<RotatingLines />)
        setTimeout(() => {
            console.log("Email:", numero)
            SendingDonnee(numero)
            setAjouterNumero(numero)
            setTelephone_personne(numero)
            setTstButton('Suivant')
        }, 2000)
        setJustTest(false)

    }
    useEffect(() => {
        console.log(codeOTP_)
    }, [codeOTP_])

    // const SendingDonnee = (donneeInscription) => {
    //     axios.post(`http://192.168.57.65:8080/users/register/send-otp?numero=%2B${donneeInscription}`, {
    //         headers: {
    //             "Content-Type": "application/json"
    //         }
    //     })
    //         .then(response => {
    //             console.log('Donnée envoyée', response.data)
    //         })
    //         .catch(error => {
    //             console.log("une erreur au niveau de l'auth : ", error)
    //         })
    // }

    const SendingDonnee = (donneesInscription) => {
        axios.post(`http://backend:3000/api/wavewallet/inscription/definitive/numero`, {
            numeroTel: donneesInscription
        }, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        })
            .then(response => {
                setJustTest(true)
                console.log('Donnée envoyée', response.data)
                setCodOTP_(response.data.codeOTP)
            })
            .catch(error => {
                console.log("une erreur au niveau de l'authentification : ", error)
                toast.error(error.response.data.message)
            })
    }
    return (
        <section>
            <div className="min-h-screen flex justify-center items-center bg-[#f5f5f5] px-4">
                <motion.div
                    className="bg-white rounded-xl shadow-md p-6 w-full max-w-sm space-y-6"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="flex justify-between items-start">
                        <Button variant="ghost" onClick={() => navigate('/')}>
                            ←
                        </Button>

                        <img
                            src="https://cdn.prod.website-files.com/62446230dcb514b828a6e237/677ed61188695f2316217fc5_Wave-2_0-logo-fullcolour-rgb.svg"
                            alt="Logo Wave"
                            className="w-20 h-20 ml-11"
                        />

                        <div className="text-sm text-gray-500 flex items-center gap-1">
                            🇨🇮
                            <select className="bg-transparent focus:outline-none">
                                <option>Français</option>
                                <option>English</option>
                            </select>
                        </div>
                    </div>

                    <div className="text-center text-xl">
                        Numéro de téléphone
                    </div>

                    <div className="space-y-4">
                        <div className="flex">
                            <SelectDemo />
                            <Input
                                type="text"
                                placeholder="Numéro de téléphone"
                                className="w-full"
                                maxlength={10}
                                value={numero}
                                onChange={(e) => setNumero(e.target.value)}
                            />
                        </div>

                        <Button
                            className="bg-blue-500 hover:bg-blue-700 w-full"
                            onClick={handleSubmit}
                        >
                            {
                                tstButton
                            }
                        </Button>
                    </div>
                </motion.div>
            </div>

            <DrawerDemo
                tester={justTest}
            />
            <Toaster
                position="top-right"
                reverseOrder={false}
            />
        </section>
    )
}

export default NumberPhone
