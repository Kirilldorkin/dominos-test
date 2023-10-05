"use client";
import React, { useState } from "react";
import { IoMdArrowDropup } from "react-icons/io";
import "../../../styles/english/Checkout.scss";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";

const Checkout = () => {
  const [value, setValue] = useState();
  return (
    <div className="checkout">
      <div className="container">
        <h1>CHECKOUT</h1>
        <div className="order_sum">
          <div className="total">
            <div>TOTAL: 57.00 AED</div>
            <p>
              HIDE ORDER SUMMARY <IoMdArrowDropup />
            </p>
          </div>
          <div className="order_details">
            <div className="order_inside">
              <table className="order_table">
                <thead>
                  <tr>
                    <th>ITEM</th>
                    <th>QTY</th>
                    <th>PRICE</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="title">
                      <p>LARGE HAND TOSSED PHILLY CHEESE STEAK DYNAMITE</p>
                    </td>
                    <td>1</td>
                    <td>57.00 AED</td>
                  </tr>
                </tbody>
              </table>
              <div className="table_down">
                <button className="change_btn">CHANGE YOUR ORDER</button>
                <div className="price_details">
                  <div>
                    <p>
                      Food &<br /> Beverage:
                    </p>
                    <p>54.29 AED</p>
                  </div>
                  <div>
                    <p>VAT:</p>
                    <p>2.71 AED</p>
                  </div>
                  <div>
                    <p>Total:</p>
                    <p>57.00 AED</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="user_contacts">
          <div className="contacts_title">
            <p>1 OF 2</p>
          </div>
          <div className="contacts">
            <form>
              <input type="name" placeholder="* Name:" />
              <input type="text" placeholder="* Address:" />
              <PhoneInput country="US" value={value} onChange={setValue} />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
