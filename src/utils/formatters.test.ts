import { describe, expect, it } from 'vitest'
import { formatDate } from './formatters'

describe('Formatters', () => {
  describe('formatDate()', () => {
    it('should return the correctly formatted English date', () => {
      const date = new Date('2023-10-25')
      const locale = 'en'

      expect(formatDate(date, locale)).toEqual('Oct 25, 2023')
    })

    it('should return the correctly formatted French date', () => {
      const date = new Date('2023-10-25')
      const locale = 'fr'

      expect(formatDate(date, locale)).toEqual('25 oct. 2023')
    })
  })
})
