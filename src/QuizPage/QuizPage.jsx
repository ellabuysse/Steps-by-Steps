import React from 'react';
import QuizNav from '../NavBar/QuizNav';
import BGImage from '../BGImage/BGImage';
import Footer from '../Footer/Footer';
import QuizForm from '../QuizForm/QuizForm';

const TipsPage = (props) => {
    return (
        <div>
            <QuizNav/>
            <h1 className="page-title"></h1>
            <div className="bg-image">
                {
                    <BGImage 
                        img="https://images.pexels.com/photos/1115090/pexels-photo-1115090.jpeg?cs=srgb&dl=beautiful-flowers-bloom-blossom-1115090.jpg&fm=jpg"
                        title="Environmental Impact Quiz"
                        position="bottom"
                        />
                }
            <QuizForm/>
        </div>
        <Footer/>
        
</div>
    );
};
export default TipsPage;