import { useGSAP } from '@gsap/react'
import React, { useRef } from 'react'
import gsap from 'gsap';
import { animateWithGsap } from '../utils/animations';
import { explore1Img, explore2Img, exploreVideo } from '../utils';
import { DigitalGlitch } from 'three/examples/jsm/Addons.js';
const Testimonial = () => {
    useGSAP(() => {
        animateWithGsap('#features_title1', { y:0, opacity:1})
        animateWithGsap(
            '.g_grow',
            { scale: 1, opacity: 1, ease: 'power1' },
            { scrub: 5.5 }
          );
          animateWithGsap(
            '.g_text1',
            {y:0, opacity: 1,ease: 'power2.inOut',duration: 1}
          )

    }, []);
  return (
    <section className="h-full common-padding bg-zinc relative overflow-hidden">
      {/* <div className="screen-max-wdith">
        <div className="mb-12 w-full">
            <h1 id="features_title1" className="section-heading">Hear what others have to say.</h1>
        </div>
        <div className="flex-center flex-col sm:px-10">
            <div className="flex flex-col justtify-center items-center overflow-hidden">
                <div className="flex flex-col w-full relative">
                <div className="feature-text-container">
                <div className="flex-1 flex-center">
                  <p className="feature-text g_text">
                    iPhone 16 Pro is {' '}
                    <span className="text-white">
                      the first iPhone to feature an aerospace-grade titanium design
                    </span>,
                    using the same alloy that spacecrafts use for missions to Mars.
                  </p>
                </div>

                <div className="flex-1 flex-center">
                  <p className="feature-text g_text">
                    Titanium has one of the best strength-to-weight ratios of any metal, making these our {' '}
                    <span className="text-white">
                      lightest Pro models ever.
                    </span>
                    You'll notice the difference the moment you pick one up.
                  </p>
                </div>


              </div>

                </div>
            </div>
        </div>
      </div> */}
      <div className="screen-max-wdith">
        <div className="mb-12 w-full">
          <h1 id="features_title1" className="section-heading">What others have to say.</h1>
        </div>
        
        <div className="flex flex-col justify-center items-center overflow-hidden">
          {/* <div className="mt-32 mb-24 pl-24">
            <h2 className="text-5xl lg:text-7xl font-semibold">iPhone.</h2>
            <h2 className="text-5xl lg:text-7xl font-semibold">Forged in titanium.</h2>
          </div> */}
          <div className="flex-center flex-col sm:px-10">
          <div className="flex flex-col w-full relative">
          
              <div className="feature-text-container1">
                <div className="flex-1 flex-center">
                  <p className="feature-text1 g_text1">
                    iPhone 16 Pro is my first iOS product, {' '}
                    <span className="text-white">
                      and I absolutely love it. {' '}
                    </span> 
                     Switched from Android to iOS.
                        <p align="end">
                        - Mayank Agrawal
                        <p>Quant Research, Nomura</p>
                        </p>
                  </p>
                  
                </div>

                <div className="flex-1 flex-center">
                <p className="feature-text1 g_text1">
                    The new display is   {' '}
                    <span className="text-white">
                    incredibly vibrant, {' '}
                    </span> 
                    and everything feels smoother with the upgraded processor.
                    <p align="end">
                        - Sonal Agrawal
                        <p>Consultant, BCG</p>
                    </p>
                  </p>
                </div>
                <div className="flex-1 flex-center">
                <p className="feature-text1 g_text1">
                    The iPhone 16's camera is  {' '}
                    <span className="text-white">
                    simply outstanding! {' '}
                    </span> 
                    The clarity and detail in photos are next level.
                        <p align="end">
                        - Ajay Agrawal
                        <p>President, Reliance</p>
                        
                    </p>
                  </p>
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>
    </section>
  )
}

export default Testimonial;
