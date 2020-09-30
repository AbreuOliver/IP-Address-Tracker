import React from 'react';
import {Section} from './styles/search';
import pattern from 'images/pattern-bg.png'
const Search = () => {
    return(
        <div>
            <img src={pattern} alt='low-res map'/>
            <input placeholder="Search for any IP address or doman" />
            <button>&#8827;</button>
            <Section>
                <div>
                    <h3>IP ADDRESS</h3>
                    <div>489.678.645.615</div>
                </div>
                <div>
                    <h3>LOCATION</h3>
                    <div>Nowhere, NY</div>
                </div>
                <div>
                    <h3>TIMEZONE</h3>
                    <div>UTC -5:00</div>
                </div>
                <div>
                    <h3>ISP</h3>
                    <div>SpaceX Starlink</div>
                </div>
            </Section>
        </div>
    )
}

export default Search