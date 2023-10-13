import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'
import RadioGroup from './radio-group'

const mockOptions = [
  { label: 'Yes', value: 'yes' },
  { label: 'No', value: 'no' },
]

describe('<RadioGroup />', () => {
  it('should render an input and a label for each option', () => {
    render(
      <RadioGroup
        legend="Test Legend"
        name="test-name"
        onChange={() => {}}
        options={mockOptions}
      />,
    )

    expect(screen.getAllByRole('radio')).toHaveLength(2)
    expect(screen.getByLabelText('Yes')).toBeInTheDocument()
    expect(screen.getByLabelText('No')).toBeInTheDocument()
  })

  it('should call the onChange function when an option is clicked', async () => {
    const user = userEvent.setup()
    const onChangeMock = vi.fn()

    render(
      <RadioGroup
        legend="Test Legend"
        name="test-name"
        onChange={onChangeMock}
        options={mockOptions}
      />,
    )

    await user.click(screen.getByLabelText('Yes'))

    expect(onChangeMock).toHaveBeenCalled()
  })
})
