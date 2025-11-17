import { User } from "lucide-react"
import Image from "next/image"


export default function Comment() {
    return (
        <div className="">
            <div className="flex gap-3">
               <Image src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=80" alt="article image" width={30} height={10} className="h-8 bg-contain rounded-full" />
                <div className="flex flex-col leading-5">
                    <div className="flex gap-2 text-gray-600 dark:text-gray-400">
                        <h4 className="font-bold dark:text-white text-black">Esther Carter</h4>
                        <span className="text-sm">July 27, 2024</span>
                   </div>
                    <p className="text-gray-600 dark:text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, quisquam!</p>
                </div>
            </div>
            
        </div>
    )
}