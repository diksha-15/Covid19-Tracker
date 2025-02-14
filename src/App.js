import React from 'react';

/*import Cards from './components/Cards/Cards';
import Chart from './components/Chart/Chart';
import CountryPicker from './components/CountryPicker/CountryPicker';*/
import styles from './App.module.css';
import { Cards, Chart, CountryPicker} from './components';
import {fetchData} from './api';
import coronaImage from './image/Covid.png';

class App extends React.Component {
     state = {
   	 data: {},
   	 country: '',
   }

	async componentDidMount() {
		const fetchedData =  await fetchData();
		
		this.setState({data: fetchedData});
		{/*console.log(data);*/}	
	} 

    handleCountryChange = async (country) => { 	
    	const fetchedData =  await fetchData(country);
    	//console.log(fetchedData);
    	//console.log(country);
    	this.setState({data: fetchedData, country: country});
    } 

	render() {
		const {data,  country} = this.state;
		return (
			<div className={styles.container}>
			    <img className={styles.image} src={coronaImage} alt="COVID-19"/>
				<Cards data={data} />
                <CountryPicker  handleCountryChange={this.handleCountryChange}/>
                <Chart data={data} country={country} /> 
			</div>	
		)
	}
}

export default App ;