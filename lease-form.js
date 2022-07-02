
const submitLeaseForm = (event) =>{
    event.preventDefault();

    const storySection= document.getElementById("storySection")
console.log(storySection)
const form = new FormData(event.target);
const userSubmission = Object.fromEntries(form);

//The code below will remove single quote from value in HTML for the radio button given id louie in order to be implemented into the stroy string with ease for eas y rendering
// var radiobutton= document.getElementById("drone").value;
// let radiofinal = userSubmission[radiobutton]
//Code Above description given

// if (radiofinal.includes("'")){radiofinal.pop("'")};
// if (radiofinal.includes("'")){radiofinal.pop("'")}


const story = `<p> <div><h2>LEASE AGREEMENT</h2></div>


<div><h3>Landlord: </h3></div>
<div class="inserted text">${userSubmission.landLordName}</div>

<div><h3>Tenant(s):</h3> </div>
<div class="inserted text">${userSubmission.tenants}</div>


<div><h3>Property Type:</h3> </div>
<div class="inserted text">${userSubmission.propertyType}</div>


<div><h3>Address:</h3></div>
<div class="inserted text">${userSubmission.Address}</div>

<div><h3>Lease Date:</h3></div>
<div>Starting: <span class="inserted text">${userSubmission.LeaseStart}</div>
<div>Ending: <span class="inserted text">${userSubmission.LeaseEnd}</div>

<div><h3>Rent:</h3></div>
<div>Rent for the lease’s duration until <span class="inserted text">${userSubmission.LeaseEnd}</span> will be <span class="inserted text">$${userSubmission.Rent}</span> a month. Additional fees may apply if caught violating any of the terms of this agreement in addition to supplementary addons if applicable (ie. Parking).</div>

<div><h3>RENT INCREASE</h3></div>
<div>On <span class="inserted text">${userSubmission.LeaseEnd}</span>, rent will increase by $<span class="inserted text">${userSubmission.RentIncrease}</span></div>

<div><h3>Advanced Security:</h3></div>
<div><span class="inserted text">${userSubmission.SecurityAmount}</span> months security and <span class="inserted text">${userSubmission.RentAmountMonths}</span> month(s) rent will be collected at the time of this lease signature. The total for this is <span class="inserted text">${((Number(userSubmission.Security)*Number((userSubmission.SecurityAmount))+(Number(userSubmission.Rent)*Number((userSubmission.RentAmountMonths))))).toFixed(2)}</span> USD.</div>
<div>This is due on the first day this lease is signed, and the lease starts taking in effect starting <span class="inserted text">${userSubmission.LeaseStart}</span>.</div>

<div><h3>TERMS OF USE: </h3></div>
<div>The <span class="inserted text">${userSubmission.propertyType}</span> apartment must be only used as a <span class="inserted text">${userSubmission.propertyType}</span> apartment to live as the primary residence of the Tenant(s). And for no other reason. Only the party signing this lease may use the <span class="inserted text">${userSubmission.propertyType}</span>.</div>

<div><h3>Selling the Property by the Landlord</h3></div>
<div>If the landlord decides to sell the <span class="inserted text">${userSubmission.propertyType}</span>, you must allow the buyer (with landlord’s consent) to view the apartment. The landlord will give you two months notice if the buyer wants the tenant to vacant the apartment. </div>

<div><h3>Number of Occupants:</h3></div>
<div>Lessee agrees that the premises shall be occupied by no more than the person listed here: </div>

<div>Their names are as follows:</div>
<div class="inserted text">${userSubmission.Name1}</div>
<div class="inserted text">${userSubmission.Name2}</div>
<div class="inserted text">${userSubmission.Name3}</div>
<div class="inserted text">${userSubmission.Name4}</div>
<div class="inserted text">${userSubmission.Name5}</div>
<div class="inserted text">${userSubmission.Name6}</div>
<div class="inserted text">${userSubmission.Name7}</div>

<div><h3>Services:</h3></div>

<div>Landlord will provide heat and hot & cold water as per law. </div>
<div>${userSubmission.drone}</div>
<div> If applicable, an additional <span class="inserted text">${userSubmission.Acond}</span> USD and <span class="inserted text">${userSubmission.Acond2}</span> USD for each additional air-conditioner will be added to the rent. </div>


<div><h3>Parking:</h3></div>
<div>The cost of parking each month is <span class="inserted text">${userSubmission.park}</span> USD if applicable, which should be added to the rent each month.</div>
<div> 🗸 Tenant will take parking</div>
<div> 🗸 Tenant will not take parking</div>



<div><h3>Not Permitted:</h3></div>
<div> ❌ No Washing Machines allowed</div>
<div> ❌ No Dryer allowed</div>
<div> ❌ No Pets allowed</div>
<div> ❌ No Soliciting of any individual at the front of the Property</div>
<div> ❌ No hanging cloths or belongings on windows frontage</div>
<div> ❌ Smoke Detector must not be tampered</div>
<div> ❌ Stair Case must always be clear</div>
<div> ❌ Nothing must be left at the front porch</div>
<div> ❌ No bargains or illicit drugs</div>
<div> ❌ The main door must be closed at ALL TIMES</div>
<div> ❌ No Loud Music or Parties in the house</div>



<div><h3>Garbage Removal:</h3></div>
<div>Garbage and recycle must be separated properly. Any tickets incurred from improper recycling will be the sole responsibility of the tenant(s) involved.</div>
<div><span class="inserted text">${userSubmission.recycledays}</span> – Recycle and Garbage Day</div>
<div><span class="inserted text">${userSubmission.garbageDays}</span> – Only Garbage</div>

<div><h3>Notice of Moving</h3></div>
<div>There are no sub-leases allowed.</div>
<div>If you decide to move out, you must give <span class="inserted text">${userSubmission.noticemoving}</span> month notice and must return the apartment in the same condition as it were given. Security will be returned once you hand over the apartment in the same condition given and once you hand over the keys to the apartment. Any damages done to the apartment will incur charges deducted from the security deposit.</div>



<div>Signature of Landlord____________________                             Date: _________________</div>




<div>Signature of Responsible Tenant ____________________        Date: _________________ </div> </p>`;

storySection.insertAdjacentHTML("afterend", story);



}
