
import * as React from "react"

import { motion } from "framer-motion"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios";

import { RotatingLines } from "react-loader-spinner"
import toast, { Toaster } from 'react-hot-toast';
import { DonneesInscription } from "../context/authContext"
// import { DrawerDemo } from "../myComponents/DrawerDemo"


const Informations = () => {
    const [nom, setNom] = useState("")
    const [prenom, setPrenom] = useState("")
    const [ville, setVille] = useState("")
    const [motDePasse, setMotDePasse] = useState("")
    const [motDePasseConfirm, setmotDePasseConfirm] = useState("")
    const navigate = useNavigate()
    const [tstButton] = useState("Suivant")
    const { telephone_personne } = React.useContext(DonneesInscription)


    const handleSubmit = () => {
        if (!nom == '' && !prenom == '' && !ville == '' && !motDePasse == '' && !motDePasseConfirm == '') {
            if (motDePasse === motDePasseConfirm) {
                let sold = 0;
                // inscriptionDefinitive
                axios.post(`http://backend:3000/api/wavewallet/inscription/definitive`, {

                    numeroTel: telephone_personne,
                    name: nom,
                    prenom: prenom,
                    sold: sold,
                    ville: ville,
                    motdepasse: motDePasse
                }, {
                    headers: {
                        'Authorization': `Bearer ${localStorage.getItem('token')}`
                    }
                })
                    .then(response => {
                        console.log(response.data);
                        const { token } = response.data
                        const userId = response.data.userId;
                        if (userId) {
                            // setInformation_id(userId)
                            localStorage.setItem('utilisateurid', userId);
                        }
                        localStorage.setItem('token', token);
                        console.log(token)
                        toast.success("Compte créé avec succès !");
                        setTimeout(() => navigate('/myaccount'), 2000);
                    })
                    .catch(error => {
                        console.error("Erreur lors de la création du compte :", error);
                        toast.error("Erreur lors de la création du compte.");
                    });
            } else {
                toast.error("Les mots de passe ne correspondent pas.");
            }
        } else {
            toast.error("Veuillez remplir tous les champs.");
        }
    };

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
                        <Button variant="ghost" onClick={() => navigate('/inscription')}>
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
                        Configuration du profil
                    </div>

                    <div className="space-y-4">
                        <Input
                            type="text"
                            placeholder="Votre Nom"
                            className="w-full"
                            value={nom}
                            onChange={(e) => setNom(e.target.value)}
                        />
                        <Input
                            type="text"
                            placeholder="Votre Prenom"
                            className="w-full"
                            value={prenom}
                            onChange={(e) => setPrenom(e.target.value)}
                        />
                        <Input
                            type="text"
                            placeholder="Ville"
                            className="w-full"
                            value={ville}
                            onChange={(e) => setVille(e.target.value)}
                        />
                        <Input
                            type="password"
                            placeholder="Crée un mot de passe "
                            className="w-full"
                            value={motDePasse}
                            onChange={(e) => setMotDePasse(e.target.value)}
                        />
                        <Input
                            type="password"
                            placeholder="Confirmez le mot de passe"
                            className="w-full"
                            value={motDePasseConfirm}
                            onChange={(e) => setmotDePasseConfirm(e.target.value)}
                        />

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
                <Toaster
                    position="top-right"
                    reverseOrder={false}
                />
            </div>
        </section>
    )
}

export default Informations
