import { useDispatch } from 'react-redux';
import Button from '../../ui/Button';
import { deleteItem } from './cartSlice';

function DeleteItem({ pizzaId }) {
  const dipatch = useDispatch();
  return (
    <Button type='small' onClick={() => dipatch(deleteItem(pizzaId))}>
      Delete
    </Button>
  );
}

export default DeleteItem;
