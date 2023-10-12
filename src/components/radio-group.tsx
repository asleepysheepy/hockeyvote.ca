export type RadioGroupOption = {
  label: string
  value: string
}

export type RadioButtonProps = {
  checked: boolean
  id: string
  label: string
  name: string
  onChange: (value: string) => void
  value: string
}

export type RadioGroupProps = {
  legend: string
  name: string
  onChange: (value: string) => void
  options: Array<RadioGroupOption>
  selected?: string
}

export function RadioButton({ checked, id, label, name, onChange, value }: RadioButtonProps) {
  return (
    <div className="flex items-center">
      <input
        checked={checked}
        className="h-4 w-4 border-gray-300 text-red-600 focus:ring-red-600"
        id={id}
        name={name}
        onChange={(e) => onChange(e.currentTarget.value)}
        type="radio"
        value={value}
      />
      <label htmlFor={id} className="ml-3 block text-sm font-medium leading-6 text-gray-900">
        {label}
      </label>
    </div>
  )
}

export default function RadioGroup({legend, name, onChange, options, selected}: RadioGroupProps) {
  return (
    <fieldset>
      <legend className="text-base font-semibold text-gray-900">{legend}</legend>
      <div className="space-y-1 mt-2 ml-4">
        {options.map(({label, value}) => (
          <RadioButton
            checked={selected === value}
            id={`${name}-${value}`}
            key={value}
            label={label}
            name={name}
            onChange={onChange}
            value={value}
          />
        ))}
      </div>
    </fieldset>
  )
}