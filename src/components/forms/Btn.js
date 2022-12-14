import { FormField } from './FormField'

export const Btn = ({
  label,
  field: { name, value, ...fieldProps },
  form,
  required,
  ...props
}) => {
  return (
    <FormField id={name} label={"500INR per month"} required={required} formProps={form}>
      <input
        id={name}
        type="button"
        label={label}
        name={name}
        value={"Pay"}
        style={{ backgroundColor: 'green', color: 'white', width: '80px' }}
        {...fieldProps}
        {...props}
        onClick={() => alert('Payment done Successfully !')}
      />
    </FormField>
  )
}
