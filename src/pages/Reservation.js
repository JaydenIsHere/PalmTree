import React ,{useState}from 'react'
import './reservation.css'
const Reservation = () => {
const [check , setCheck] = useState(false)
    return (
        <section >
<div className="wrapper bg-db">


        <div className="reservation-section">
<nav className='text-center'>
<h1>RESERVATION</h1>
</nav>

            <div className="container py-3">
                <div className="reservation-card my-3">

<div className="step sm-conatainer flex">

<div className="step-group text-center">
    <div className="step-outline">
<p  >1</p>
</div>
    <span>Reservation</span>
</div>

<div className="step-group text-center">
    <div className="step-outline">
<p >2</p>
</div>
    <span>Information</span>
</div>


<div className="step-group text-center">
    <div className="step-outline">
<p >3</p>
</div>
    <span>Confirmation</span>
</div>

</div>

<div className="card-container">

    <form action="#" className='card-square-outline grid grid-1'>

    <div className="select-section flex">
    <select name="adult" id="adult">
    <option value="1 Adult">1 Adult</option>
    <option value="2 Adult">2 Adult</option>
    <option value="3 Adult">3 Adult</option>
    <option value="4 Adult">4 Adult</option>
    <option value="5 Adult">5 Adult</option>
</select>

<select name="children" id="children" >
    <option value="0 Children">0 Children</option>
    <option value="1 Children">1 Children</option>
    <option value="2 Children">2 Children</option>
    <option value="3 Children">3 Children</option>
    <option value="4 Children">4 Children</option>
 
</select>

<input type="date" id="date" name="date"/>


<select name="time" id="time">
    <option value="1">Time</option>
    <option value="1">4:00 pm</option>
    <option value="2">4:15 pm</option>
    <option value="3">4:30 pm</option>
    <option value="4">4:45 pm</option>
    <option value="5">5:00 pm</option>
</select>
    </div>

<div className="termsAndCondition p-2">
<p >
Please note that all guests are required to show proof of either their full vaccination (at least 14 days after receiving the second dose of recognised vaccines), a negative PET result that’s valid for the dine-in duration, or proof of recovery from COVID-19 with a valid PET exemption notice, upon arrival. Restaurants reserve the right to turn away guests who fail to comply with these new dine-in measures, as outlined and required by the Singapore Government.

Special requests are not guaranteed and are subject to availability and restaurant discretion. Notes stating an alternative timing or party-size will not be accommodated.
</p>
</div>

<div className="agreecheck text-bk">
<input type="checkbox" id='agree' name='agree' onClick={() => setCheck(!check)}/>
<label htmlFor="agree" > I have read and agree to the above terms and conditions.</label>
</div>

<input type="submit" value ='Next'className='submit-btn btn btn-dg' disabled={check ? false : true}/>

    </form>
            </div>

</div>
            </div>


            </div>    
            </div>
        </section>
    )
}

export default Reservation
