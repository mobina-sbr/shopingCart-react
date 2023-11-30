import React,{useContext} from 'react'
import 'react-router-dom'
import { Link } from 'react-router-dom'
import { CartContext } from '../context/CardContext'


export default function Nav() {
    const cart = useContext(CartContext)
    
   const productCount = cart.items.reduce((sum , product) => sum + product.quantity, 0)

    return (
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top ">
            <div class="container-fluid">
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <Link class="nav-link active" to='/'>Shop</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link active mx-2" to='/basket'>
                                ({productCount})
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart-fill" viewBox="0 0 16 16">
                                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                            </svg>
                            </Link>
                        </li>
                        {/* <li class="nav-item">
                            <Link class="nav-link active" to='/login'>LogIn</Link>
                        </li> */}
                    </ul>
                </div>
            </div>
        </nav>
    )
}
