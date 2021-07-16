import React from "react";
import "./css/Contact1.css";

const Contact1=()=>{
    return(
        <div className="form">
            <div className="first col-md-6 col-12 d-md-flex order-2 order-md-1">
                <h4>Contact Details</h4>
                <hr/>
                <p>
                <br/>
                500 Terry Francois Street

                San Francisco, CA 94158

                <br/>
                <br/>
                info@mysite.com
                <br/>

                Tel: 123-456-7890
                <br/>
                <br/>
                OPENING HOURS:

                <br/>

                Mon - Fri: 7am - 10pm
                <br/>
                ​​Saturday: 8am - 10pm
                <br/>
                ​Sunday: 8am - 11pm
                </p>
            </div>
            <div className="second col-md-6 col-12 order-1 order-md-2">
                <h1 className="d-md-none d-block  ">
                    Let's connect
                    <hr/>
                </h1>
                <form>
                    <ul class="form-style-1">
                        <li><label>Full Name <span class="required">*</span></label><input type="text" name="field1" class="field-divided" placeholder="First" /> <input type="text" name="field2" class="field-divided" placeholder="Last" /></li>
                        <li>
                            <label>Email <span class="required">*</span></label>
                            <input type="email" name="field3" class="field-long" />
                        </li>
                        <li>
                            <label>Subject</label>
                            <select name="field4" class="field-select">
                            <option value="Advertise">Advertise</option>
                            <option value="Partnership">Partnership</option>
                            <option value="General Question">General</option>
                            </select>
                        </li>
                        <li>
                            <label>Your Message <span class="required">*</span></label>
                            <textarea name="field5" id="field5" class="field-long field-textarea"></textarea>
                        </li>
                        <li>
                            <input type="submit" value="Submit" />
                        </li>
                    </ul>
                </form>
                {/* <form mthod="GET" action="#">
                    <label for="fname">First name:</label><br/>
                    <input type="text" id="fname" name="fname"/><br/>
                    <label for="lname">Last name:</label><br/>
                    <input type="text" id="lname" name="lname"/><br/>
                    <label for="id">Email :</label><br/>
                    <input type="email" id="id" name="id"/><br/>
                    <label for="addr">Address:</label><br/>
                    <input type="text" id="addr" name="addr"/>
                </form> */}
            </div>

        </div>
    )
}

export default Contact1;