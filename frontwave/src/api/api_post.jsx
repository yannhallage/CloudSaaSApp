// import axios from 'axios';
// import { useToast } from "../hooks/use-toast"
// import Toaster from '../components/ui/toaster'


//  export const PostPersonnel  = async (valeurEnvoyers,EmptyFields) =>{
//     try {
//         const response = await axios.post('http://localhost:3000/api/personnel', valeurEnvoyers)

//         console.log("Donnée insérée avec succès:", response.data);

//         valeurEnvoyers = {
//             name: '',
//             email: '',
//             telephone: '',
//             matricule: ''
//         };
//         toast({
//             variant: "destructive",
//             description: "Le personnel a été créé avec succès!",
//         });
//         EmptyFields();
//     }
//     catch (error) {
//         console.error("Erreur lors de l'insertion des données:", error);
//     }
// }