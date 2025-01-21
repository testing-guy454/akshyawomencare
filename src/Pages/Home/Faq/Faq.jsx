import React from 'react'
import './Faq.css'

const Faq = () => {

    const handleToggle = (e) => {
        
        const question = e.target 
        const answer = e.target.nextSibling 

        if(question.classList.contains('faq-accordion-question-button-active')) {
            question.classList.remove('faq-accordion-question-button-active')
            answer.classList.remove('faq-accordion-answer-active')
        } else {
            // // reset 
            const openQuestions = document.querySelectorAll('.faq-accordion-answer-active')
            const openBtn = document.querySelectorAll('.faq-accordion-question-button-active')
            openQuestions?.forEach(item => item.classList.remove('faq-accordion-answer-active'))      
            openBtn?.forEach(btn => btn.classList.remove('faq-accordion-question-button-active'))

            question.classList.add('faq-accordion-question-button-active')           
            answer.classList.toggle('faq-accordion-answer-active')
        }
    }

    const data = [
        {
            id: 1,
            question: "Which hospital is best for IVF?",
            answer: "We give personalized recommendations based on the problem, We've the best chains of hospiltals!",
        },
        {
            id: 2,
            question: "What is the best cost of IVF in UP, Bihar?",
            answer: "It depends on several factors such as the clinic, specific treatment requirements, and any additional procedures.",
        },
        {
            id: 3,
            question: "How long does an IVF cycle take?",
            answer: "The length of an IVF cycle can vary, but it typically takes around 4-6 weeks.",
        },
        {
            id: 4,
            question: "What is the success rate of IVF?",
            answer: "It varies from person to person due to several factors. However, on average, success can go from 80% to 45%.",
        },
        {
            id: 5,
            question: "Have more Questions?",
            answer: "Contact Us, we'll get back to you soon.",
        },
    ]

    return (
        <div className='faq-accordion df' id='FAQsection'>
           <div className="faq-accordion-container"
           data-aos="fade-in" data-aos-delay="250" data-aos-duration="500"
           >
               <div className="faq-accordion-content">
                   <h1 className="faq-accordion-title">FAQ</h1>

                    {data.map((item)=>(
                   <div className="faq-accordion-question" key={item.id}>
                        <button className="faq-accordion-question-button" 
                        onClick={handleToggle}> {item.question}
                        </button>
                        <div className="faq-accordion-answer">
                            <p> {item.answer}</p>
                        </div>
                   </div>
                    ))}
                    
               </div>
           </div>
        </div>
    )
}

export default Faq
