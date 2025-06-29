import { useContext, useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import toast from 'react-hot-toast';
import { RotatingLines } from "react-loader-spinner";
import { Button } from "@/components/ui/button";
import { SelectDemoSend } from "../../myComponents/SelectDemoSend";
import { Addnumber } from "../../myComponents/Addnumber";
import { DonneesInscription } from "../../context/authContext";
import AnimateNumber from "../../myComponents/AnimateNumber/AnimateNumber";

const EnvoyerArgent = () => {
  const {
    telephone_personne,
    telephoneDestinataire,
    setTelephoneDestinataire,
    montantSold,
    setMontantSold,
  } = useContext(DonneesInscription);

  const [amount, setAmount] = useState("");
  const [loadingContent, setLoadingContent] = useState("Continuer");

  const handleTransfer = async () => {
    const numericAmount = parseFloat(amount);

    if (!numericAmount || !telephoneDestinataire) {
      toast.error("Veuillez remplir tous les champs correctement !");
      return;
    }

    if (numericAmount > montantSold) {
      toast.error("Montant supérieur à votre balance !");
      return;
    }

    setLoadingContent(<RotatingLines strokeColor="#fff" width="24" />);

    try {
      const now = new Date();
      const dateTransaction = now.toLocaleString();

      await axios.post("http://backend:3000/api/wavewallet/myaccount/transactions", {
        numero_expediteur: telephone_personne,
        numero_destinataire: telephoneDestinataire,
        type_transaction: "envoi",
        montant: numericAmount,
        dateTransaction,
      }, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      });

      
      setMontantSold(prev => prev - numericAmount);

      toast.success("Transaction envoyée avec succès !");
      setAmount("");
      setTelephoneDestinataire(null);
    } catch (error) {
      console.error(error);
      toast.error("Échec de la transaction.");
    } finally {
      setLoadingContent("Continuer");
    }
  };

  return (
    <motion.div
      className="p-6 rounded-2xl space-y-6 bg-gray-50 shadow-lg max-w-xl mx-auto border border-gray-100"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-2xl font-bold">Envoyer de l'argent</h1>

      <div className="space-y-6 rounded-xl bg-white p-6 shadow-sm">
        <div className="space-y-2">
          <p className="text-sm text-gray-600">Envoyer à</p>
          <div className="flex space-x-2">
            <SelectDemoSend placeholder="Choisir un contact" />
            <Addnumber />
          </div>
        </div>

        <div className="space-y-4 text-center">
          <p className="text-sm text-gray-600">Montant à envoyer</p>
          <input
            type="number"
            className="text-2xl text-center border border-gray-300 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="0.00"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
          <BalanceDisponible montantVoulu={amount} />
          <Proposition onSelect={(val) => setAmount(val)} />
        </div>

        <div className="text-center pt-2">
          <Button
            className="w-full py-4 font-semibold text-white bg-blue-600 hover:bg-blue-700 transition rounded-lg"
            onClick={handleTransfer}
          >
            {loadingContent}
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

export default EnvoyerArgent;

const BalanceDisponible = ({ montantVoulu }) => {
  const { montantSold } = useContext(DonneesInscription);
  const numericMontant = parseFloat(montantVoulu);

  if (!numericMontant) return null;

  return (
    <>
      {numericMontant > montantSold ? (
        <p className="text-sm text-red-500">
          Montant supérieur à la balance disponible ({montantSold} FCFA)
        </p>
      ) : (
        <p className="text-sm text-gray-500">
          Balance disponible : <span className="font-semibold text-gray-700">{montantSold} FCFA</span>
        </p>
      )}
    </>
  );
};


const Proposition = ({ onSelect }) => {
  const amounts = ["1 000", "5 000", "10 000", "25 000"];
  return (
    <div className="flex justify-center flex-wrap gap-2 pt-2">
      {amounts.map((amt) => (
        <button
          key={amt}
          className="border border-gray-300 px-4 py-2 rounded-full text-sm bg-gray-50 hover:bg-blue-50 hover:border-blue-400 hover:text-blue-600 transition"
          onClick={() => onSelect(amt.replace(/\s/g, ""))}
        >
          {amt} FCFA
        </button>
      ))}
    </div>
  );
};
