import ceo from '../img/ceo1.png';
import pack from '../img/pack.png';
import lab from '../img/lab.png';

const About = () => {
    return (
        <>
            <div class = 'ceo'>
                    <img src={ceo}/>
            </div>
            <div class='title'>
                <h2>Every Little Bit Counts.</h2>
                <h4>Endding plastic waste one smile at a time.</h4>
            </div>    
            <div class='top'>
                <p>Bite started with two questions: Why does toothpaste come in plastic tubes and what exactly are we putting in our bodies when we brush our teeth?</p>
            </div>
            <div class='pack'>
                <img src={pack}/>
            </div>    
            <div class='float'>
                <div class='text'>
                    <h2>Digging Deep.</h2>
                    <p>At the heart of Bite, we want to do better. That means asking ourselves, every day, how we can improve. Whether it’s mindlessly tossing out an 
                    empty toothpaste tube or glossing over the ingredients list, small daily actions can shape the future of our planet. By uncovering how we can be 
                    better to ourselves and to the earth, we are one step closer to a healthier and plastic-free world.</p>
                </div>
                <img src={lab}/>
                </div>   
        </>       
       
    );
  };
  
  export default About;