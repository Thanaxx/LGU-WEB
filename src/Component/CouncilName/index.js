import React from 'react'
import { CouncilWrap, CouncilCon, CouncilCarousel, Item} from './CouncilStyle'
import Carousel from 'react-elastic-carousel'
import { data } from './councildata';

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 3 },
];

function Councils() {
    
    return (
        <>
            <CouncilWrap>
                <CouncilCon>
                    <CouncilCarousel>
                        <Carousel breakPoints={breakPoints} className="carousel">
                        {data.map((item) =>{
                            return(
                                <>
                                    <Item data-aos="zoom-in">
                                        <div className="info">
                                            <img src={item.img} alt="" />
                                            <h4>{item.details}</h4>
                                            <span className="name">{item.name}</span>
                                            <span className="position">{item.position}</span>
                                        </div>
                                    </Item>
                                </>
                            )
                        })}

                    </Carousel>
                     
                    </CouncilCarousel>
                </CouncilCon>
            </CouncilWrap>
        </>
    )
}

export default Councils
