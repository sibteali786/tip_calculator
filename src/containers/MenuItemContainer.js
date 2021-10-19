import { connect } from 'react-redux';
import MenuItem from '../components/MenuItem';
import {
  removeItem,
  updatePrice,
  updateQuantity
} from '../store/items/actions';
import { selectItemTotal } from '../store/items/selector';

const mapStateToProps = (state, ownProps) => ({
  total: selectItemTotal(state, ownProps)
});

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    remove: (uuid) => dispatch(removeItem(ownProps.uuid)),
    updatePrice: (price) => dispatch(updatePrice(ownProps.uuid, price)),
    updateQuantity: (quantity) =>
      dispatch(updateQuantity(ownProps.uuid, quantity))
  };
};

export const MenuItemContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MenuItem);
