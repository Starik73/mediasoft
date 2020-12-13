import React from 'react'
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { Button } from 'react-bootstrap';

export const Product = (props) => {
    const activeButton = useSelector(state => state.content.activeButton)
    const product = props.p
    return (
        <div className='product'>
            <img alt='product' src={`assets/img/content/${product.img}.jpg`} />
            <p>
                <strong className='price'>
                    {product.price} ₽
                </strong>
            </p>
            <h4>
                {product.name}
            </h4>
            {!activeButton.find((i) => product.id === i)
                ? <Button variant="warning" onClick={() => props.toCart(product)}>В корзину</Button>
                : <NavLink to='/cart'><Button variant="info">В корзинe, перейти</Button></NavLink>}
        </div>)
}