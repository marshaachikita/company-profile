import Axios from 'axios';
import React, {useState, useEffect} from 'react'
import '../App.css'
import CardItem from './CardItem'

function CovidInfo(props) {

    const[loading, setLoading] = useState(true)
    const[content, setContent] = useState('')

    useEffect(() => {
        async function getCovidData(){
            const { data: { confirmed, recovered, deaths, lastUpdate} } = await Axios.get('https://covid19.mathdro.id/api/countries/Indonesia');

            setContent({d_con: confirmed.value, d_rec: recovered.value, d_death: deaths.value, l_update: lastUpdate})
            setLoading(false)
        }
        getCovidData()
    }, [])

    return (
        <div className='cards'>
            <h2>Coronavirus Disease (COVID-19) Situation</h2>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <CardItem
                            src={require('../images/covid-increase.png').default}
                            text= {content.d_con}
                            label='Positive'
                        />
                        <CardItem
                            src={require('../images/covid-recovered.jpg').default}
                            text={content.d_rec}
                            label='Recovered'
                        />
                        <CardItem
                            src={require('../images/covid-death.jpg').default}
                            text={content.d_death}
                            label='Death'
                        />
                    </ul>
                </div>
            </div>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <div className='simple-card'>
                        <div className='simple-card-item1'>
                            <h6> OUR SERVICES </h6>
                            <p>
                                We're Here to Make Your Application Software
                            </p>
                        </div>
                        <div className='simple-card-item2'>
                            <h6> Web/ Mobile Design UI&UX </h6>
                            <p>
                                Our user focused approach puts your customer needs at the core of your site
                                whilst keeping your brand a bussiness objectives in mind
                            </p>
                        </div>
                        <div className='simple-card-item2'>
                            <h6> Web/ Mobile Development </h6>
                            <p>
                                Our developers have created everythings on mobile apps and eCommerce site to crawling,
                                price checking, and data processing systems.
                            </p>
                        </div>
                        <div className='simple-card-item2'>
                            <h6> eCommerce </h6>
                            <p>
                                We can offer solutions or support on everything from web development, bespoke RMA,
                                customer service management & tracking, inventory management to simply logo & UI design.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default CovidInfo

