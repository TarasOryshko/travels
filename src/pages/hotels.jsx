import React from "react";
import Collapsible from "../components/Collapsible";

import { countries } from "../data/countries";
import ListOfCountries from "../components/listOfCountries";

function Hotels() {
  return (
    <div>
      <h1 className="borderBottom">ГОТЕЛІ</h1>
      <div className="gridC">
        <div>
          <Collapsible title="Усі країни">
            <Collapsible title="Європа" size="20px" color="red">
              <div>
                <a href="!">text for example</a>
              </div>
              <hr />
              <div>
                <a href="!">text for example 2</a>
              </div>
              <hr />
              <Collapsible title="second example" left="10px" color="green">
                <div>
                  <a href="!">second text</a>
                </div>
              </Collapsible>
            </Collapsible>
            <Collapsible title="Америка">
              <div>
                <a href="!">США</a>
              </div>
            </Collapsible>
            <Collapsible title="Австралія"></Collapsible>
          </Collapsible>
        </div>
        <div>
          <ListOfCountries countries={countries} />
        </div>
      </div>
    </div>
  );
}

export default Hotels;
