import { connect } from 'react-redux';
import { Summary } from '../components/Summary';

const mapPropsToState = (state) => {
  const items = state.items;
  let subtotal = 0;
  for (const item of items) {
    subtotal += item.quantity * item.price;
  }
  const tipAmount = subtotal * (state.tipPercentage / 100);

  const total = subtotal + tipAmount;

  return {
    subtotal,
    tipAmount,
    total
  };
};

export const SummaryContainer = connect(mapPropsToState)(Summary);
