import React, { Component } from 'react';
import './Footer.css';
import {
    Link
} from 'react-router-dom';

export default class Footer extends Component {

    render() {

        return(
            <p className="footer">
                &#169; 2019 
          
                <a href="https://engage.us.greenpeace.org/onlineactions/Vk878guqbE-eUxLgtZC-Cg2?&utm_source=gnp&utm_medium=adwords&utm_campaign=Inc__190208_BrandSearch_____AGZZZZZZZZZZ&ms=CK.GP.2019.GA.BrandSearch&sourceid=1005368&gclid=CjwKCAjw36DpBRAYEiwAmVVDMIL-pu2aMivVACXOvH8ocq7Rreoc016oxzxh1Tkhexwsi_Bpx43vbRoCeKQQAvD_BwE" class="donate">donate now</a>
            </p>
            
        )
    }
}