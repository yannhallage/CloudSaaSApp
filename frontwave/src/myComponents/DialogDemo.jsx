import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React, { useState } from "react";
import { RotatingLines } from "react-loader-spinner"
import toast, { Toaster } from 'react-hot-toast';
import { DrawerMoney } from "./DrawerMoney";


export function DialogDemo({ open, onOpenChange }) {
    const [password, setPassword] = useState('')
    const [showDrawer, setShowDrawer] = useState(false)

    const handleClick = () => {
        if (password) {
            onOpenChange(false);
            setShowDrawer(true)
            setPassword('')
        } else {
            toast.error('Entrez votre mot de passe');
        }
    };

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <form>
                <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                        <DialogTitle>Veuillez entrer votre code secret</DialogTitle>
                        <DialogDescription className="flex items-center space-x-2">
                            <span>Confirmation requise</span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-5 h-5"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M15.75 5.25a3 3 0 0 1 3 3m3 0a6 6 0 0 1-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1 1 21.75 8.25Z"
                                />
                            </svg>
                        </DialogDescription>
                    </DialogHeader>

                    <div className="grid gap-4 py-4">
                        <div className="grid gap-3">
                            <Label htmlFor="password">Mot de passe</Label>
                            <Input id="password"
                                value={password}
                                type="password"
                                onChange={(e) => { setPassword(e.target.value) }}
                                name="password" />
                        </div>
                    </div>

                    <DialogFooter>
                        <DialogClose asChild>
                            <Button variant="outline">Annuler</Button>
                        </DialogClose>
                        <Button onClick={handleClick}>
                            Valider
                        </Button>
                    </DialogFooter>
                </DialogContent>
            </form>

            <Toaster
                position="bottom-right"
                reverseOrder={false}
            />
            <DrawerMoney
                tester={showDrawer}
            />
        </Dialog>
    );
}
