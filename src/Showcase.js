import React from 'react';
import { Jumbotron,Container,Button,Form} from 'react-bootstrap';

function Showcase() {
    return (
<div >
<Jumbotron className="jumbo">
      
<Container className="showcase">
<div className="imgbx">
<img className="containerpic"
        src="../Pic/fts.jpg"
        alt=""
      />
      </div>
    <h1>Booking rates</h1>
    <p>
      Saturday 
      Rs:1300 per hour<br></br>
      Weekdays 
      Rs:1200 per hour<br></br>
      <br></br>
      <h2>Value for money</h2>
      
        #)2 Good condtion balls will be provided <br></br>
        #)Bibs will be provided<br></br>
        #)Enough parking area<br></br>
        #)Vip area for organizer<br></br>
        #)Can cater 200-300 spectators<br></br>
        #)Separate Warm-up area<br></br>
        #)Social media promotion<br></br>
        #)Full maintain A grade turf<br></br>
        #)Sufficient area ofr advertisement and promotion.<br></br>
        <br></br>
       <h2> Terms and Conditions</h2>
        1)30%Advance payment<br></br>
        2)Any damage made to property of Feild Futsal Organisation will responsible<br></br>
        3)If organizer wants to have food station at the venue rates will be Rs:1500 per hour<br></br>
       </p>
  <br></br>
  <br></br>

<h2>Booking</h2>
<Form>
<Form.Group controlId="formBasicname">
<Form.Label>Name</Form.Label>
<Form.Control type="email" placeholder="Enter Name" />
<Form.Text className="text-muted">
</Form.Text>
</Form.Group>
<Form.Group controlId="formBasicnumber">
<Form.Label>Phone Number</Form.Label>
<Form.Control type="number" placeholder="Phone Number" />
</Form.Group>
<Form.Group controlId="formBasicdate">
<Form.Label>Date</Form.Label>
<Form.Control type="date" placeholder="date" />
</Form.Group>
<Form.Group controlId="bookingtime">
<Form.Label>Booking Time</Form.Label>
<Form.Control as="select">
      <option>9am-10am</option>
      <option>10am-11am</option>
      <option>12pm-1pm</option>
      <option>1pm-2pm</option>
      <option>3pm-4pm</option>
  </Form.Control>
  </Form.Group>
  <Button className="butt"  type="submit">
    Submit
  </Button>
  </Form>
</Container>
</Jumbotron>

</div>

);
}
  
  export default Showcase;
  