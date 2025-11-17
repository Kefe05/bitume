import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import Image from 'next/image'


export default function CreateComment() {
  return (
    <div className='flex w-full gap-5  space-y-2'>
         <Image src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=80" alt="article image" width={50} height={20} className="h-12 bg-contain rounded-full" />
        <div className='w-[70%] space-y-3 flex flex-col'>
            <Textarea  className='w-full bg-gray-200 h-24'/>
            <Button className='self-end bg-sky-500 dark:bg-amber-500 hover:bg-sky-600  dark:hover:bg-amber-600 animate-300 text-white'>Post Comment</Button>
        </div>

    </div>
  )
}
