import React, { Component } from 'react'
import './Welcome.css'

export default class Welcome extends Component {
    render() {
        return (
            <section className='Welcome'>
                <h3>Hi, my name is Juan Mireles</h3>
                <p>
                    I'm a Mexican Native and raised in Texas. I
                    come from a Hispanic culture that values
                    family and tradition. I love to spend
                    quality time with my parents, sister, and
                    wife on weekends.
                </p>
                <p>When I'm around people, I enjoy seeing everyone
                    happy, so I try to make people laugh or help
                    them when they are struggling. I tend to put
                    other people's needs over mine to help them out.
                </p>
            </section>
        )
    }
}