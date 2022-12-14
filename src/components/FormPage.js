import { YogaForm } from './forms/YogaForm'

import axios from 'axios'

export const FormPage = () => {

    const handleSubmit =   async (values, {resetForm}) => {
        console.log(values)
        await new Promise((resolve) => setTimeout(resolve, 500));
        // alert(JSON.stringify(values, null, 2));  
        axios.post('http://localhost/api/user/save', values)
        // axios.post('sql6.freesqldatabase.com/3306', values)
        alert('Form Submitted Successfully !');
        resetForm();
      }
    
      const formSchema = [
        { name: 'name', label: 'Name', componentType: 'text', required: true },
        { name: 'email', label: 'Email', componentType: 'text', required: true },
        {
          name: 'gender',
          label: 'Gender',
          componentType: 'radioGroup',
          options: [
            { label: 'Male', value: '1' },
            { label: 'Female', value: '0' },
          ],
        },
        { name: 'age', label: 'Age', componentType: 'text', required: true, type: 'number', min: 18, max: 65, step: 1},
        {
          name: 'batch',
          label: 'Batch',
          componentType: 'select',
          defaultOption: 'Select Batch',
          options: [
            { label: 'B1 : 06-07 Am', value: 'B1' },
            { label: 'B2 : 07-08 Am', value: 'B2' },
            { label: 'B3 : 08-09 Am', value: 'B3' },
            { label: 'B4 : 05-06 Pm', value: 'B4' },
          ],
        },
        {
          name: 'payment',
          label: 'Payment',
          componentType: 'select',
          defaultOption: 'Select Payment',
          options: [
            { label: 'Pay Now', value: '1' },
            { label: 'Pay Later', value: '0' },
          ],  
        },
        // if payment is pay now then show this
        {
          name: 'pay',
          label: 'Pay',
          componentType: 'btn',
          condition: { key: 'payment', value: '1', operator: '=' },
          required: true,
        },
      ]

    return (
        <div>
            <div className="flex">
                <h1>Yoga Class Admission Form</h1>
                <div className="form section">
                    <YogaForm schema={formSchema} onSubmit={handleSubmit} />
                </div>
            </div>
        </div>
    )
  }