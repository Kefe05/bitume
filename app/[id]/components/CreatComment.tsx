import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { User } from 'lucide-react'


export default function CreateComment() {
  return (
    <div className='flex'>
        <User/>
        <div>
            <Textarea />
            <Button>Send</Button>
        </div>

    </div>
  )
}
