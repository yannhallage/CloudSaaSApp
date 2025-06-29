import {
    InputOTP,
    InputOTPGroup,
    InputOTPSeparator,
    InputOTPSlot,
} from "@/components/ui/input-otp"
import { useNavigate } from "react-router-dom"
import { useState, useContext } from "react"
import axios from "axios"
import { DonneesInscription } from "../context/authContext"
import toast from "react-hot-toast"

export function InputOTPDemo({ onChange }) {
    const navigate = useNavigate()
    const [valeur, setValeur] = useState('')
    const { numeroOTP } = useContext(DonneesInscription)

    const handleCompleteOTP = async (value) => {
        console.log("OTP saisi :", value);
        setValeur(value);

        try {
            const response = await axios.post('http://backend:3000/api/wavewallet/authentification/otp', {
                numeroTel: numeroOTP,
                codeOTP: value
            });

            console.log(response.data);
            localStorage.setItem('token', response.data.token);
            localStorage.setItem('utilisateurid', response.data.userId);
            toast.success("Authentification réussie");
            setTimeout(() => {
                navigate('/myaccount')
            }, 500)

            // Redirection si besoin :
            // navigate('/myaccount');
        } catch (error) {
            console.error("Erreur lors de la vérification OTP :", error);

            
            const msg = error.response?.data?.message || "Erreur lors de la vérification du code OTP";
            // toast.error(msg);
        }
    };


    return (
        <InputOTP
            maxLength={6}
            onChange={(value) => {
                if (onChange) onChange(value)
                if (value.length === 6) {
                    handleCompleteOTP(value)
                }
            }}
        >
            <InputOTPGroup>
                <InputOTPSlot index={0} />
                <InputOTPSlot index={1} />
                <InputOTPSlot index={2} />
            </InputOTPGroup>
            <InputOTPSeparator />
            <InputOTPGroup>
                <InputOTPSlot index={3} />
                <InputOTPSlot index={4} />
                <InputOTPSlot index={5} />
            </InputOTPGroup>
            {/* <Toaster
                position="top-right"
                reverseOrder={false}
            /> */}
        </InputOTP>
    )
}
