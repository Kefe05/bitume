import { User } from "lucide-react"
import Image from "next/image"


export default function Comment() {
    return (
        <div className="py-4">
            <div className="flex gap-3">
                {/* Profile image from Unsplash */}
                <div className="relative w-10 h-10 shrink-0">
                    <Image
                        src="https://images.unsplash.com/photo-1619468610824-e7ec82efdfcd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fHVzZXJzfGVufDB8fDB8fHww"
                        alt="Esther Carter profile"
                        fill
                        className="rounded-full object-cover"
                    />
                </div>
                <div className="flex flex-col leading-5 flex-1">
                    <div className="flex gap-2 items-center text-gray-600 dark:text-gray-400">
                        <h4 className="font-bold dark:text-white text-black">Adam Carter</h4>
                        <span className="text-xs sm:text-sm">July 27, 2024</span>
                    </div>
                    <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mt-1">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, quisquam!
                    </p>
                </div>
            </div>
        </div>
    )
}