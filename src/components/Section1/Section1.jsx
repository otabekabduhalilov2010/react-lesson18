import React from 'react'
import s from './Section1.module.scss'

const Section1 = () => {
  return (
  <>
  
  <section className={s.section}>
    <div className="container">
        <div className={s.wrap}>
            <div className={s.box}>
                <div className={s.div}>
                    <img src="/map1.png" alt="" />
                    <div className={s.tittle}>
                    <h4>Pay Us a Visit</h4>
                    <p> (110) 1111-1010 </p>
                    </div>
                </div>
                <div className={s.div}>
                    <img src="/call.png" alt="" />
                    <div className={s.tittle}>
                    <h4>Give Us a Call</h4>
                    <p>Union St, Seattle, WA 98101, United States</p>
                    </div>
                </div>
                <div className={s.div}>
                    <img src="/pochta.png" alt="" />
                    <div className={s.tittle}>
                    <h4>Send Us a Message</h4>
                    <p>Contact@HydraVTech.com</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </section>

  </>
  )
}

export default Section1
