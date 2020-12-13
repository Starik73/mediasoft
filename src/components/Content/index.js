import React from 'react';
import { productsSelector } from '../../selectors/content-selector';
import { useSelector } from 'react-redux';
import { Pagination } from './items/pagination';
import { ProductsContainer } from './items/productsContainer';
import { Container } from 'react-bootstrap';
import ThemeContext from '../../utils/ThemeContext';

export const Content = () => {
    const { theme } = React.useContext(ThemeContext);
    const products = useSelector(state => productsSelector(state))

    return (
        <Container className={theme === "light" ? "bg-ligth" : "bg-dark"}>
            <div className='content'>
                <Pagination />
                <ProductsContainer products={products} />
                <Pagination />
            </div>
        </Container>
    )
}