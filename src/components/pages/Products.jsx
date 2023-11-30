import React from 'react'
import Card from './../Card'
import { useAPI } from '../../context/DataContext'

export default function Products() {

    const {products} = useAPI()

    return (
        <>
            <div style={{display:'flex',flexDirection:'row',justifyContent:'space-around'}} className='row container align-item-center  pb-5 my-5 text-center mx-auto'>
                {products?.map((data) => {
                    return (
                        <div className='col-md-3  rounded shadow mt-5 ms-1' key={data.id}>
                            <Card title={data.title} data={data} id={data.id} clas='btn btn-outline-dark' children="Add To Cart" />
                        </div>
                    )
                })}
            </div>
        </>
    )
}
