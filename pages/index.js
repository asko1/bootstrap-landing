import Head from 'next/head'
import Navigation from '../components/Navigation'
import { Button, Image } from 'react-bootstrap'
import Slider from '../components/Slider'
import Contact from '../components/Contact'

export default function Home() {
  return (
    <div className="bg-dark">
      <Head>
        <title>Asko M.</title>
        <meta name="description" content="HTML/CSS homework" />
        <link rel="icon" href="/favicon.ico" />

        <style> {`
          .bd-placeholder-img {
            font-size: 1.125rem;
            text-anchor: middle;
            -webkit-user-select: none;
            -moz-user-select: none;
            user-select: none;
          }

          @media (min-width: 768px) {
            .bd-placeholder-img-lg {
              font-size: 3.5rem;
            }
          } `}
        </style>

        <style> {`
          body {
            padding-top: 3rem;
            padding-bottom: 3rem;
            color: #5a5a5a;
          }

          /* Carousel base class */
          .carousel {
            margin-bottom: 4rem;
          }
          /* Since positioning the image, we need to help out the caption */
          .carousel-caption {
            bottom: 3rem;
            z-index: 10;
          }

          /* Declare heights because of positioning of img element */
          .carousel-item {
            height: 32rem;
          }
          .carousel-item > img {
            position: absolute;
            top: 0;
            left: 0;
            min-width: 100%;
            height: 32rem;
          }

          /* Center align the text within the three columns below the carousel */
          .marketing .col-lg-4 {
            margin-bottom: 1.5rem;
            text-align: center;
          }
          .marketing h2 {
            font-weight: 400;
          }
          /* rtl:begin:ignore */
          .marketing .col-lg-4 p {
            margin-right: .75rem;
            margin-left: .75rem;
          }
          /* rtl:end:ignore */

          .featurette-divider {
            margin: 5rem 0; /* Space out the Bootstrap <hr> more */
          }

          /* Thin out the marketing headings */
          .featurette-heading {
            font-weight: 300;
            line-height: 1;
            /* rtl:remove */
            letter-spacing: -.05rem;
          }

          @media (min-width: 40em) {
            /* Bump up size of carousel content */
            .carousel-caption p {
              margin-bottom: 1.25rem;
              font-size: 1.25rem;
              line-height: 1.4;
            }

            .featurette-heading {
              font-size: 50px;
            }
          }

          @media (min-width: 62em) {
            .featurette-heading {
              margin-top: 7rem;
            }
          } `} 
        </style>
      </Head>

      <Navigation></Navigation>

      <div className="bg-dark text-secondary px-4 py-5 text-center">
        <div className="py-5">
          <h1 className="display-5 fw-bold text-white">This is a hero</h1>
          <div className="col-lg-6 mx-auto">
            <p className="fs-5 mb-4">Not even a superhero? Pathetic. How am I going to sell this with only a &quot;hero&quot;?</p>
            <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
              <Button type="button" variant="outline-info" className="btn btn-outline-info btn-lg px-4 me-sm-3 fw-bold">Custom button</Button>
              <Button type="button" variant="outline-light" className="btn btn-outline-light btn-lg px-4">Secondary</Button>
            </div>
          </div>
        </div>
      </div>

      <Slider></Slider>

      <div className="container marketing bg-dark text-white">
        <div className="row featurette">
          <div className="col-md-7">
            <h2 className="featurette-heading">just buy this product. <span className="text-muted">please.</span></h2>
            <p className="lead">I am going to get fired if you do not. Please take this last convincing image and reconsider.</p>
          </div>
          <div className="col-md-5">
            <Image
              className="d-block w-100"
              src="https://placekitten.com/g/500/500"
              alt="Something even more convincing"
            />
          </div>
        </div>
      </div>

      <Contact></Contact>

    </div>
  )
}
