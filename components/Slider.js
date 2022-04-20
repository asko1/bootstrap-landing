import React from "react";
import { Carousel, Image, Ratio } from "react-bootstrap"

export default function Slider () {
    return (
      <Carousel variant="" id="slider">
        
        <Carousel.Item interval={10000}>
          <Ratio aspectRatio={1 / 3}>
            <Image
              className="d-block w-100"
              src="https://placekitten.com/g/1500/500"
              alt="This should convince you"
            />
          </Ratio>
          <Carousel.Caption className="shadow-lg bg-dark bg-opacity-50">
            <h3 className="fw-bold">This should convince you</h3>
            <p>I ran out of ideas, so here are some cats</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={10000}>
          <Ratio aspectRatio={1 / 3}>
            <Image
              className="d-block w-100"
              src="https://placekitten.com/g/1499/500"
              alt="Something even more convincing"
            />
          </Ratio>
          
          <Carousel.Caption className="shadow-lg bg-dark bg-opacity-50">
            <h3>Something even more convincing</h3>
            <p>imagine these cats are product pictures </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Ratio aspectRatio={1 / 3}>
            <Image
              className="d-block w-100"
              src="https://placekitten.com/g/1498/500"
              alt="This should really seal the deal"
            />
          </Ratio>
          <Carousel.Caption className="shadow-lg bg-dark bg-opacity-50">
            <h3>This should really seal the deal</h3>
            <p>I&apos;d rather write something (not) funny</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    )
}
