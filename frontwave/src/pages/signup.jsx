
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Link } from "react-router";

import { Button } from "@/components/ui/button"
import { useState } from "react"

const Signup = () => {
    const [matricule, setmatricule] = useState('')
    const [email, setemail] = useState('')
    const [password, setPassword] = useState('')
    return (
        <>
            <div className="flex justify-center items-center h-screen">
                <div className="space-y-5 border p-5">
                    <div className="text-center text-xl">
                        <Label>
                            Create an account
                        </Label>
                    </div>
                    {/*  */}

                    <div className="space-y-2">
                        <Input
                            placeholder="matricule"
                            value={matricule}
                            onChange={(e) => { setmatricule(e.target.value) }}
                        />
                        <Input
                            placeholder="password"
                            onChange={(e) => { setemail(e.target.value) }}
                            value={email}
                        />
                        <Input
                            placeholder="password"
                            onChange={(e) => { setPassword(e.target.value) }}
                            value={password}
                        />
                    </div>

                    {/*  */}
                    <div className="space-x-2">
                        <Button className="float-end">
                            <span>
                                Create
                            </span>
                        </Button>
                        <span className="">
                            <span className="cursor-pointer text-blue-400" onClick={() => { console.log('tetet') }}>
                                <Link to='/'>back</Link>
                            </span>
                        </span>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Signup;