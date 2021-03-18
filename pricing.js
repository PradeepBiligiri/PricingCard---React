import React from "react";

function Pricing(props) {
  return (
    <div className="col-lg-4">
      {/* // wring Js code for Pricing of Card once. */}
      <div className="card mb-5 mb-lg-0">
        <div class="card-body">
          <h5 class="card-title text-muted text-uppercase text-center">
            {props.data.plan}
          </h5>
          <h6 class="card-price text-center">
            {props.data.currency}
            {props.data.price}
            <span class="period">/{props.data.period}</span>
          </h6>
          <hr />
          <ul class="fa-ul">
            {props.data.listItems.map((item) => {
              return (
                <>
                  {/* The <></> is empty tag know as Fragments which help in Wrapping the code. */}
                  {item.isEnabled ? (
                    <li>
                      <span class="fa-li">
                        <i class="fas fa-check"></i>
                      </span>
                      {item.itemName}
                      {/* This one code will provide all the list itemName in side Card based on Different Price */}
                    </li>
                  ) : (
                    <li class="text-muted">
                      <span class="fa-li">
                        <i class="fas fa-times"></i>
                      </span>
                      {item.itemName}
                      {/* This one code will provide all the list itemName in side Card based on Different Price */}
                    </li>
                  )}
                </>
              );
            })}
          </ul>
          <a href="#" class="btn btn-block btn-primary text-uppercase">
            Button
          </a>
        </div>
      </div>
    </div>
  );
}

export default Pricing;

// {/* <li>
//             <span class="fa-li">
//                 <i class="fas fa-check"></i>
//             </span>
//             5GB Storage
//             </li>
//             <li>
//             <span class="fa-li">
//                 <i class="fas fa-check"></i>
//             </span>
//             Unlimited Public Projects
//             </li>
//             <li>
//             <span class="fa-li">
//                 <i class="fas fa-check"></i>
//             </span>
//             Community Access
//             </li>
//             <li class="text-muted">
//             {/* // text muted will make text in grey color. */}
//         <span class="fa-li">
//             <i class="fas fa-times"></i>
//         </span>
//         Unlimited Private Projects
//         </li>
//         <li class="text-muted">
//         <span class="fa-li">
//             <i class="fas fa-times"></i>
//         </span>
//         Dedicated Phone Support
//         </li>
//         <li class="text-muted">
//         <span class="fa-li">
//             <i class="fas fa-times"></i>
//         </span>
//         Free Subdomain
//         </li>
//         <li class="text-muted">
//         <span class="fa-li">
//             <i class="fas fa-times"></i>
//         </span>
//         Monthly Status Reports
//         </li> */}
