'use client'

import Link from 'next/link'
import { useChangeLocale } from '@/locales/client'

export function Navbar() {
  const changeLocale = useChangeLocale()

  return (
    <nav className="border-b-2 border-gray-200 bg-white dark:border-gray-600 dark:bg-gray-800">
      <div className="mx-auto flex h-14 max-w-7xl justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center">
          <Link href={'/'} className={'text-xl font-bold text-red-600'}>
            HockeyVote
          </Link>
        </div>
        <div className="flex items-center text-gray-600 dark:text-gray-300 ">
          <button
            type="button"
            onClick={() => changeLocale('en')}
            className={
              'border-b-2 border-transparent pt-1 text-sm font-medium ' +
              'hover:border-red-600 hover:text-gray-900 hover:dark:text-gray-50'
            }
          >
            English
          </button>
          &nbsp;|&nbsp;
          <button
            type="button"
            onClick={() => changeLocale('fr')}
            className={
              'border-b-2 border-transparent pt-1 text-sm font-medium ' +
              'hover:border-red-600 hover:text-gray-900  hover:dark:text-gray-50'
            }
          >
            Français
          </button>
        </div>
      </div>
    </nav>
  )
}
