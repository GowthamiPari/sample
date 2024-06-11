import React,{ useState} from 'react'
import axios from 'axios'
import './styles.css'
const Countries = () => {
    const[search,setSearch] = useState("")
    const[countriesData,setcountriesData] = useState([])
   const[newdata,setnewdata] = useState([])
    const changeHandler = (event) =>{
        //setSearch(event.target.value.charAt(0).toUpperCase() + event.target.value.slice(1));
        // /\\b\\w/g
        const input = event.target.value;
        axios.get(`https://apis.ccbp.in/countries-data`).then((response) => {
            setcountriesData(response.data);
        }) 
        const searchedcountry = countriesData.filter((country) =>{
          if(country.name.includes(search)) {
            //console.log(countriesData);
            console.log("True"); 
            return country;
          }
      })
          //console.log(searchedcountry);
          setnewdata(searchedcountry);
          console.log(newdata);
        const capitalizedInput = input.replace(/^\w|\s\w/g , (char) => char.toUpperCase());
        setSearch(capitalizedInput);
    }
    const submitHandler = (event) =>{
        //console.log(event.target.value);
        event.preventDefault();
        axios.get(`https://apis.ccbp.in/countries-data`).then((response) => {
            setcountriesData(response.data);
        }) 
        //console.log(countriesData);
        console.log(search);
        const searchedcountry = countriesData.filter((country) =>{
            if(search === country.name) {
              //console.log(countriesData);
              console.log("True"); 
              return country;
            }  
        })
      setnewdata(searchedcountry);
            //console.log(searchedcountry);
            console.log(newdata);
    }

  return (
    <div >
      <center>
        <h5 className="title">Countries List</h5>
        <form onSubmit={submitHandler}>
          <input type="search" value={search} onChange={changeHandler} />
          <br />
          <input className="submit" name="search" type="submit" />
        </form>
        <div>
          {newdata.length > 0 ? (
            newdata.map((country) => (
                <li style={{ listStyleType: 'none' }} key={ country.name}> <br/>
                        <div>Country Flag:</div><br/>
                        <img className='flag' src={country.flag} alt={country.name} />
                        <p className='countrydetails'>Country Name: {country.name}<br/>Population: {country.population}</p>
                    </li>
            ))
          ) : (
            <p> No Country found </p>
          )}
        </div>
      </center>
    </div>
  );
}

export default Countries