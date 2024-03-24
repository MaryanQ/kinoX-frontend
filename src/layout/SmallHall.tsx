import React from "react";

class Hall2 extends React.Component {
  render() {
    const numRows = 20;

    const numSeatsPerRow = 12;

    return (
      <div>
        <div className="theater">
          <div className="theater-container">
            <div className="screen"></div>
            <small className="screen-direction">screen this way</small>

            <div className="info row-text">
              <p>
                <span className="seat color-box cowboy-color"></span> Cowboy
                seat 10% off
              </p>
              <p>
                <span className="seat color-box sofa-color"></span> Sofa seat
              </p>
              <p>
                <span className="seat color-box available-color"></span>
                Available seat
              </p>
              <p>
                <span className="seat color-box yourSeat-color"></span>
                Your seat
              </p>
            </div>

            {/* Cowboy Rows */}
            {[...Array(2)].map((_, rowIndex) => (
              <div className="row cowboy-row" key={`cowboy-row-${rowIndex}`}>
                {[...Array(numSeatsPerRow)].map((_, seatIndex) => (
                  <div
                    className="seat cowboy-color"
                    key={`cowboy-seat-${rowIndex}-${seatIndex}`}
                  ></div>
                ))}
              </div>
            ))}

            {/* Regular Rows */}
            {[...Array(numRows - 4)].map((_, rowIndex) => (
              <div className="row" key={`row-${rowIndex}`}>
                {[...Array(numSeatsPerRow)].map((_, seatIndex) => (
                  <div
                    className="seat"
                    key={`seat-${rowIndex}-${seatIndex}`}
                  ></div>
                ))}
              </div>
            ))}

            {/* Sofa Rows */}
            {[...Array(2)].map((_, rowIndex) => (
              <div className="row sofa-row" key={`sofa-row-${rowIndex}`}>
                {[...Array(numSeatsPerRow)].map((_, seatIndex) => (
                  <div
                    className="seat sofa-color"
                    key={`sofa-seat-${rowIndex}-${seatIndex}`}
                  ></div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Hall2;
