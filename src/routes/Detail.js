import React from 'react';
import './Detail.css';

class Detail extends React.Component {
    componentDidMount() {
        const { location, history } = this.props;
    if(location.state === undefined){
        history.push('/');
    }

    }
    render(){
        const { location } = this.props;
        if (location.state) {
        return (
            <div className="detail__container">
                <img src={location.state.posters} alt={location.state.title} title={location.state.title} />
                <div className="detail__data">
                    <h3 className="detail__title">{location.state.title}</h3>
                    <h5 className="detail__year">{location.state.year}</h5>
                    <ul className="detail__genres">
                    {location.state.genres.map((genre, index) => {
                        return (
                        <li key={index} className="detail__genre">
                            {genre}
                            </li>
                            );
                    })} 
                    </ul>
                    <p className="detail__summary">{location.state.summary}</p>
                </div>
            </div>
            
            )
        } else {
            return null;
        }
       
    }
}
export default Detail;