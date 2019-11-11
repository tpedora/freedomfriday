const yup = require("yup");

let min = 0;
const validationSchema = yup.object({
  fromAccount: yup.string().required(),
  toAccount: yup.string().required(),
  amount: yup.string()
    .matches(/^([0]([.][0-9]+)?|[1-9]([0-9]+)?([.][0-9][0-9]+)?)$/, {
      message: 'Inccorect amount format',
      excludeEmptyString: true
    })
    .test({
      name: '$0 Minimum',
      exclusive: true,
      params: { min },
      message: 'Amount must be more than ${min} dollars',
      test: value => {
        const amountNumber = parseFloat(value).toFixed(2);
    
        return amountNumber == null || amountNumber.length <= min;
      }
    }).required(),
  recurring: yup.string().required()
});

module.exports = { validationSchema };