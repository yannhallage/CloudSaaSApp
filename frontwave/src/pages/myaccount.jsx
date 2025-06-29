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
    // const [showing, setShowing] = useState('')
    const [informationRecuperer, setInformationRecuperer] = useState([])

    useEffect(() => {
        const id = localStorage.getItem('utilisateurid')
        // const userid = localStorage.getItem('utilisateurid')
        if (!id) return;

        axios.get(`http://backend:3000/api/wavewallet/myaccount/${id}`, {
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


        // toats
        toast('Hello!',
            {
                icon: '👏',
                style: {
                    borderRadius: '10px',
                    background: '#333',
                    color: '#fff',
                },
            }
        );
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
        if (informationRecuperer.sold == 0) {
            setCash(informationRecuperer.sold)
            // console.log(cash)
        }
    }, [informationRecuperer])

    const deconnexion = () => {
        localStorage.removeItem('utilisateurid')
        localStorage.removeItem('token')
        setTelephone_personne(null)
        return navigate('/')
    }
    const icon_one =
        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 9.75L12 3l9 6.75v9.75A1.5 1.5 0 0 1 19.5 21H4.5A1.5 1.5 0 0 1 3 19.5V9.75z" />
        </svg>
    const icon_two =
        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
        </svg>

    const icon_tree = <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v3m0 12v3m9-9h-3M6 12H3m14.31 5.31l-2.12-2.12m-8.48 0l-2.12 2.12m12.72-12.72l-2.12 2.12m-8.48 0L5.69 4.69" />
    </svg>

    return (
        <>
            <section className="p-3 bg-[#074799] text-[#d1f1ff]">
                <div className="md:container md:mx-auto">
                    <div className="flex justify-between items-center">

                        <div className="flex items-center space-x-6">
                            <img
                                src="https://cdn.prod.website-files.com/62446230dcb514b828a6e237/677ed61188695f2316217fc5_Wave-2_0-logo-fullcolour-rgb.svg"
                                alt="Logo Wave"
                                className="w-16 h-16"
                            />
                            <nav className="flex space-x-3 text-[18px]">
                                {/* {["Accueil", "Envoyer", "Recharger"].map((label) => (
                                    <span
                                        key={label}
                                        className="px-4 py-2 rounded-full transition hover:bg-white/20 backdrop-blur-sm cursor-pointer"
                                    >
                                        {label}
                                    </span>
                                ))} */}
                            </nav>
                        </div>
                        <div className="flex items-center space-x-5 text-[18px]">

                            <span className="p-2 rounded-full transition hover:bg-white/20 backdrop-blur-sm cursor-pointer">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                    viewBox="0 0 24 24" strokeWidth={1.5}
                                    stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                        d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 
                                        18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 
                                        6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 
                                        0a24.255 24.255 0 0 1-5.714 0m5.714 
                                        0a3 3 0 1 1-5.714 0" />
                                </svg>
                            </span>

                            <span className="p-2 rounded-full transition hover:bg-white/20 backdrop-blur-sm cursor-pointer">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                    viewBox="0 0 24 24" strokeWidth={1.5}
                                    stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                        d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 
                                                0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 
                                                1.205-.108l.737-.527a1.125 1.125 0 0 1 
                                                1.45.12l.773.774c.39.389.44 1.002.12 
                                                1.45l-.527.737c-.25.35-.272.806-.107 
                                                1.204.165.397.505.71.93.78l.893.15c.543.09.94.559.94 
                                                1.109v1.094c0 .55-.397 1.02-.94 
                                                1.11l-.894.149c-.424.07-.764.383-.929.78-.165.398-.143.854.107 
                                                1.204l.527.738c.32.447.269 1.06-.12 
                                                1.45l-.774.773a1.125 1.125 0 0 1-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.398.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 
                                                0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 
                                                1.125 0 0 1-.12-1.45l.527-.737c.25-.35.272-.806.108-1.204-.165-.397-.506-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.108-1.204l-.526-.738a1.125 
                                                1.125 0 0 1 .12-1.45l.773-.773a1.125 
                                                1.125 0 0 1 1.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894Z" />
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                        d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                </svg>
                            </span>

                            <span className="px-4 py-2 rounded-full transition hover:bg-white/20 backdrop-blur-sm cursor-pointer"
                                onClick={deconnexion}
                            >
                                Déconnexion
                            </span>
                        </div>
                    </div>
                </div>
            </section >

            <section className="md:container md:mx-auto px-4">
                <div className="grid md:grid-cols-2 grid-cols-1 gap-6 mt-11">
                    <div className="">
                        {
                            changeComponent
                        }
                    </div>
                    <div className="">
                        <div class="p-6 rounded-md bg-white shadow-lg">
                            <h1 className="text-xl font-semibold text-gray-800 mb-4">Carte de crédit</h1>

                            <motion.div
                                className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white p-6 rounded-2xl shadow-xl"
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6 }}
                            >
                                <div className="flex justify-between items-center mb-6">
                                    <span className="text-sm uppercase tracking-wider text-blue-100">Carte WaveWallet</span>
                                    <img
                                        src="https://cdn.prod.website-files.com/62446230dcb514b828a6e237/677ed61188695f2316217fc5_Wave-2_0-logo-fullcolour-rgb.svg"
                                        alt="Wave logo"
                                        className="h-6"
                                    />
                                </div>
                                <div className="text-xl text-blue-100 font-mono flex items-center space-x-3 tracking-widest mb-6">
                                    <button
                                        onClick={() => setListenner(!listenner)}
                                        className="focus:outline-none"
                                        title={listenner ? "Masquer le solde" : "Afficher le solde"}
                                    >
                                        {listenner ? (
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                            </svg>
                                        ) : (
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88" />
                                            </svg>
                                        )}
                                    </button>
                                    <span>
                                        {listenner ? (
                                            <AnimateNumber value={montantSold} />
                                        ) : (
                                            <span>************</span>
                                        )}
                                        {/* {listenner ? `${montantSold.toLocaleString("fr-FR")} FCFA` : "************"} */}
                                    </span>
                                </div>
                                <div className="flex justify-between text-sm">
                                    <div>
                                        <span className="block text-xs text-blue-200">Titulaire</span>
                                        <span className="font-semibold">
                                            {
                                                informationRecuperer.name
                                            }
                                        </span>
                                    </div>
                                    <div>
                                        <span className="block text-xs text-blue-200">Numéro</span>
                                        <span className="font-semibold">
                                            {
                                                informationRecuperer.numeroTel
                                            }
                                        </span>
                                    </div>
                                </div>
                            </motion.div>

                            <div className="mt-5 space-y-4 ">
                                <div className="font-semibold  text-gray-800">Effectuer</div>
                                <div className="flex space-x-3">
                                    <NavButtons
                                        icon={icon_one}
                                        label={"Accueil"}
                                        event={() => { setChangeComponent(<TransactionRecents />) }}
                                    />
                                    <NavButtons
                                        icon={icon_two}
                                        label={"Envoyer"}
                                        event={() => { setChangeComponent(<EnvoyerArgent />) }}
                                    />
                                    <NavButtons
                                        icon={icon_tree}
                                        label={"Recharger"}
                                        event={() => { setChangeComponent(<RechargerAccount />) }}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
            <section className="mt-[170px] ">
                <Footer
                />
                <Toaster
                    position="top-right"
                    reverseOrder={false}
                />
            </section>
        </>
    )
}
export default MyAccount;



