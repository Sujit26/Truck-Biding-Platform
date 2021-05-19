/* eslint-disable no-use-before-define */
import React from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import DatePicker from "react-date-picker";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Icon from "@material-ui/core/Icon";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));

export default function BookingForm() {
  const classes = useStyles();
  const [date, onChange] = React.useState(new Date());
  const defaultCities = {
    options: cities,
    getOptionLabel: (option) => option,
  };

  const truckTypePros = {
    options: truckType,
    getOptionLabel: (option) => option,
  };

  const handleClick = {};

  return (
    <div style={{ height: "1000" }}>
      <Autocomplete
        {...defaultCities}
        id="Pick Up City"
        debug
        renderInput={(params) => (
          <TextField {...params} label="Pick Up City" margin="normal" />
        )}
      />
      <Autocomplete
        {...defaultCities}
        id="Drop off City"
        debug
        renderInput={(params) => (
          <TextField {...params} label="Drop off City" margin="normal" />
        )}
      />
      <Autocomplete
        {...truckTypePros}
        id="Truck Type"
        clearOnEscape
        renderInput={(params) => (
          <TextField {...params} label="Truck Type" margin="normal" />
        )}
      />

      <div>
        <p style={{ marginRight: 20 }}>Pick up Date</p>
        <DatePicker onChange={onChange} value={date} />
      </div>

      <Link
        to="/active_consignment"
        style={{ textDecoration: "none", color: "inherit" }}
      >
        <Button
          onClick={handleClick}
          variant="contained"
          color="primary"
          className={classes.button}
          endIcon={<Icon>send</Icon>}
        >
          Request for Consignment
        </Button>
      </Link>
    </div>
  );
}

const cities = [
  "Delhi",
  "Mumbai",
  "Kolkāta",
  "Bangalore",
  "Chennai",
  "Hyderābād",
  "Pune",
  "Ahmadābād",
  "Sūrat",
  "Lucknow",
  "Jaipur",
  "Cawnpore",
  "Mirzāpur",
  "Nāgpur",
  "Ghāziābād",
  "Indore",
  "Vadodara",
  "Vishākhapatnam",
  "Bhopāl",
  "Chinchvad",
  "Patna",
  "Ludhiāna",
  "Āgra",
  "Kalyān",
  "Madurai",
  "Jamshedpur",
  "Nāsik",
  "Farīdābād",
  "Aurangābād",
  "Rājkot",
  "Meerut",
  "Jabalpur",
  "Thāne",
  "Dhanbād",
  "Allahābād",
  "Vārānasi",
  "Srīnagar",
  "Amritsar",
  "Alīgarh",
  "Bhiwandi",
  "Gwalior",
  "Bhilai",
  "Hāora",
  "Rānchi",
  "Bezwāda",
  "Chandīgarh",
  "Mysore",
  "Raipur",
  "Kota",
  "Bareilly",
  "Jodhpur",
  "Coimbatore",
  "Dispur",
  "Guwāhāti",
  "Solāpur",
  "Trichinopoly",
  "Hubli",
  "Jalandhar",
  "Bhubaneshwar",
  "Bhayandar",
  "Morādābād",
  "Kolhāpur",
  "Thiruvananthapuram",
  "Sahāranpur",
  "Warangal",
  "Salem",
  "Mālegaon",
  "Kochi",
  "Gorakhpur",
  "Shimoga",
  "Tiruppūr",
  "Guntūr",
  "Raurkela",
  "Mangalore",
  "Nānded",
  "Cuttack",
  "Chānda",
  "Dehra Dūn",
  "Durgāpur",
  "Āsansol",
  "Bhāvnagar",
  "Amrāvati",
  "Nellore",
  "Ajmer",
  "Tinnevelly",
  "Bīkaner",
  "Agartala",
  "Ujjain",
  "Jhānsi",
  "Ulhāsnagar",
  "Davangere",
  "Jammu",
  "Belgaum",
  "Gulbarga",
  "Jāmnagar",
  "Dhūlia",
  "Gaya",
  "Jalgaon",
  "Kurnool",
  "Udaipur",
  "Bellary",
  "Sāngli",
  "Tuticorin",
  "Calicut",
  "Akola",
  "Bhāgalpur",
  "Sīkar",
  "Tumkūr",
  "Quilon",
  "Muzaffarnagar",
  "Bhīlwāra",
  "Nizāmābād",
  "Bhātpāra",
  "Kākināda",
  "Parbhani",
  "Pānihāti",
  "Lātūr",
  "Rohtak",
  "Rājapālaiyam",
  "Ahmadnagar",
  "Cuddapah",
  "Rājahmundry",
  "Alwar",
  "Muzaffarpur",
  "Bilāspur",
  "Mathura",
  "Kāmārhāti",
  "Patiāla",
  "Saugor",
  "Bijāpur",
  "Brahmapur",
  "Shāhjānpur",
  "Trichūr",
  "Barddhamān",
  "Kulti",
  "Sambalpur",
  "Purnea",
  "Hisar",
  "Fīrozābād",
  "Bīdar",
  "Rāmpur",
  "Shiliguri",
  "Bāli",
  "Pānīpat",
  "Karīmnagar",
  "Bhuj",
  "Ichalkaranji",
  "Tirupati",
  "Hospet",
  "Āīzawl",
  "Sannai",
  "Bārāsat",
  "Ratlām",
  "Handwāra",
  "Drug",
  "Imphāl",
  "Anantapur",
  "Etāwah",
  "Rāichūr",
  "Ongole",
  "Bharatpur",
  "Begusarai",
  "Sonīpat",
  "Rāmgundam",
  "Hāpur",
  "Uluberiya",
  "Porbandar",
  "Pāli",
  "Vizianagaram",
  "Puducherry",
  "Karnāl",
  "Nāgercoil",
  "Tanjore",
  "Sambhal",
  "Shimla",
  "Ghāndīnagar",
  "Shillong",
  "New Delhi",
  "Port Blair",
  "Gangtok",
  "Kohīma",
  "Itānagar",
  "Panaji",
  "Damān",
  "Kavaratti",
  "Panchkula",
  "Kagaznāgār",
];
// https://truckguru.co.in/truck-type TRUCK TYPE DETAILS
const truckType = [
  "32 Feet Single Axel Truck (7.5 Ton Capacity)",
  "32 Feet Multi Axel Truck (16 Ton Capacity)",
  "24 Feet Single Axel Truck (7.5 Ton Capacity)",
  "24 Feet Multi Axel Truck (16 Ton Capacity)",
  "20 Feet Single Axel Truck (7.5 Ton Capacity)",
  "20 Feet Multi Axel Truck (16 Ton Capacity)",
  "32-40 Feet 14 Wheeler Truck (21 Ton To 31 Ton Capacity)",
  "20-32 Feet 10 Wheeler Truck (10 Ton To 25 Ton Capacity)",
  "24-32 Feet 12 Wheeler Truck (16 Ton To 25 Ton Capacity)",
  "14 Feet Eicher (Capacity Of 3.5 - 4 Ton Capacity)",
  "17 Feet Eicher (Capacity Of 4.5 - 5 Ton Capacity",
  "19 Feet Eicher (Capacity Of 5.5 - 10 Ton Capacity)",
];
