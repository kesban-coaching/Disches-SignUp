import { useContext } from "react"
import { Context } from "../store/context"

export const Profil = () => {
    const {user} = useContext(Context)

    return <div>
        <div>Profil Page</div>
        {user?.firstname}
        {user?.lastname}
    </div>

}