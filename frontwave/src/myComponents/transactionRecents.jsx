import { useEffect, useState, useContext } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import { DonneesInscription } from "../context/authContext";

const TransactionRecents = () => {
    const { telephone_personne, setTelephone_personne } = useContext(DonneesInscription);
    const [transactions, setTransactions] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (telephone_personne) {
            axios.get(`${import.meta.env.VITE_API_URL}/api/wavewallet/myaccount/transactions/${telephone_personne}`, {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                }
            })
                .then(response => {
                    console.log(response.data.transactions)
                    setTransactions(response.data.transactions || []);
                    setIsLoading(false);
                })
                .catch(error => {
                    console.log(error);
                    setIsLoading(false);
                });
        }
    }, [telephone_personne]);


    return (
        <div className="p-6 bg-white shadow-xl rounded-2xl space-y-6">
            <h1 className="text-2xl font-bold text-gray-800">Transactions récentes</h1>

            <div className="space-y-4">
                {
                    isLoading ? (
                        <p className="text-gray-400">Chargement...</p>
                    ) : transactions.length > 0 ? (
                        transactions.map((item, index) => (
                            <motion.div
                                key={index}
                                className="flex justify-between items-center p-4 bg-gray-50 hover:bg-gray-100 transition rounded-xl shadow-sm"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: index * 0.05 }}
                            >
                                <div className="flex items-center space-x-4">
                                    <img
                                        src="https://grafikart.fr/images/default.png"
                                        alt="Avatar"
                                        className="w-12 h-12 rounded-full object-cover"
                                    />
                                    <div>
                                        <p className="text-gray-800 font-medium text-base">{

                                            item.type_transaction === "reception"
                                                ? `Reçu de 0${item.numero_expediteur}`
                                                : item.type_transaction === "envoi"
                                                    ? `Envoyé à ${item.numero_destinataire}`
                                                    : `${item.numero_expediteur}`
                                        }</p>
                                        <span className="text-xs inline-block px-2 py-0.5 bg-green-100 text-green-700 rounded-full">
                                            {item.type_transaction}
                                        </span>
                                    </div>
                                </div>

                                <div className="text-right">
                                    <p className="text-green-600 font-semibold text-[13px]">{item.montant} FCFA</p>
                                    <p className="text-xs text-gray-500">{item.dateTransaction}</p>
                                </div>
                            </motion.div>
                        ))
                    ) : (
                        <DonneesNonTrouvees />
                    )
                }
            </div>
        </div>
    );
};

export default TransactionRecents;

const DonneesNonTrouvees = () => {
    return (
        <div className="text-center text-[#ccc] mt-[100px]">
            Suivez les crédits et les débits. <br /> Vous trouverez ici votre activité Wave récente.
        </div>
    );
};
