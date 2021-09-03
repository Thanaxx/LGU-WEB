import React from 'react'
import { headline } from './headlines'
import { NewsWrapper, NewsHead, Headname, Morenews, Topnews, News } from './headlinestyle'
import { Button } from '../../Buttons/Button'

function Headnews() {
    return (
        <>
            <NewsWrapper>
                <NewsHead>
                    <Headname data-aos="fade-up">
                        <p>the <span>PUBLIC'S DAILY BRIEF</span> When the President needs the latest intelligence analysis, he reviews the President’s Daily Brief. When the public needs information, they can rely on the Public’s Daily Brief.</p>
                    </Headname>

                    <Morenews data-aos="fade-up">
                        <p>LATEST NEWSFEED</p>
                        <Button buttonStyle='btn-sec'>Read more</Button>
                    </Morenews>
                </NewsHead>

                <Topnews>
                    {headline.map((item, index) => {
                        return(
                            <>
                                <News to={item.path} data-aos="zoom-in">
                                    <img src={item.cover} alt="images" />
                                    <h1>{item.header}</h1>
                                    <h4>{item.description}</h4>
                                    <Button buttonStyle='btn-sec' to={item.path}>Read more</Button>
                                </News>
                            </>
                        )
                    })}
                </Topnews>
            </NewsWrapper>
        </>
    )
}

export default Headnews
