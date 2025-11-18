import { Sun } from 'lucide-react'

const ThemeToggle = () => {
  return (
    <div className='flex w-16 h-8 py-1 cursor-pointer rounded-full transition-all duration-300'>
      <Sun className='h-5 w-5' strokeWidth={1.5} />
    </div>
  )
}

export default ThemeToggle