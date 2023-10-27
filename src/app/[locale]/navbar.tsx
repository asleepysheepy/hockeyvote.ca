'use client'

import Link from 'next/link'
import { useScopedI18n, useChangeLocale } from '@/locales/client'

export function Navbar() {
  const t = useScopedI18n('navbar')
  const changeLocale = useChangeLocale()

  return (
    <nav className="border-b border-gray-200 bg-white">
      <div className="mx-auto flex h-14 max-w-7xl justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center">
          <Link href={'/'} className={'text-xl font-bold text-red-600'}>
            HockeyVote
          </Link>
        </div>
        <div className="flex items-center">
          <button
            type="button"
            onClick={() => changeLocale('en')}
            className={
              'border-b-2 border-transparent pt-1 text-sm font-medium text-gray-600 ' +
              'hover:border-red-500 hover:text-gray-900'
            }
          >
            {t('languageOption.en')}
          </button>
          &nbsp;|&nbsp;
          <button
            type="button"
            onClick={() => changeLocale('fr')}
            className={
              'border-b-2 border-transparent pt-1 text-sm font-medium text-gray-600 ' +
              'hover:border-red-500 hover:text-gray-900'
            }
          >
            {t('languageOption.fr')}
          </button>
        </div>
      </div>
    </nav>
  )
}
