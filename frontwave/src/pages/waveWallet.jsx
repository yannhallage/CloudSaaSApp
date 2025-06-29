import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { useNavigate } from "react-router-dom"

const Home_personnal = () => {
    const navigate = useNavigate()
    return (
        <>
            <header className="p-4 border">
                <div className="flex justify-between items-center max-w-7xl mx-auto w-full flex-wrap gap-2">
                    <img src="https://cdn.prod.website-files.com/62446230dcb514b828a6e237/677ed61188695f2316217fc5_Wave-2_0-logo-fullcolour-rgb.svg" alt="Logo" className="w-20 h-10" />
                    <div className="flex gap-2">
                        <button className="border text-[#0070ba] rounded-full px-4 py-2" onClick={() => navigate("/authentification")}>Connexion</button>
                        <button className="bg-[#0070ba] text-white rounded-full px-4 py-2 hover:bg-[#005c9c]" onClick={() => navigate("/inscription")}>Créer un compte</button>
                    </div>
                </div>
            </header>

            <main>
                <section className="flex justify-center w-full h-screen">
                    <div className="relative w-full h-[489px]">
                        <motion.div className="absolute inset-0 flex items-center justify-center px-4 text-center" initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
                            <div className="text-white">
                                <h1 className="text-2xl md:text-4xl font-semibold mb-6">Votre argent est plus efficace.</h1>
                                <button className="text-white text-lg bg-[#0070ba] rounded-full px-6 py-3 hover:bg-[#005c9c] transition" onClick={() => navigate('/inscription')}>Ouvrir un compte gratuitement</button>
                            </div>
                        </motion.div>
                        <video autoPlay muted loop poster="https://www.paypalobjects.com/webstatic/mktg/wright/videos/home-signup.jpg" className="w-full h-full object-cover">
                            <source src="https://www.paypalobjects.com/webstatic/mktg/wright/videos/home-signup.mp4" type="video/mp4" />
                            <source src="https://www.paypalobjects.com/webstatic/mktg/wright/videos/home-signup.webm" type="video/webm" />
                        </video>
                    </div>
                </section>

                <section className="py-10 px-4 max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                        <motion.div className="flex justify-center" initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
                            <img src="https://www.paypalobjects.com/marketing/web24/Dec24/credit-engagement-uk-product-scroll-tab01-04-size-all_v1.png?quality=75&width=1500&format=webp" alt="Produit" className="w-60 h-80 object-cover rounded-lg shadow-md" />
                        </motion.div>
                        <div>
                            <p className="text-gray-700 text-2xl md:text-3xl mb-4">Rapide et facile.</p>
                            <p className="text-base text-gray-600">Des millions d'utilisateurs dans le monde ont choisi WaveWallet pour sa simplicité. Payez plus rapidement qu'en sortant votre portefeuille.</p>
                        </div>
                    </div>
                </section>

                <section className="mt-11 bg-cover bg-center bg-no-repeat text-white h-[500px] md:h-[700px] relative" style={{ backgroundImage: "url('/téléchargement.jpg')" }}>
                    <motion.div className="bg-black bg-opacity-60 p-6 rounded-md max-w-4xl mx-auto mt-24 md:mt-40" initial={{ opacity: 0, x: -100 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 1 }} viewport={{ once: true }}>
                        <p className="text-lg leading-relaxed">Nous couvrons vos achats. Achetez en toute tranquillité : nous protégeons vos achats éligibles.</p>
                    </motion.div>
                </section>

                <section className="bg-[#003087] py-20 px-4 text-white text-center">
                    <motion.div className="space-y-6 max-w-4xl mx-auto" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }} viewport={{ once: true }}>
                        <h2 className="text-2xl md:text-3xl font-semibold">Payez en ligne ou sur votre mobile.</h2>
                        <p className="text-lg">Payez des biens et services sans communiquer vos infos financières. Simple, rapide et sécurisé.</p>
                        <p className="text-lg font-bold">Effectuer un paiement</p>
                    </motion.div>
                </section>

                <section className="text-center py-24 bg-[#f1f1f1] px-4">
                    <motion.div className="space-y-5" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
                        <h2 className="text-3xl">Votre argent au bon endroit.</h2>
                        <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={() => navigate('/inscription')} className="bg-[#0070ba] hover:bg-[#003087] text-white font-bold py-3 px-6 rounded-full">Ouvrir un compte gratuitement</motion.button>
                    </motion.div>
                </section>

                <footer className="px-6 py-12 text-sm bg-white">
                    <div className="max-w-7xl mx-auto space-y-6">
                        <div className="flex flex-wrap gap-4 font-semibold text-gray-700">
                            <span>Aide</span>
                            <span>Contact</span>
                            <span>Tarif</span>
                            <span>Sécurité</span>
                            <span>Fonctionnalités</span>
                            <span>Faites vos achats</span>
                        </div>
                        <hr />
                        <p className="text-gray-500">À propos © 1999–2025 Tous droits réservés.</p>
                        <p className="text-gray-500">PayPal Pte. Ltd. est agréé par la Monetary Authority of Singapore en tant que Major Payment Institution.</p>
                    </div>
                </footer>
            </main>
        </>
    )
}

export default Home_personnal
