import React from "react";

const AdminDashboadCard = ({ bgColor, headingText, count }) => {
  return (
    <div className="col-lg-6 col-xl-3 mb-4">
      <div className={`card bg-${bgColor} text-white h-100`}>
        <div className="card-body">
          <div className="d-flex justify-content-between align-items-center">
            <div className="me-3">
              <div className="text-white-75 small">{headingText}</div>
              <div className="text-lg fw-bold">{count}</div>
            </div>
          </div>
        </div>
        <div className="card-footer d-flex align-items-center justify-content-between small">
          <a className="text-white stretched-link" href="#!">
            View Volunteers
          </a>
          <div className="text-white">
            <svg
              className="svg-inline--fa fa-angle-right"
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="angle-right"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 256 512"
              data-fa-i2svg
            >
              <path
                fill="currentColor"
                d="M246.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L178.7 256 41.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"
              />
            </svg>
            {/* <i class="fas fa-angle-right"></i> Font Awesome fontawesome.com */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboadCard;
