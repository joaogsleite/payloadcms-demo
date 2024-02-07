import * as React from 'react'
import { SelectInput, useField } from 'payload/components/forms'

export const MyCustomSelect: React.FC<{ path: string }> = ({ path }) => {
  const { value, setValue } = useField<string>({ path })
  const [options, setOptions] = React.useState([])

  // Fetch options on component mount
  React.useEffect(() => {
    const fetchOptions = async () => {
      try {
        const response = await fetch('/api/countries')
        const { countries } = await response.json()

        const countryOptions = countries.map(country => {
          return {
            label: `${country.name + ' ' + country.flag}`,
            value: country.id,
          }
        })

        setOptions(countryOptions.sort((a, b) => a.label.localeCompare(b.label)))
      } catch (error) {
        // error
      }
    }

    fetchOptions()
  }, [])

  return (
    <div>
      <label className="field-label">Country</label>
      <SelectInput
        path={path}
        name={path}
        options={options}
        value={value}
        onChange={e => setValue(e.value)}
      />
    </div>
  )
}
