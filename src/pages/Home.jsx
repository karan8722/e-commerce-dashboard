import React from "react";

function Home() {
  return (
    <div>

      <h1>Dashboard</h1>

      <p>
        Welcome to the E-Commerce Admin Dashboard.
      </p>

      <div className="row mt-4">

        <div className="col-md-3">
          <div className="card dashboard-card">
            <div className="card-body">
              <h5>Products</h5>
              <h2>25</h2>
              <p>Products available</p>
            </div>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card dashboard-card">
            <div className="card-body">
              <h5>Orders</h5>
              <h2>120</h2>
              <p>Total orders</p>
            </div>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card dashboard-card">
            <div className="card-body">
              <h5>Users</h5>
              <h2>85</h2>
              <p>Registered users</p>
            </div>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card dashboard-card">
            <div className="card-body">
              <h5>Revenue</h5>
              <h2>₹50K</h2>
              <p>Total revenue</p>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
}

export default Home;