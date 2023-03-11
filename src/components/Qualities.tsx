import React from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

const Qualities = () => {

    const data = [
        {
            title:"Overnight Stay",
            description:'Lorem ipsum dolostrum ullam recusaem commodi incid m. Facere, dicta eius?',

            imgSrc:'https://www.mlm-dra.com/wp-content/uploads/2019/06/images2038-5d125419c8054.jpg'
        },
        {
            title:"Couples",
            description:'Lorem ipsum dolor siuri labore, nostrquam rerumoracere, dicta eius?',
            imgSrc:'https://i.pinimg.com/originals/f1/91/b4/f191b47f4126729466a5438736d124ad.jpg'
        },
        {
            title:"Gathering/Meetings",
            description:'Lorem ipsum dolor lam recusan ducimus quam rerumrum. Facere, dicta eius?',
            imgSrc:'https://th.bing.com/th/id/R.9b0d48524317e8f3a5fc8b48c0bd9cd4?rik=PQjdo7Jl4WFqsA&pid=ImgRaw&r=0',
        },
        {
            title:"Quick Travel",
            description:'Lorem ipsum dolor sit amet consectetur adipisicing elitm corharum. Facere, dicta eius?',
            imgSrc:'https://th.bing.com/th/id/R.ed82bfb114eaa1d7cd43deaaed3f05f9?rik=Dv%2fpC6jh5%2f74Fw&pid=ImgRaw&r=0'
        },
    ]
    const settings: Object = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow:<ArrowForwardIosIcon/>,
        prevArrow:<ArrowBackIosIcon/>,
        arrows:false
    };
    return (
        <div className="qualities_container">
            <h1>Our Traits</h1>
            <div className="qualities_internal_container">
                <div className="slider_container">
                    <Slider {...settings}>
                        {
                            data.map((elem,index)=>{
                                let myImage = elem.imgSrc;
                                return(
                                    <div className={`slider_child slider_child${index}`}>
                                        <style>{`
                                            .slider_child${index}{
                                                background-image:url('${myImage}');
                                                background-position:center;
                                                background-size:cover;
                                                background-origin:center;
                                                filter:grayscale(.5);
                                            }
                                        `}</style>
                                        <h1>{elem.title}</h1>
                                        <h3>{elem.description}</h3>
                                        <span></span>
                                    </div>
                                )
                            })
                        }
                    </Slider>
                </div>
            </div>
        </div>
    )
}

export default Qualities