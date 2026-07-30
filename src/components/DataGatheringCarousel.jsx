import Slider from 'react-slick';
import { Box, Image } from '@chakra-ui/react';

// Import slick-carousel css
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// These were previously hard-coded string paths under /assets, which never
// existed in `public/` - every slide 404'd. Importing them lets Vite resolve
// and fingerprint the real files.
import Dg1 from '../assets/datagathering-pictures/Dg1.webp';
import Dg2 from '../assets/datagathering-pictures/Dg2.webp';
import Dg3 from '../assets/datagathering-pictures/Dg3.webp';
import Dg4 from '../assets/datagathering-pictures/Dg4.webp';
import Dg5 from '../assets/datagathering-pictures/Dg5.webp';
import Dg6 from '../assets/datagathering-pictures/Dg6.webp';
import Dg7 from '../assets/datagathering-pictures/Dg7.webp';
import Dg8 from '../assets/datagathering-pictures/Dg8.webp';
import Dg9 from '../assets/datagathering-pictures/Dg9.webp';
import D10 from '../assets/datagathering-pictures/D10.webp';

const images = [Dg1, Dg2, Dg3, Dg4, Dg5, Dg6, Dg7, Dg8, Dg9, D10];

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

  return (
    <Box maxW="800px" mx="auto" py={8}>
      <Slider {...settings}>
        {images.map((src, index) => (
          <Box key={src} p={2}>
            <Image
              src={src}
              alt={`Data gathering photograph ${index + 1}`}
              borderRadius="md"
              boxShadow="md"
              loading="lazy"
            />
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default DataGatheringCarousel;
