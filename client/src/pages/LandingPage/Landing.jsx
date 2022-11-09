import React from 'react'

export default function Landing() {
    return (
        <div className='landing'>
            <div className='landing__banner' >
                WELLCOME
            </div>
            <div className='landing__text'>
                <h1>GYM PAPARULO </h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda velit quas eaque eveniet earum quia illo, corrupti</p>
            </div>
            {/* <div className='landing__spinner'></div> */}
            <footer className='landing__footer'>
                <address>
                    Visit us at:<br />
                    Example.com<br />
                    Box 564, Disneyland<br />
                    USA
                </address>
            </footer>
        </div>
    )
}
