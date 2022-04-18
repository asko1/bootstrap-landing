import React from "react";
import { Carousel, Image } from "react-bootstrap"

export default function Slider () {
    return (
      <Carousel variant="">
        
        <Carousel.Item interval={10000}>
          <Image
            className="d-block w-100"
            src="https://placekitten.com/g/1000/300"
            alt="This should convince you"
          />
          <Carousel.Caption className="shadow-lg">
            <h3 className="fw-bold">This should convince you</h3>
            <p>I ran out of ideas, so here are some cats</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={10000}>
          <Image
            className="d-block w-100"
            src="https://placekitten.com/g/1219/300"
            alt="Something even more convincing"
          />
          <Carousel.Caption className="shadow-lg">
            <h3>Something even more convincing</h3>
            <p>imagine these cats are product pictures </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Image
            className="d-block w-100"
            src="https://placekitten.com/g/1200/300"
            alt="This should really seal the deal"
          />
          <Carousel.Caption className="shadow-lg">
            <h3>This should really seal the deal</h3>
            <p>I&apos;d rather write something (not) funny</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    )
}
