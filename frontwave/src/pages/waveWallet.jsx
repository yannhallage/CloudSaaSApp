import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { useNavigate } from "react-router-dom"
const Home_personnal = () => {
    const navigate = useNavigate()
    return (

        <>
            <header className="p-4 border">
                <div className="flex justify-between container mx-auto">
                    <div className="">
                        <img src="https://cdn.prod.website-files.com/62446230dcb514b828a6e237/677ed61188695f2316217fc5_Wave-2_0-logo-fullcolour-rgb.svg" alt=""
                            className="w-20 h-10"
                        />
                    </div>

                    <div className="space-x-2">
                        <button
                            className="border text-[#0070ba] rounded-full p-3"
                            onClick={() => {
                                navigate("/authentification")
                            }}
                        >
                            connexion
                        </button>
                        <button
                            className=" rounded-full p-3  bg-[#0070ba] text-white"
                            onClick={() =>
                                navigate("/inscription")
                            }
                        >
                            creer un compte
                        </button>
                    </div>
                </div>
            </header>

            <main>
                <section className="flex justify-center w-full h-screen">
                    <div className="relative w-full h-[489px]">
                        <motion.div
                            className="absolute inset-0 flex items-center justify-center"
                            initial={{ opacity: 0, y: -50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1 }}
                        >
                            <div className="text-white text-center">
                                <h1 className="text-3xl mb-6">
                                    Votre argent est plus efficace.
                                </h1>
                                <button
                                    className="text-white text-lg bg-[#0070ba] rounded-full px-6 py-3 hover:bg-[#005c9c] transition"
                                    onClick={() => console.log(true)}
                                >
                                    Ouvrir un compte gratuitement
                                </button>
                            </div>
                        </motion.div>
                        <video
                            autoPlay
                            muted
                            loop
                            poster="https://www.paypalobjects.com/webstatic/mktg/wright/videos/home-signup.jpg"
                            className="w-full h-full object-cover"
                        >
                            <source
                                src="https://www.paypalobjects.com/webstatic/mktg/wright/videos/home-signup.mp4"
                                type="video/mp4"
                            />
                            <source
                                src="https://www.paypalobjects.com/webstatic/mktg/wright/videos/home-signup.webm"
                                type="video/webm"
                            />
                        </video>
                    </div>
                </section>

                <section className="" >
                    <div className="grid grid-cols-1 container mx-auto md:grid-cols-2 gap-6 items-center">
                        <motion.div
                            className="flex justify-center"
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <img
                                src="https://www.paypalobjects.com/marketing/web24/Dec24/credit-engagement-uk-product-scroll-tab01-04-size-all_v1.png?quality=75&width=1500&format=webp"
                                alt="PayPal Product"
                                className="w-60 h-80 object-cover rounded-lg shadow-md"
                            />
                        </motion.div>
                        <div>
                            <p className="text-gray-700 text-3xl leading-relaxed">
                                Rapide et facile.
                            </p>
                            <span className="text-[17px]">
                                Des millions d'utilisateurs dans le monde ont choisi WaveWallet pour une bonne raison : sa simplicité. Payez avec votre adresse email et votre mot de passe plus rapidement qu'en sortant votre portefeuille.
                            </span>
                        </div>
                    </div>
                </section>
                <section
                    className="mt-11 bg-[url('/public/téléchargement.jpg')] h-[700px] bg-cover bg-center bg-no-repeat text-white"
                >
                    <motion.div
                        className="bg-black bg-opacity-60 p-6 float-left ml-2 mt-[100px] rounded-md max-w-4xl mx-auto"
                        initial={{ opacity: 0, x: -100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true }}
                    >
                        <p className="text-lg leading-relaxed">
                            Nous couvrons vos achats. Achetez en toute tranquillité : nous protégeons vos achats éligibles. Si un objet éligible n'est pas livré ou ne correspond pas à sa description, nous nous chargeons de communiquer avec le vendeur. Soumis à conditions.
                        </p>
                    </motion.div>
                </section>

                <section className="bg-[#003087] p-[150px]">
                    <div className="">
                        <motion.div
                            className="text-center space-y-3 text-white leading-relaxed"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 1 }}
                            viewport={{ once: true }}
                        >
                            <span className="text-3xl">
                                Payez en ligne ou sur votre mobile.
                            </span>
                            <p className="text-xl">
                                Payez des biens et services sans communiquer vos informations financières au vendeur. <br /> C'est simple, plus rapide et plus sécurisé. Des frais de conversion de devise peuvent s'appliquer.
                            </p>
                            <p className="text-xl font-bold">
                                Effectuer un paiement
                            </p>
                        </motion.div>
                    </div>
                </section>
                <section className="text-center p-[100px] bg-[#f1f1f1]">
                    <div className="mt-11">
                        <motion.div
                            className="items-center space-y-5"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <span className="text-3xl ">
                                Votre argent au bon endroit.
                            </span> <br />
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => navigate('/inscription')}
                                className="bg-[#0070ba] hover:bg-[#003087]  text-white font-bold p-5 rounded-full"
                            >
                                Ouvrir un compte gratuitement
                            </motion.button>
                        </motion.div>
                    </div>
                </section>
                <section className="p-[70px]">
                    <div className="mt-11">
                        <div className=" space-y-2">
                            <div className="font-semibold flex space-x-3">
                                <span>
                                    Aide
                                </span>
                                <span>
                                    Contact
                                </span>
                                <span>
                                    Tarif
                                </span>
                                <span>
                                    Secutité
                                </span>
                                <span>
                                    Fonctionnalités
                                </span>
                                <span>
                                    Faites vos achats
                                </span>
                            </div>
                            <hr />
                            <span className="flex space-x-2" >
                                À propos
                                © 1999–2025 Tous droits réservés. Accessibilité Cookies Respect de la vie privéeJuridique
                            </span>
                            <span className="text-[14px]">
                                PayPal Pte. Ltd. est agréé par la Monetary Authority of Singapore en tant que Major Payment Institution (établissement de paiement majeur) en vertu du Payment Services Act de 2019.
                            </span>
                        </div>
                    </div>
                </section>
            </main>

        </>
    )
}
export default Home_personnal
