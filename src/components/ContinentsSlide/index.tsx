import { Box } from '@chakra-ui/react';
import { Swiper, SwiperSlide} from 'swiper/react';

import { Autoplay, Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { CardSlide } from './CardSlide';
import { useAllPrismicDocumentsByType } from '@prismicio/react';


export function ContinentsSlide(){

  const [document] = useAllPrismicDocumentsByType('continente')

  console.log(document)

    return (
        <Box
          maxW="full"
          maxH="450px"
          px={["","2rem","2rem","6.25rem"]}
        >
            <Swiper
                spaceBetween={50}
                loop={true}
                centeredSlides={true}
                autoplay={{
                  delay: 6000,
                  disableOnInteraction: false,
                }}
                pagination={{
                  clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
              {document?.map(item=>
                <SwiperSlide>
                  <CardSlide
                    key={item.id}
                    link={item.uid}
                    image={item.data.banner.capa.url}
                  >{new Array(item.data.continentname[0].text, item.data.continentdescription[0].text)}
                  </CardSlide>
                </SwiperSlide> )}
            </Swiper>
        </Box>
    )
}
