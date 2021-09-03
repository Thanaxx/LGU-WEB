import React from 'react'
import { news } from './newsname'
import { NewsWrapper, NewsCont, Headnews, NewsLinks, NewsBox } from './newsStyle'

function New() {
    return (
        <>
           <NewsWrapper>
                <NewsCont data-aos="fade-up">
                    <Headnews>
                        <p>the <span>PUBLIC’S DAILY BRIEF</span> When the President needs the latest intelligence analysis, he reviews the President’s Daily Brief. When the public needs information, they can rely on the Public’s Daily Brief.</p>
                    </Headnews>

                    <NewsLinks>
                        {news.map((item) => {
                            return(
                                <>
                                    <NewsBox>
                                        <img src={item.image} alt="" />
                                        
                                        <div className="details">
                                            <h3>{item.Head}</h3>
                                            <p>{item.description}</p>
                                            <button>Discover</button>
                                        </div>
                                    </NewsBox>
                                </>
                            )
                        })}
                    </NewsLinks>
                </NewsCont>
           </NewsWrapper>  
        </>
    )
}

export default New
