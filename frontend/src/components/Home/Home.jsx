import React from 'react'
import { Button } from "../../utils/Button/Button";
//import { Button } from 'react-bootstrap';
//import { Button } from "utils/Button/Button";


export const Home = () => {
  return (
    <>
    <div className="home" id="home">
			<div className="container">
				<div className="hero__content col-lg-6 ">
					<h2 className="home__subtitle">100% Natural Food</h2>
					<h1 className="home__title">
						Choose the best healthier way
						 of life
					</h1>
					<Button text="Explore Now" color="yellow" />
				</div>
			</div>
		</div>
    </>
  )
}
