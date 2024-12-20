import React, { useState } from 'react'
import "./style.css"

export default function Items() {
    const [itemCounter, setItemCounter] = useState(1);

    return (
        <div>
            <div className="rounded-4 border p-3 h-100">
                <div className="cartItemContainer card mb-3 border-0 h-100">
                    <div className="row g-0 h-100">
                        <div className="col-md-4 h-100">
                            <img src="https://next-ecommerce-shopco.vercel.app/_next/image?url=%2Fimages%2Fpic13.png&w=384&q=75" className="h-100 w-100 img-fluid rounded-start rounded-2" alt="..."/>
                        </div>
                        <div class="col-md-8">
                            <div class="card-body d-flex flex-column justify-content-between">
                                <div>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <h5 className="card-title">Gradiant Graphic T-shirt</h5>
                                        <i className="trash fa-solid fa-trash-can fa-sm pb-2" role = "button"></i>
                                    </div>
                                    <p className="card-text m-0">Size: <span className='fw-normal'>Large</span></p>
                                    <p className="card-text">Color: <span className='fw-normal'>White</span></p>
                                </div>
                                <div className='d-flex justify-content-between align-items-center'>
                                    <h4 className="card-title fw-bold">$145</h4>
                                    <div className='d-flex justify-content-between rounded-5'>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <hr/>

                <div className="cartItemContainer card mb-3 border-0 h-100">
                    <div className="row g-0 h-100">
                        <div className="col-md-4 h-100">
                            <img src="https://next-ecommerce-shopco.vercel.app/_next/image?url=%2Fimages%2Fpic3.png&w=384&q=75" className="h-100 w-100 img-fluid rounded-start rounded-2" alt="..."/>
                        </div>
                        <div className="col-md-8">
                            <div className="card-body d-flex flex-column justify-content-between">
                                <div>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <h5 className="card-title">Checkered Shirt</h5>
                                        <i className="trash fa-solid fa-trash-can fa-sm pb-2" role = "button"></i>
                                    </div>
                                    <p className="card-text m-0">Size: <span className='fw-normal'>Medium</span></p>
                                    <p className="card-text">Color: <span className='fw-normal'>Red</span></p>
                                </div>
                                <div className='d-flex justify-content-between align-items-center'>
                                    <h4 className="card-title fw-bold">$180</h4>
                                    <div className='d-flex justify-content-between rounded-5'>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <hr/>

                <div className="cartItemContainer card mb-3 border-0 h-100">
                    <div className="row g-0 h-100">
                        <div className="col-md-4 h-100">
                            <img src="https://next-ecommerce-shopco.vercel.app/_next/image?url=%2Fimages%2Fpic2.png&w=384&q=75" className="h-100 w-100 img-fluid rounded-2" alt="..."/>
                        </div>
                        <div className="col-md-8">
                            <div className="card-body d-flex flex-column justify-content-between">
                                <div>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <h5 className="card-title">Skinny Fit Jeans</h5>
                                        <i className="trash fa-solid fa-trash-can fa-sm pb-2" role = "button"></i>
                                    </div>
                                    <p className="card-text m-0">Size: <span className='fw-normal'>Large</span></p>
                                    <p className="card-text">Color: <span className='fw-normal'>Blue</span></p>
                                </div>
                                <div className='d-flex justify-content-between align-items-center'>
                                    <h4 className="card-title fw-bold">$240</h4>
                                    <div className='d-flex justify-content-between rounded-5'>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <hr/>
            </div>
        </div>
    )
}
