import { faker } from '@faker-js/faker'
import prisma from '@/db'
import { cleanupDb } from '@test/db-utils'

async function seed() {
  console.log('🌱 Seeding...')
  console.time(`🌱 Database has been seeded`)

  console.time('🧹 Cleaned up the database...')
  await cleanupDb(prisma)
  console.timeEnd('🧹 Cleaned up the database...')

  console.time('📺 Created Incidents...')
  const incidentData = [
    {
      youtubeId: 'TsMoTD2HQoQ',
      startTime: 233,
      endTime: 284,
      offendingPlayer: 'Bryan Rust',
      offendingPlayerTeam: 'PIT',
      goalie: 'Jonathan Quick',
      goalieTeam: 'LAK',
      date: new Date('2022-10-20'),
      period: 2,
      timeElapsed: '7:30',
      callOnIce: 'goal',
      endResult: 'no-goal',
    },
    {
      youtubeId: '1dPYWuFZ1Zc',
      startTime: 226,
      endTime: 284,
      offendingPlayer: 'Jake Sanderson',
      offendingPlayerTeam: 'OTT',
      goalie: 'Spencer Knight',
      goalieTeam: 'FLA',
      date: new Date('2022-10-29'),
      period: 2,
      timeElapsed: '5:26',
      callOnIce: 'goal',
      endResult: 'no-goal',
    },
    {
      youtubeId: 'rhaDyhiCNwE',
      startTime: 236,
      endTime: 298,
      offendingPlayer: 'Jack Studnicka',
      offendingPlayerTeam: 'VAN',
      goalie: 'John Gibson',
      goalieTeam: 'ANA',
      date: new Date('2022-11-03'),
      period: 3,
      timeElapsed: '5:30',
      callOnIce: 'goal',
      endResult: 'goal',
    },
    {
      youtubeId: '4_28a64ChbQ',
      startTime: 211,
      endTime: 255,
      offendingPlayer: 'Brenden Dillon',
      offendingPlayerTeam: 'WPG',
      goalie: 'Andrei Vasilevskiy',
      goalieTeam: 'TBL',
      date: new Date('2023-03-12'),
      period: 2,
      timeElapsed: '9:04',
      callOnIce: 'goal',
      endResult: 'goal',
    },
    {
      youtubeId: 'PG9en7SVRkg',
      startTime: 47,
      endTime: 114,
      offendingPlayer: 'Nathan Bastian',
      offendingPlayerTeam: 'NJD',
      goalie: 'Matt Murray',
      goalieTeam: 'TOR',
      date: new Date('2022-11-23'),
      period: 1,
      timeElapsed: '12:25',
      callOnIce: 'no-goal',
      endResult: 'no-goal',
    },
    {
      youtubeId: 'zpRm1y4XpPw',
      startTime: 184,
      endTime: 198,
      offendingPlayer: 'Connor Clifton',
      offendingPlayerTeam: 'BOS',
      goalie: 'Felix Sandström',
      goalieTeam: 'PHI',
      date: new Date('2023-04-09'),
      period: 2,
      timeElapsed: '4:40',
      callOnIce: 'no-goal',
      endResult: 'no-goal',
    },
  ]

  for (const incident of incidentData) {
    await prisma.incident.create({
      select: { id: true },
      data: {
        ...incident,
        votes: {
          create: Array.from({
            length: faker.number.int({ min: 10, max: 30 }),
          }).map(() => {
            const fanOfEitherTeam = faker.datatype.boolean()

            let fanOfWhichTeam
            if (fanOfEitherTeam) {
              fanOfWhichTeam = faker.datatype.boolean() ? 'home' : 'away'
            }

            return {
              wasGoalieInterference: faker.datatype.boolean(),
              fanOfEitherTeam,
              fanOfWhichTeam,
            }
          }),
        },
      },
    })
  }
  console.timeEnd('📺 Created Incidents...')

  console.timeEnd(`🌱 Database has been seeded`)
}

seed()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
