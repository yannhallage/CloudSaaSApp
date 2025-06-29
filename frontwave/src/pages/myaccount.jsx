import { useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { motion } from "framer-motion";
import { NavButtons } from "../myComponents/navButtons";
import Footer from "../myComponents/footer";
import TransactionRecents from "../myComponents/transactionRecents";
import { DonneesInscription } from "../context/authContext";

// Envoye
import RechargerAccount from "./fonctionnalités/rechargerAccount";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast"
import EnvoyerArgent from "./fonctionnalités/envoyerArgent";
import AnimateNumber from "../myComponents/AnimateNumber/AnimateNumber";


const MyAccount = () => {
    const navigate = useNavigate()
    const { changeComponent, setChangeComponent, telephone_personne,
        setTelephone_personne, montantSold,
        setMontantSold } = useContext(DonneesInscription);
    const [cash, setCash] = useState(0)
    const [listenner, setListenner] = useState(false)
    const [informationRecuperer, setInformationRecuperer] = useState([])

    useEffect(() => {
        const id = localStorage.getItem('utilisateurid')
        if (!id) return;

        axios.get(`${import.meta.env.VITE_API_URL}/api/wavewallet/myaccount/${id}`, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        })
            .then(response => {
                console.log(response.data.accountWave_personnel)
                setInformationRecuperer(response.data.accountWave_personnel)
            })
            .catch(error => {
                console.log(error)
            })

        toast('Hello!', {
            icon: '👏',
            style: {
                borderRadius: '10px',
                background: '#333',
                color: '#fff',
            },
        });
    }, [])

    useEffect(() => {
        if (informationRecuperer) {
            setTelephone_personne(informationRecuperer.numeroTel);
            setMontantSold(informationRecuperer.sold);
        }
    }, [informationRecuperer]);

    useEffect(() => {
        if (telephone_personne) {
            console.log(telephone_personne)
        }
    }, [telephone_personne])

    useEffect(() => {
        console.log(informationRecuperer)
        if (informationRecuperer.sold === 0) {
            setCash(informationRecuperer.sold)
        }
    }, [informationRecuperer])

    const deconnexion = () => {
        localStorage.removeItem('utilisateurid')
        localStorage.removeItem('token')
        setTelephone_personne(null)
        return navigate('/')
    }

    const icon_one = (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 9.75L12 3l9 6.75v9.75A1.5 1.5 0 0 1 19.5 21H4.5A1.5 1.5 0 0 1 3 19.5V9.75z" />
        </svg>
    );

    const icon_two = (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
        </svg>
    );

    const icon_tree = (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v3m0 12v3m9-9h-3M6 12H3m14.31 5.31l-2.12-2.12m-8.48 0l-2.12 2.12m12.72-12.72l-2.12 2.12m-8.48 0L5.69 4.69" />
        </svg>
    );

    return (
        <>
            <section className="p-3 bg-[#074799] text-[#d1f1ff] w-full">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <div className="flex items-center space-x-6">
                            <img
                                src="https://cdn.prod.website-files.com/62446230dcb514b828a6e237/677ed61188695f2316217fc5_Wave-2_0-logo-fullcolour-rgb.svg"
                                alt="Logo Wave"
                                className="w-16 h-16"
                            />
                        </div>
                        <div className="flex items-center space-x-5 mt-4 md:mt-0 text-[18px]">
                            <span className="p-2 rounded-full transition hover:bg-white/20 backdrop-blur-sm cursor-pointer">
                                {/* icône cloche */}
                            </span>
                            <span className="p-2 rounded-full transition hover:bg-white/20 backdrop-blur-sm cursor-pointer">
                                {/* icône roue */}
                            </span>
                            <span
                                className="px-4 py-2 rounded-full transition hover:bg-white/20 backdrop-blur-sm cursor-pointer"
                                onClick={deconnexion}
                            >
                                Déconnexion
                            </span>
                        </div>
                    </div>
                </div>
            </section>

            <section className="max-w-7xl mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-11">
                    <div>
                        {changeComponent}
                    </div>
                    <div>
                        {/* bloc carte et boutons */}
                    </div>
                </div>
            </section>

            <section className="mt-24">
                <Footer />
                <Toaster position="top-right" reverseOrder={false} />
            </section>
        </>
    );
}

export default MyAccount;
