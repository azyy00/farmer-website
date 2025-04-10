import React from 'react';
import Slider from 'react-slick';
import { Box, Image } from '@chakra-ui/react';

// Import slick-carousel css
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const DataGatheringCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const images = [
    '/assets/datagathering-pictures/D1.png',
    '/assets/datagathering-pictures/D2.png',
    '/assets/datagathering-pictures/D3.png',
    '/assets/datagathering-pictures/D4.png',
    '/assets/datagathering-pictures/D5.png',
    '/assets/datagathering-pictures/D6.png',
    '/assets/datagathering-pictures/D7.png',
    '/assets/datagathering-pictures/D8.png',
    '/assets/datagathering-pictures/D9.png',
    '/assets/datagathering-pictures/D10.png',
    
    // Add more image paths as needed
  ];

  return (
    <Box maxW="800px" mx="auto" py={8}>
      <Slider {...settings}>
        {images.map((src, index) => (
          <Box key={index} p={2}>
            <Image src={src} alt={`Data Gathering ${index + 1}`} borderRadius="md" boxShadow="md" />
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default DataGatheringCarousel; 