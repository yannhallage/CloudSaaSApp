
import { Label } from "@/components/ui/label"

const Notfound = () => {

    return (
        <>
            <div className="space-x-3 flex justify-center items-center h-screen">
                <Label>404</Label>
                <Label>|</Label>
                <Label>
                    This page could not be found.
                </Label>
            </div>
        </>
    )

}
export default Notfound;