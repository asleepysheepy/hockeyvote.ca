export default function RadioGroup({ legend, name, onChange, options, selected }: RadioGroupProps) {
  return (
    <fieldset>
      <legend className="text-base font-semibold">{legend}</legend>
      <div className="ml-4 mt-2 space-y-1">
        {options.map(({ label, value }) => (
          <div className="flex items-center" key={value}>
            <input
              checked={selected === value}
              className="h-4 w-4 border-gray-300 text-red-600 focus:ring-red-600 dark:border-gray-800"
              id={`${name}-${value}`}
              name={name}
              onChange={(e) => {
                console.log('hello?', e.currentTarget.value)
                onChange(e.currentTarget.value)
              }}
              type="radio"
              value={value}
            />
            <label
              htmlFor={`${name}-${value}`}
              className="ml-3 block text-sm font-medium leading-6"
            >
              {label}
            </label>
          </div>
        ))}
      </div>
    </fieldset>
  )
}

export type RadioGroupOption = {
  label: string
  value: string
}

export type RadioGroupProps = {
  legend: string
  name: string
  onChange: (value: string) => void
  options: Array<RadioGroupOption>
  selected?: string
}
