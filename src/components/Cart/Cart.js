import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteProductAction, increaseItemsCountAction, decreaseItemsCountAction } from '../../redux/cart-reducer';
import { unsetActiveButtonAction } from '../../redux/content-reducer';
import { NavLink } from 'react-router-dom';
import { itemsInCartPriceSelector, itemsCountSelector } from '../../selectors/cart-selectors';
import { Container, Table, Button } from 'react-bootstrap';

const Cart = () => {
  const dispatch = useDispatch()
  const itemsInCart = useSelector(state => state.cart.itemsInCart)
  const itemsInCartPrice = useSelector(itemsInCartPriceSelector)
  const itemsInCartCount = useSelector(itemsCountSelector)
  const deleteProduct = (id, count) => {
    if (count === 1) {
      dispatch(unsetActiveButtonAction(id))
      dispatch(deleteProductAction(id))
    } else {
      debugger
      dispatch(decreaseItemsCountAction(id))
    }
  }
  const increaseItemsCount = (id) => dispatch(increaseItemsCountAction(id))
  let number = 0

  return (
    <Container>
      <div className='cart'>
        {itemsInCart == 0
          ? <h2 className='p-2'>Товары еще не выбраны - <NavLink exact to='/'><Button>добавить</Button></NavLink> </h2>
          : <> <Table className='cartContainer'>
            <thead>
              <tr>
                <th />
                <th>Наименование</th>
                <th>Артикул</th>
                <th>Стоимость</th>
                <th />
                <th>Количество</th>
                <th />
              </tr>
            </thead>
            <tbody>
              {itemsInCart.map(i =>
                <tr key={i.id}>
                  <td>{++number}</td>
                  <td>{i.name}</td>
                  <td>{i.article}</td>
                  <td>{i.price} ₽</td>
                  <td><button onClick={() => deleteProduct(i.id, i.count)}>-</button></td><td>{i.count}</td><td><button onClick={() => increaseItemsCount(i.id)}>+</button></td>
                </tr>
              )}
            </tbody>
          </Table>
            <div className='orderBox'>
              <h3>Товаров в корзине: <strong>{itemsInCartCount}</strong></h3>
              <h3>Общая стоимость: <strong>{itemsInCartPrice}</strong></h3>
            </div>
          </>}
      </div>
    </Container>
  )
}

export default Cart;