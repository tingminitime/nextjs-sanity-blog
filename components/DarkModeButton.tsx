'use client'
import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { SunIcon, MoonIcon } from '@heroicons/react/24/solid'

function DarkModeButton() {
  const [mounted, setMounted] = useState<boolean>(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div>
      {theme === 'dark' ? (
        <SunIcon
          className="h-6 w-6 cursor-pointer text-yellow-500"
          onClick={() => setTheme('light')}
        ></SunIcon>
      ) : (
        <MoonIcon
          className="h-6 w-6 cursor-pointer text-zinc-800"
          onClick={() => setTheme('dark')}
        ></MoonIcon>
      )}
    </div>
  )
}
export default DarkModeButton
