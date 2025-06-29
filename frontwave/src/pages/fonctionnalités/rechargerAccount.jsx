"use client"
import { RotatingLines } from "react-loader-spinner"

import toast, { Toaster } from 'react-hot-toast';
import { Checkbox } from "@/components/ui/checkbox";
import { motion } from "framer-motion";
import { useContext, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { DonneesInscription } from "../../context/authContext";
import axios from "axios";

const RechargerAccount = () => {
    const { telephone_personne, setTelephone_personne, montantSold,
        setMontantSold } = useContext(DonneesInscription);
    const [changementDeComposent, setChangementDeComposent] = useState(<MethodRechargement onSelect={() => setChangementDeComposent(<MethodPaymentAgree telephone_={telephone_personne} />)} />);

    useEffect(() => {
        if (telephone_personne) {
            console.log(telephone_personne)
        }
    }, [telephone_personne])
    return (
        <>
            {changementDeComposent}
        </>
    );
};

export default RechargerAccount;

const MethodRechargement = ({ onSelect }) => {
    const [selectedMethod, setSelectedMethod] = useState();

    const methods = [
        {
            id: 1,
            label: "E-Recharge",
            img: "https://www.e-recharge.info/assets/images/e-charge-208x206.jpg",
            other: 'Carte par défaut'
        },
        {
            id: 2,
            label: "Carte MasterCard se terminant par 8910",
            img: "https://www.mastercard.us/content/dam/public/mastercardcom/na/us/en/homepage/Home/mc-logo-52.svg",
            other: 'non disponible'
        },
    ];

    return (
        <motion.div
            className="p-6 rounded-2xl space-y-6 bg-gray-50 shadow-lg max-w-xl mx-auto border border-gray-100"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <h1 className="text-xl font-bold text-gray-800">Méthode de paiement</h1>

            <div className="space-y-4 rounded-xl bg-white p-6 shadow-sm">
                {methods.map((method) => (
                    <div
                        key={method.id}
                        className={`space-x-4 cursor-pointer transition duration-300 ease-in-out flex rounded-xl p-4 border ${selectedMethod === method.id ? "border-blue-600" : "border-gray-200"
                            }`}
                        onClick={() => setSelectedMethod(method.id)}
                    >
                        <div className="mt-2">
                            <img
                                src={method.img}
                                alt={method.label}
                                width={70}
                                height={70}
                                className="border p-3 rounded-md"
                            />
                        </div>
                        <div>
                            <div className="text-lg font-medium">{method.label}</div>
                            <div className="text-sm text-gray-600">Plus de 3445B d’espace cloud</div>
                            <div className="text-sm text-blue-600">{method.other}</div>
                        </div>
                    </div>
                ))}

                <div className="text-center pt-2">
                    <Button
                        className={`w-full py-4 font-semibold text-white transition rounded-lg ${selectedMethod ? "bg-blue-600 hover:bg-blue-700" : "bg-gray-300 cursor-not-allowed"
                            }`}
                        onClick={() => selectedMethod && onSelect()}
                        disabled={!selectedMethod}
                    >
                        Continuer
                    </Button>
                </div>
            </div>
        </motion.div>
    );
};


const MethodPaymentAgree = ({ telephone_ }) => {
    const [montant, setMontant] = useState("");
    const { montantSold,
        setMontantSold } = useContext(DonneesInscription);
    const [buttonChange, setButtonchange] = useState('Se recharger')
    const presetMontants = ["1 000", "5 000", "10 000", "25 000"];

    const handlePresetClick = (val) => {
        const numeric = val.replace(/\s/g, "");
        setMontant(numeric);
    };

    return (
        <motion.div
            className="p-6 rounded-2xl space-y-6 bg-gray-50 shadow-lg max-w-xl mx-auto border border-gray-100"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <h1 className="text-xl font-bold text-gray-800">Rechargement</h1>

            <div className="space-y-6 rounded-xl bg-white p-6 shadow-sm">

                <div className="space-y-2">
                    <p className="text-sm text-gray-600">Votre numéro</p>
                    <div className="flex items-center space-x-3">
                        <input
                            type="text"
                            value={telephone_}
                            disabled
                            className="w-full border border-gray-300 rounded-lg px-4 py-2 bg-gray-100 text-gray-600 cursor-not-allowed"
                        />
                    </div>
                </div>

                <div className="space-y-2 text-center">
                    <p className="text-sm text-gray-600">Montant à envoyer</p>
                    <input
                        type="number"
                        value={montant}
                        onChange={(e) => setMontant(e.target.value)}
                        placeholder="Ex: 5000"
                        className="w-full border border-gray-300 rounded-lg px-4 py-2 text-center focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <div className="flex flex-wrap gap-2 justify-center">
                    {presetMontants.map((item, index) => (
                        <button
                            key={index}
                            type="button"
                            className="border border-gray-300 px-4 py-2 rounded-full text-sm bg-gray-50 hover:bg-blue-50 hover:border-blue-400 hover:text-blue-600 transition"
                            onClick={() => handlePresetClick(item)}
                        >
                            {item} FCFA
                        </button>
                    ))}
                </div>

                <div className="text-center pt-2">
                    <Button
                        className={`w-full py-4 font-semibold text-white transition rounded-lg ${montant ? "bg-blue-600 hover:bg-blue-700" : "bg-gray-300 cursor-not-allowed"
                            }`}
                        disabled={!montant}
                        onClick={
                            () => {
                                setButtonchange(
                                    <RotatingLines />
                                )
                                setTimeout(() => {
                                    setButtonchange("Se recharger")
                                    console.log(montant, telephone_)
                                    axios.put(`${import.meta.env.VITE_API_URL}/api/wavewallet/myaccount/Erecharge`, {
                                        numeroTel: telephone_,
                                        montant: montant
                                    }, {
                                        headers: {
                                            'Authorization': `Bearer ${localStorage.getItem('token')}`
                                        }
                                    })
                                        .then(response => {
                                            console.log(response.data)
                                        })
                                        .catch(error => {
                                            toast.error(error)
                                        })
                                    toast.success("votre rechargement a été effectuer")
                                    setMontantSold(parseInt(montant) + parseInt(montantSold))
                                }, 2000)
                            }
                        }
                    >
                        {
                            buttonChange
                        }
                    </Button>

                </div>
            </div>
        </motion.div>
    );
};
