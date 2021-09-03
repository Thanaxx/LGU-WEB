import React, {useState} from 'react'
import { TourismWrap, TourismMain, MainText, MainImages, ModalImage } from './tourismstyle'
import { tourism } from './images';
import { MdClose } from 'react-icons/md'

function Tourism() {

    const [model, setModel] = useState(false);
    const [tempImgSrc, setTempImgSrc] = useState('');
    
    const getImg = (image) =>{
        setModel(true);
        setTempImgSrc(image);
    }

    return(
        <>
            <ModalImage>
                <div className={model ? "modal open" : "modal"}>
                    <img src={tempImgSrc} alt="" />
                    <MdClose className="closeIcon" onClick={() => setModel(false)}/>
                </div>
            </ModalImage>

            <TourismWrap>
                <TourismMain data-aos="fade-up">
                    <MainText>
                        <h1>Tourism</h1>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et earum pariatur beatae quod eum sequi minus, aut adipisci unde magni quae itaque mollitia laborum dolores eveniet optio magnam ea placeat?</p>
                    </MainText>

                    <MainImages>
                        {tourism.map((item, index) => {
                            return(
                                <>
                                    <div className="team">
                                        <div className="theImage" key={index} onClick={() => getImg(item.image)}>
                                            <img src={item.image} alt="" />

                                            <div className="overlay-text">
                                                <h1>{item.title}</h1>
                                                <p>{item.details}</p>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )
                        })}
                    </MainImages>
                </TourismMain>
            </TourismWrap>
        </>
    );
}

export default Tourism