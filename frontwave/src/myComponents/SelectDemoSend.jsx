import { useContext } from "react";
import {
    Select,
    SelectTrigger,
    SelectValue,
    SelectContent,
    SelectGroup,
    SelectLabel,
    SelectItem,
} from "@/components/ui/select";
import { DonneesInscription } from "../context/authContext";

export const SelectDemoSend = () => {
    const {
        ajouterNumero,
        telephoneDestinataire,
        setTelephoneDestinataire,
    } = useContext(DonneesInscription);

    const handleChange = (value) => {
        setTelephoneDestinataire(value);
        console.log("Numéro sélectionné :", value);
    };

    return (
        <Select onValueChange={handleChange}>
            <SelectTrigger className="w-[400px]">
                <SelectValue placeholder="Numéro destinataire" />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    <SelectLabel>Numéros de téléphone</SelectLabel>
                    {ajouterNumero.length > 0 ? (
                        ajouterNumero.map((item, index) => (
                            <SelectItem key={index} value={item}>
                                {item}
                            </SelectItem>
                        ))
                    ) : (
                        <span className="text-[15px] ml-[110px] text-[#ccc]">
                            Aucun numéro
                        </span>
                    )}
                </SelectGroup>
            </SelectContent>
        </Select>
    );
};
