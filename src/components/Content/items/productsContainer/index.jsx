import React from 'react'
import { useDispatch } from 'react-redux';
import { addProductAction } from '../../../../redux/cart-reducer';
import { setActiveButtonAction } from '../../../../redux/content-reducer';
import { Product } from './product';
import { Row, Col } from 'react-bootstrap';
import { Card } from '@material-ui/core';

export const ProductsContainer = (props) => {
    const dispatch = useDispatch()
    const addProduct = (item) => dispatch(addProductAction(item))
    const setActiveButton = (id) => dispatch(setActiveButtonAction(id))

    const toCart = (p) => {
        let item = { id: p.id, name: p.name, price: p.price, article: p.article, count: 1 }
        setActiveButton(p.id)
        addProduct(item)
    }

    return (
        <Row className='productsContainer'>
            {props.products.map(product =>
                <Col>
                    <Card className="text-center">
                        <Product key={product.id} p={product} toCart={toCart} />
                    </Card>
                </Col>)}
        </Row>)
}