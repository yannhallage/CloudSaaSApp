// App.jsx
import { useState } from "react";
import Component_Router from "./router/routers";
import { DonneesInscription } from "./context/authContext";
import TransactionRecents from "./myComponents/transactionRecents";

const App = () => {

  const [email_personne, setEmail_personne] = useState('')
  const [nom_personne, setNom_personne] = useState('')
  const [prenom_personne, setPrenom_personne] = useState('')
  const [ville_personne, setVille_personne] = useState('')
  const [telephone_personne, setTelephone_personne] = useState('')
  const [motdepasse_personne, setMotdepasse_personne] = useState('')
  const [montantSold, setMontantSold] = useState(0)
  const [numeroOTP, setNumeroOTP] = useState()
  const [ajouterNumero, setAjouterNumero] = useState([])
  const [codeOTP_, setCodOTP_] = useState()
  const [telephoneDestinataire, setTelephoneDestinataire] = useState()
  const [changeComponent, setChangeComponent] = useState(
    <TransactionRecents />
  )


  return (
    <DonneesInscription.Provider
      value={{
        email_personne,
        setEmail_personne,
        nom_personne,
        setNom_personne,
        prenom_personne,
        setPrenom_personne,
        ville_personne,
        setVille_personne,
        telephone_personne,
        setTelephone_personne,
        motdepasse_personne,
        setMotdepasse_personne,
        changeComponent,
        setChangeComponent,
        montantSold,
        setMontantSold,
        ajouterNumero,
        setAjouterNumero,
        codeOTP_, setCodOTP_,
        numeroOTP, setNumeroOTP,
        telephoneDestinataire,
        setTelephoneDestinataire
      }}
    >
      <Component_Router />
    </DonneesInscription.Provider>
  );
};

export default App;
