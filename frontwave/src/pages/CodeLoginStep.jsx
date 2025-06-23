import { motion } from "framer-motion"
import { useNavigate } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { DonneesInscription } from "../context/authContext"
import { useContext } from "react"

const CodeLoginStep = () => {
    const navigate = useNavigate()
    const { numeroOTP, setNumeroOTP } = useContext(DonneesInscription)
    return (
        <div className="min-h-screen flex justify-center items-center bg-[#f5f5f5] px-4">
            <motion.div
                className="bg-white rounded-xl shadow-md p-6 w-full max-w-sm space-y-6"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                {/* Header email */}
                <div className="text-sm text-[#1f1f1f] mb-4 flex justify-between items-center border-b-2 pb-2">
                    <span className="font-medium">{numeroOTP}</span>
                    <a href="#" className="text-[#0070ba] text-sm hover:underline">Ce n’est pas vous ?</a>
                </div>

                <div className="flex justify-center">
                    <img
                        src="https://cdn.prod.website-files.com/62446230dcb514b828a6e237/677ed61188695f2316217fc5_Wave-2_0-logo-fullcolour-rgb.svg"
                        alt="Logo Wave"
                        className="w-40 h-20"
                    />
                </div>
                <div className="">
                    <p className="text-center text-xl text-gray-600 mb-4">Connectez-vous rapidement avec un code à usage unique.</p>
                </div>

                {/* Numéro */}
                <p className="text-center text-[19px] mb-4 text-[#1f1f1f]">
                    📱 Mobile (0XX) XXX-0370
                </p>

                {/* Bouton code */}
                <Button className="w-full bg-[#0070ba] text-white rounded-full font-semibold hover:bg-[#005c9c] mb-4"
                onClick={()=>{
                    navigate('/verification/otp')
                }}
                >
                    Obtenir un code
                </Button>

                {/* Autre méthode */}
                <div className="text-center mb-4">
                    <a href="#" className="text-[#0070ba] text-sm hover:underline">Choisir une autre méthode</a>
                </div>

                {/* Info */}
                <p className="text-xs text-gray-500 text-center leading-snug">
                    En sélectionnant Obtenir un code, vous confirmez avoir l’autorisation d’utiliser ce numéro de téléphone et acceptez de recevoir des SMS. Des frais peuvent être appliqués.
                </p>

                {/* Langue */}
                <div className="mt-6 text-sm text-gray-500 flex items-center justify-center gap-1">
                    🇨🇮
                    <select className="bg-transparent focus:outline-none">
                        <option>Français</option>
                        <option>English</option>
                    </select>
                </div>
            </motion.div>
        </div>
    )
}

export default CodeLoginStep
