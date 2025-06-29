import { motion } from "framer-motion"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import { RotatingLines } from "react-loader-spinner"
import axios from "axios"
import toast, { Toaster } from "react-hot-toast"
import { DrawerDemo } from "../myComponents/DrawerDemo"
import { SelectDemo } from "../myComponents/SelectDemo"
import { DonneesInscription } from "../context/authContext"

const NumberPhone = () => {
    const [numero, setNumero] = useState("")
    const { ajouterNumero, setAjouterNumero, codeOTP_, setCodOTP_, telephone_personne, setTelephone_personne } = useContext(DonneesInscription)
    const [justTest, setJustTest] = useState(false)
    const navigate = useNavigate()
    const [tstButton, setTstButton] = useState("Suivant")

    const notify = (message) => toast.error(message)

    const handleSubmit = () => {
        if (numero.trim() === "") {
            notify("Veuillez entrer un numéro")
            return
        }

        setTstButton(<RotatingLines width="20" strokeColor="#fff" />)

        // Stocker les données
        setAjouterNumero(numero)
        setTelephone_personne(numero)

        // Appeler le backend
        SendingDonnee(numero)
    }

    const SendingDonnee = async (donneesInscription) => {
        try {
            const response = await axios.post(
                `${import.meta.env.VITE_API_URL}/api/wavewallet/inscription/definitive/numero`,
                { numeroTel: donneesInscription },
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("token")}`,
                    },
                }
            )

            // OTP reçu avec succès
            const code = response.data.codeOTP
            setCodOTP_(code)
            setJustTest(true)
            toast.success("OTP envoyé avec succès !")
            toast.success(`Votre code est : ${code}`)
            setTstButton("Suivant")
            setTimeout(() => {

            }, 3000)

        } catch (error) {
            const message = error?.response?.data?.message || "Erreur lors de l'envoi du numéro"
            toast.error(message)
            setTstButton("Suivant")
        }
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
                        <Button variant="ghost" onClick={() => navigate("/")}>
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

                    <div className="text-center text-xl">Numéro de téléphone</div>

                    <div className="space-y-4">
                        <div className="flex">
                            <SelectDemo />
                            <Input
                                type="text"
                                placeholder="Numéro de téléphone"
                                className="w-full"
                                maxLength={10}
                                value={numero}
                                onChange={(e) => setNumero(e.target.value)}
                            />
                        </div>

                        <Button
                            className="bg-blue-500 hover:bg-blue-700 w-full"
                            onClick={handleSubmit}
                        >
                            {tstButton}
                        </Button>
                    </div>
                </motion.div>
            </div>

            <DrawerDemo tester={justTest} />
            <Toaster position="top-right" reverseOrder={false} />
        </section>
    )
}

export default NumberPhone
