import { User } from "lucide-react"


export default function Comment() {
    return (
        <div className="">
            <div className="flex">
                <User />
                <div className="flex">
                    <h4>Esther Carter</h4>
                    <span>July 27, 2024</span>
                </div>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, quisquam!</p>
        </div>
    )
}