import React from 'react';

class Map extends React.Component {
    
    componentDidMount() {
        // this.props.course._id
        let location = {
            latitude:'42.1917354',
            longitude:'-71.1738433',
            elevation: '13.62'
        }

        let site = `https://maps.google.com/maps/?q=${location.latitude},${location.longitude}`
        console.log(site)
        document.getElementById('mapIframe').src = site;
    }

    render() {
        return(
            <iframe id="mapIframe" className="mapsFrame" src="http://getprismatic.com/" title="W3Schools Free Online Web Tutorials"></iframe>
        );
    }
    
}

export default Map