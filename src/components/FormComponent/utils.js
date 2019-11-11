const yup = require("yup");

const validationSchema = yup.object({
  fromAccount: yup.string().required(),
  toAccount: yup.string().required(),
  amount: yup.string()
    .matches(/^([0]([.][0-9]+)?|[1-9]([0-9]+)?([.][0-9][0-9]+)?)$/, {
      message: 'Inccorect amount format',
      excludeEmptyString: true
    }).required(),
  recurring: yup.string().required()
});


let min = 0;

yup.mixed().test({
  name: '$0 Minimum',
  exclusive: true,
  params: { min },
  message: 'Amount must be more than ${min} dollars',
  test: value => {
    const amountNumber = value.parseFloat(value).toFixed(2);

    amountNumber == null || amountNumber.length <= min,
  } 
});

module.exports = { validationSchema };