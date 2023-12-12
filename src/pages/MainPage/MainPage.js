import React, { useEffect } from 'react'
import CategoriesList from '../../components/CategoriesList/CategoriesList'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { useRef } from 'react'
import Banner from '../../components/Banner/Banner'
import Offer from '../../components/Offer/Offer'

import SaleList from '../../components/SaleList/SaleList'
import { fetchCategoriesList } from '../../AsyncActions/categories'
import { fetchAllProducts } from '../../AsyncActions/products'


function MainPage() {

    const dispatch = useDispatch()
    let saleRef = useRef()
    // let catalogRef = useRef()

    const categories = useSelector(store => store.categories)
    const categories_part = categories.slice(0,4)

    function scrollToSaleList(){
        saleRef.current.scrollIntoView({behavior:'smooth'})
    }

    useEffect(() => {
        window.scrollTo(0, 0)
        dispatch(fetchCategoriesList())
        dispatch(fetchAllProducts())
        
    }, [dispatch])

    return (
        <>
            <Banner scrollToSaleList={scrollToSaleList}/>
            <CategoriesList categories={categories_part}    
                            title={'Catalog'} 
                            show_btn={true} />   
            <Offer />  
            <SaleList ref={saleRef}/>      
        </>
    )
}

export default MainPage