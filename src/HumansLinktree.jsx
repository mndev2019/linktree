
import humans from './assets/humans.png'
import mail from './assets/gmail.png'
import insta from './assets/instagram.png'
import fb from './assets/facebook.png'
import youtube from './assets/youtube.png'
import whatsapp from './assets/whatsapp.png'
import tedspeaker from './assets/tedspeaker.webp'
import logo from './assets/logo.png'

//import tedspeaker2 from './assets/humansofanimallandtedspeaker.jpeg'
import tedspeaker3 from './assets/tedspeaker3.png'
//import tedspeahermedia from './assets/tedimagemedia.png'
import buddylife from './assets/buddylife.png'
import hindustan from './assets/hindustan-times.png'
import indiatimes from './assets/Indiatimes.jpg'
import amarujala from './assets/Amar-Ujala.avif'
import blogs1 from './assets/blogs1.png'
import { CalendarOutlined } from '@ant-design/icons'
import healing from './assets/healing.png'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useState } from 'react'
//import { Link } from 'react-router-dom'

const HumansLinktree = () => {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,

        autoplaySpeed: 2000,
        cssEase: "linear"
    };
    const [showQuiz, setShowQuiz] = useState(false); // Control quiz visibility
    const [currentQuizIndex, setCurrentQuizIndex] = useState(0); // Track the current quiz
    const [selectedAnswers, setSelectedAnswers] = useState({}); // Store selected answers

    const arr = [
        {
            question: "How often do you feel like your pet knows what you are thinking?",
            answers: [
                "A) Always",
                "B) Often",
                "C) Rarely",
                "D) Never"
            ]
        },
        {
            question: "Do you feel a strong sense of intuition when it comes to your pet's health or well-being?",
            answers: [
                "A) Always",
                "B) Often",
                "C) Rarely",
                "D) Never"
            ]
        },
        {
            question: "How often do you have vivid dreams or visions related to your pet?",
            answers: [
                "A) Always",
                "B) Often",
                "C) Rarely",
                "D) Never"
            ]
        },
        {
            question: "Do you feel like your pet can sense when you're thinking about them?",
            answers: [
                "A) Always",
                "B) Often",
                "C) Rarely",
                "D) Never"
            ]
        },
        {
            question: "Have you ever felt a sudden urge to check on your pet, only to find they needed attention?",
            answers: [
                "A) Always",
                "B) Often",
                "C) Rarely",
                "D) Never"
            ]
        },
        {
            question: "Have you ever had a pet that seemed to know exactly when you needed them?",
            answers: [
                "A) Always",
                "B) Often",
                "C) Rarely",
                "D) Never"
            ]
        },
    ]

    // Function to handle selecting an answer
    const handleAnswerSelect = (quizIndex, answerIndex) => {
        setSelectedAnswers({ ...selectedAnswers, [quizIndex]: answerIndex });
    }

    // Function to move to the next quiz
    const handleNextQuiz = () => {
        if (currentQuizIndex < arr.length - 1) {
            setCurrentQuizIndex(currentQuizIndex + 1); // Move to next quiz
        } else {
            setShowQuiz(false); // Hide quizzes after the last one
        }
    }

    // Function to move to the previous quiz
    const handlePreviousQuiz = () => {
        if (currentQuizIndex > 0) {
            setCurrentQuizIndex(currentQuizIndex - 1); // Move to the previous quiz
        }
    }

    return (
        <>
            <section className="py-10 px-5 flex justify-center items-center">
                <div className="container mx-auto">
                    <div className="w-full flex flex-col justify-center items-center text-center">
                        <div className="h-[100px] w-[100px] rounded-full">
                            <img src={humans} alt="image" className="h-[100px] w-[100px] rounded-full mx-auto" />
                        </div>
                        <h2 className='text-lg font-bold pt-3 text-[#502e7b]'>Dr. Parul Chaudhri</h2>
                        <p className='pt-3 text-lg text-[#502e7b]'>
                            🐱 Animal Communicator® 🐶<span className='block'> Animal Communication School & Community</span>
                        </p>
                        <div className="flex gap-4 py-3">
                            <a href='mailto:soulpets@humansofanimalland.com' target='_blank'>
                                <img src={mail} alt='email' className='h-[30px] w-[30px]' />
                            </a>
                            <a href='https://www.instagram.com/humansofanimalland/' target='_blank'>
                                <img src={insta} alt='instagram' className='h-[30px] w-[30px]' />
                            </a>
                            <a href='https://www.facebook.com/humansofanimalland/' target='_blank'>
                                <img src={fb} alt='facebook' className='h-[30px] w-[30px]' />
                            </a>
                            <a href='https://www.youtube.com/@humansofanimalland1929' target='_blank'>
                                <img src={youtube} alt='youtube' className='h-[37px] w-[37px]' />
                            </a>
                            <a href='https://wa.me/+918527044887' target='_blank'>
                                <img src={whatsapp} alt='whatsapp' className='h-[35px] w-[35px]' />
                            </a>
                        </div>
                        <div className="w-full py-3">
                            <h1 className='font-bold pb-3 text-xl text-[#502e7b]'>TED SPEAKER</h1>
                            <a href='https://www.youtube.com/watch?v=1RdcFTJBLYE' target='_blank'>
                                <div className="div inline-flex lg:h-[300px] h-auto w-max-full overflow-hidden ">
                                    <img src={tedspeaker3} alt='image' className='w-full object-fit-contain rounded-lg' />
                                </div>
                            </a>
                        </div>
                        <div className="w-full py-3">
                            <h1 className="font-bold pb-3 text-xl text-[#502e7b]">TAKE THE QUIZ!</h1>
                            <div
                                className="bg-primary rounded-lg p-2 inline-flex items-center lg:w-[530px] w-full gap-2 cursor-pointer"
                                onClick={() => setShowQuiz(true)} // Show quiz section on click
                            >
                                <div className="icon w-[50px] h-[50px] rounded-lg overflow-hidden">
                                    <img src={tedspeaker} alt="image" className="w-full h-full object-cover" />
                                </div>
                                <div className="text">
                                    <p className="text-light font-semibold text-md">QUIZ  :  How Connected Are You With Your Pet?</p>
                                </div>
                            </div>
                        </div>

                        {showQuiz && ( // Show quiz section when 'showQuiz' is true
                            <div className="bg-[#e2daed] rounded-[10px] mt-4 p-4">
                                <div className="w-full">
                                    <p className='font-light text-lg text-primary'>
                                        {arr[currentQuizIndex].question}
                                    </p>
                                    <div className="p-2">
                                        {arr[currentQuizIndex].answers.map((answer, index) => (
                                            <label key={index} className="flex items-center w-full bg-[#EEEEEE] p-1 mt-2">
                                                <input
                                                    type="radio"
                                                    name={`quiz-${currentQuizIndex}`} // Group radio buttons by quiz index
                                                    className="mr-2"
                                                    checked={selectedAnswers[currentQuizIndex] === index} // Check if selected
                                                    onChange={() => handleAnswerSelect(currentQuizIndex, index)} // Handle selection
                                                />
                                                {answer}
                                            </label>
                                        ))}
                                    </div>
                                    <div className="flex justify-between mt-4">
                                        {/* Show 'Previous' button only if not on the first quiz */}
                                        {currentQuizIndex > 0 && (
                                            <button
                                                className="bg-secondary text-white px-4 py-2 rounded-lg"
                                                onClick={handlePreviousQuiz}
                                            >
                                                Previous
                                            </button>
                                        )}
                                        <button
                                            className="bg-primary text-white px-4 py-2 rounded-lg"
                                            onClick={handleNextQuiz}
                                        >
                                            {currentQuizIndex < arr.length - 1 ? "Next" : "Finish"}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )}
                        <div className="w-full py-3">
                            <h1 className='font-bold pb-3 text-xl text-[#502e7b]'>MEDIA SPEAKS</h1>
                            <div className="lg:w-[530px] w-full inline-flex items-center">
                                <Slider {...settings} className="w-full">
                                    <div className="slide-item">
                                        <div className="w-[150px] h-[150px] flex items-center justify-center newsbox">
                                            <a href='https://www.hindustantimes.com/lifestyle/pet/animal-communication-healing-therapies-to-help-resolve-behaviour-issues-in-pets-101676294863615.html' target='_blank'>
                                                <img src={hindustan} alt='image' className="w-full h-full object-cover" />
                                            </a>
                                        </div>
                                    </div>
                                    <div className="slide-item">
                                        <div className="w-[150px] h-[150px] flex items-center justify-center newsbox">
                                            <a href='https://humansofanimalland.com/public/assets/pdf/buddy-life-magzine.pdf' target='_blank'>
                                                <img src={indiatimes} alt='image' className="w-full h-full object-cover" />
                                            </a>
                                        </div>
                                    </div>
                                    <div className="slide-item">
                                        <div className="w-[150px] h-[150px] flex items-center justify-center newsbox">
                                            <a href='https://humansofanimalland.com/public/assets/pdf/buddy-life-magzine.pdf' target='_blank'>
                                                <img src={amarujala} alt='image' className="w-full h-full object-cover" />
                                            </a>
                                        </div>
                                    </div>
                                    <div className="slide-item">
                                        <div className="w-[150px] h-[150px] flex items-center justify-center newsbox">
                                            <a href='https://humansofanimalland.com/public/assets/pdf/buddy-life-magzine.pdf' target='_blank'>
                                                <img src={buddylife} alt='image' className="w-full h-full object-cover" />
                                            </a>
                                        </div>
                                    </div>
                                </Slider>
                            </div>
                        </div>
                        <div className="w-full py-3">
                            <h1 className='font-bold pb-3 text-xl text-[#502e7b]'>WEBSITE</h1>
                            <a href='https://humansofanimalland.com/' target='_blank'>
                                <div className="bg-primary rounded-lg p-2 inline-flex items-center lg:w-[530px] w-full gap-5 cursor-pointer ">
                                    <div className="icon w-[50px] h-[50px] rounded-lg overflow-hidden">
                                        <img src={logo} alt="image" className="w-[70px] h-[50px] object-fit-cover bg-white" />
                                    </div>
                                    <div className="text">
                                        <p className="text-light font-semibold text-md">Humans of Animal Land</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="w-full py-3">
                            <h1 className='font-bold pb-3 text-xl text-[#502e7b]'>NEW ADVANCED HEALING</h1>
                            <div className=" lg:w-[530px] w-full inline-flex items-center">
                                <div className="grid grid-cols-3 gap-3">
                                    <div className="col-span-1">
                                        <a href='https://humansofanimalland.com/services/aura-cleansing' target='_blank'>
                                            <div className="w-full h-full text-center  newsbox hover:bg-primary group p-8 flex flex-col items-center justify-center">
                                                <div className="h-[70px] w-[70px] rounded-full">
                                                    <img src={healing} alt='image' className='h-[70px] w-[70px] object-cover rounded-full mx-auto' />
                                                </div>
                                                <p className='text-primary font-light text-sm group-hover:text-light mt-2'>
                                                    AURA CLEANSING
                                                </p>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="col-span-1 ">
                                        <a href='https://humansofanimalland.com/services/energy-healing' target='_blank'>
                                            <div className="w-full h-full text-center  newsbox hover:bg-primary group p-8 flex flex-col items-center justify-center">
                                                <div className="h-[70px] w-[70px] rounded-full ">
                                                    <img src={healing} alt='image' className='h-[70px] w-[70px] object-cover rounded-full mx-auto' />
                                                </div>
                                                <p className='text-primary font-light text-sm group-hover:text-light mt-2'>
                                                    ENERGY HEALING
                                                </p>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="col-span-1 ">
                                        <a href='https://humansofanimalland.com/services/bach-flower-therapy' target='_blank'>
                                            <div className="w-full h-full text-center  newsbox hover:bg-primary group p-8 flex flex-col items-center justify-center">
                                                <div className="h-[70px] w-[70px] rounded-full">
                                                    <img src={healing} alt='image' className='h-[70px] w-[70px] object-cover rounded-full mx-auto' />
                                                </div>
                                                <p className='text-primary font-light text-sm group-hover:text-light mt-2'>
                                                    BACH FLOWER THERAPY
                                                </p>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-full py-3">
                            <h1 className='font-bold pb-3 text-xl text-[#502e7b]'>BLOGS</h1>
                            <div className=" lg:w-[530px] w-full inline-flex items-center">
                                <div className="grid grid-cols-1 gap-5">
                                    <div className="col-span-1 ">
                                        <a href='https://humansofanimalland.com/blogs/how-to-deal-with-pet-loss' target='_blank'>
                                            <div className="w-full newsbox">
                                                <img src={blogs1} alt='image' className='' />
                                                <div className="w-full h-full flex justify-between mt-3">
                                                    <div className="text">
                                                        <p className='text-lg font-bold text-left'>
                                                            How to Deal with Pet Loss?</p>
                                                    </div>
                                                    <div className="icon">
                                                        <p><CalendarOutlined /> 8-MAR-2024</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-full py-3">
                            <h1 className='font-bold pb-3 text-xl'>COMING SOON</h1>
                            <div className='lg:w-[530px] w-full inline-flex items-center'>
                                <div className="grid grid-cols-2 gap-5">
                                    <div className="col-span-1">
                                        <div className="w-full h-full text-center  newsbox hover:bg-primary group p-8 flex flex-col items-center justify-center">
                                            <p className='text-primary font-light text-lg group-hover:text-light w-full'>
                                                CLASSES
                                            </p>
                                        </div>
                                    </div>
                                    <div className="col-span-1">
                                        <div className="w-full h-full text-center  newsbox hover:bg-primary group p-8 flex flex-col items-center justify-center">
                                            <p className='text-primary font-light text-lg group-hover:text-light w-full'>
                                                WORKSHOP
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default HumansLinktree