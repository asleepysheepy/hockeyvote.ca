'use client'

import { useState } from 'react'
import RadioGroup from '@/components/radio-group';

export default function SimpleQuestionnaire () {
  const [wasGoalieInterference, setWasGoalieInterference] = useState<string | undefined>()
  const [isFan, setIsFan] = useState<string | undefined>()
  const [whichTeam, setWhichTeam] = useState<string | undefined>()

  return (
    <form>
      <div className='mb-8'>
        <RadioGroup
          legend="Was there goaltender interference on this play?"
          name="goalie-interference"
          onChange={setWasGoalieInterference}
          options={[{label: 'Yes', value: 'yes'}, {label: 'No', value: 'no'}]}
          selected={wasGoalieInterference}
        />
      </div>

      <div className='mb-8'>
        <RadioGroup
          legend="Are you a fan of either of these teams?"
          name="fan"
          onChange={setIsFan}
          options={[{label: 'Yes', value: 'yes'}, {label: 'No', value: 'no'}]}
          selected={isFan}
        />
      </div>

      {isFan === 'yes' && (
        <div className='mb-8'>
          <RadioGroup
            legend="Which team are you a fan of?"
            name="team"
            onChange={setWhichTeam}
            options={[{label: 'Home', value: 'home'}, {label: 'Away', value: 'away'}]}
            selected={whichTeam}
          />
        </div>
      )}
    </form>
  )
}