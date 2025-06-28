# 📱 FrontWave – Application de portefeuille mobile

FrontWave est une application construite avec **React / Next.js** permettant à un utilisateur de :

- 💸 Envoyer de l’argent
- 📥 Recevoir des paiements
- 💳 Recharger son compte via E-Recharge

Le tout repose sur une architecture frontend claire, une API Node.js/Express et une base de données MongoDB.

---

## 🚀 Fonctionnalités principales

### 📤 1. Envoi d'argent

- Interface située dans `SelectDemoSend.jsx` (dans `myComponents`)
- L’utilisateur saisit un numéro et un montant
- Une requête est envoyée au backend pour valider et enregistrer l’envoi
- Une transaction de type `"envoi"` est enregistrée avec :
  - `numero_expediteur`
  - `numero_destinataire`
  - `montant`
  - `dateTransaction`

### 📥 2. Réception d'argent

- Le destinataire reçoit une transaction automatiquement enregistrée
- Ces transactions sont affichées dans `transactionRecents.jsx`
- Requêtes backend filtrées par `numero_destinataire`
- Type de transaction : `"reception"`

### 💳 3. Rechargement de compte (E-Recharge)

- Fonctionnalité gérée dans le répertoire `pages/fonctionnalités/`
- Séquence utilisateur :
  1. Sélection de méthode dans `MethodRechargement`
  2. Saisie du montant dans `MethodPaymentAgree`
  3. Envoi de la demande via `/api/recharge`
- Le backend met à jour le solde et enregistre une transaction `"rechargement"`

---

## 📁 Structure du projet (simplifiée)

src/
├── myComponents/
│ ├── SelectDemoSend.jsx # Envoi d'argent
│ ├── transactionRecents.jsx # Historique
│ ├── SignUp.jsx / signIn.jsx # Authentification
│ ├── DrawerMoney.jsx # Interface mobile
│ └── footer.jsx, navButtons.jsx, etc.
│
├── pages/
│ ├── authentification.jsx
│ ├── inscription.jsx
│ ├── myaccount.jsx
│ ├── informations.jsx
│ ├── number.jsx
│ ├── codeotp.jsx / CodeLoginStep.jsx
│ ├── notfound.jsx
│ └── fonctionnalités/
│ └── (ex: RechargerAccount.jsx)

echo "// test pair extraordinaire" >> test-coauthor.js

---

## 🔙 Backend – API Recharge

### Route `POST /api/recharge`

```js
const UpdateServerRechargeAccount = async (req, res) => {
    try {
        const { numeroTel, montant } = req.body;
        const numTel = Number(numeroTel);
        const rechargeMontant = Number(montant);

        if (isNaN(numTel)) {
            return res.status(400).json({ message: "Le numéro doit être valide." });
        }

        if (isNaN(rechargeMontant) || rechargeMontant < 500) {
            return res.status(400).json({ message: "Le montant doit être supérieur ou égal à 500." });
        }

        const user = await AccountWave.findOne({ numeroTel: numTel });
        if (!user) {
            return res.status(404).json({ message: "Le compte n'existe pas." });
        }

        user.sold += rechargeMontant;
        await user.save();

        const dateTransaction = new Date();

        const rechargeTransaction = new ErechargeWave({
            numero_expediteur: "E-recharge",
            numero_destinataire: numTel,
            type_transaction: "rechargement",
            montant: rechargeMontant,
            dateTransaction,
        });

        await rechargeTransaction.save();

        return res.status(200).json({ message: "Recharge effectuée avec succès.", newSold: user.sold });
    } catch (error) {
        console.error("Erreur lors de la recharge de compte :", error);
        return res.status(500).json({ message: "Erreur interne serveur." });
    }
};

 Exemple d'affichage d'une transaction dans React
 <p>
  {item.type_transaction === "reception"
    ? `Reçu de ${item.numero_expediteur}`
    : item.type_transaction === "envoi"
    ? `Envoyé à ${item.numero_destinataire}`
    : `Rechargé par ${item.numero_expediteur}`}
</p>

Données stockées (MongoDB)
Chaque transaction contient les champs suivants :

{
  numero_expediteur: "E-recharge" | Number,
  numero_destinataire: Number,
  type_transaction: "envoi" | "reception" | "rechargement",
  montant: Number,
  dateTransaction: Date
}


📦 Installation

Cloner le repo :
git clone https://github.com/ton-projet/frontwave.git
cd frontwave

Installer les dépendances :
npm install

Lancer le serveur de développement ::::::::::::
npm run dev

⚙️ Configure .env.local avec les bonnes variables MongoDB, ports, etc.

![GitHub stars](https://img.shields.io/github/stars/TON_UTILISATEUR/TON_REPO?style=social)

👨‍💻 Auteur
Développé par [Yann Hallage / github.com/yannhallage]
Projet personnel ou académique de gestion d’un portefeuille mobile moderne.

📝 Licence
Ce projet est open-source et disponible sous la licence MIT.
