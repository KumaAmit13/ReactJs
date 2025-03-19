import React from "react";
import { Outlet, Link, useNavigation, NavLink } from "react-router-dom";

export default function Root() {
  const navigation = useNavigation();
    return (
      <>
        <div id="sidebar">
          <h1>React Router Contacts</h1>
          <div>
            <form id="search-form" role="search">
              <input
                id="q"
                aria-label="Search contacts"
                placeholder="Search"
                type="search"
                name="q"
              />
              <div
                id="search-spinner"
                aria-hidden
                hidden={true}
              />
              <div
                className="sr-only"
                aria-live="polite"
              ></div>
            </form>
            <form method="post">
              <button type="submit">New</button>
            </form>
          </div>
          <nav>
            <ul>
              <li>
                <NavLink to={`/contacts/1`}  className={(e)=>e.isActive?"red":e.isPending?"panding" :  ""}>Your Name</NavLink>
              </li>
              <li>
                <NavLink to={`/contacts/2`}>Your Friend</NavLink>
              </li>
            </ul>
          </nav>
        </div>
        <div id="detail"
        className={
          navigation.state === "loading" ? "loading" : ""
        }>
        <Outlet />
        </div>
      </>
    );
  }
  