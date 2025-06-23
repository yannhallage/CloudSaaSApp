const Footer = () => {
    return (
        <footer className="mt-12 border-t border-gray-200 dark:border-white/10 py-6 px-4 bg-white dark:bg-gray-900 text-center text-sm text-gray-600 dark:text-gray-400">
            <p>
                Wave Pte. Ltd. est agréé par la Monetary Authority of Singapore en tant que Major Payment Institution (établissement de paiement majeur) en vertu du Payment Services Act de 2019.
            </p>
            <p className="mt-2">&copy; {new Date().getFullYear()} Wave. Tous droits réservés.</p>
        </footer>
    );
};

export default Footer;
