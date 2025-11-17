import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import Image from 'next/image'


export default function CreateComment() {
  return (
    <div className='flex w-full gap-3 sm:gap-5'>
      <div className="relative w-10 h-10 sm:w-12 sm:h-12 shrink-0">
        <Image 
          src="https://images.unsplash.com/photo-1697643635403-116830fe9d39?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
          alt="User profile" 
          fill
          className="rounded-full object-cover"
        />
      </div>
      <div className='flex-1 space-y-3 flex flex-col'>
        <Textarea 
          placeholder="Write your comment..."
          className='w-full bg-gray-200 dark:bg-gray-800 h-24 resize-none'
        />
        <Button className='self-end bg-sky-500 dark:bg-amber-500 hover:bg-sky-600 dark:hover:bg-amber-600 transition-colors text-white'>
          Post Comment
        </Button>
      </div>
    </div>
  )
}
