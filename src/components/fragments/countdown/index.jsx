import React, { Component } from "react";

class CountdownTimer extends Component {
  constructor(props) {
    super(props);
    const targetDate = new Date("2023-12-24T08:00:00");

    this.state = {
      targetDate: targetDate.getTime(),
      timeRemaining: {},
    };
  }

  componentDidMount() {
    this.updateTimeRemaining();
    this.interval = setInterval(this.updateTimeRemaining, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  updateTimeRemaining = () => {
    const currentTime = new Date().getTime();
    const timeRemaining = this.state.targetDate - currentTime;

    if (timeRemaining <= 0) {
      clearInterval(this.interval);
      this.setState({
        timeRemaining: { days: 0, hours: 0, minutes: 0, seconds: 0 },
      });
    } else {
      const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor(
        (timeRemaining % (1000 * 60 * 60)) / (1000 * 60)
      );
      const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

      this.setState({ timeRemaining: { days, hours, minutes, seconds } });
    }
  };

  render() {
    const { days, hours, minutes, seconds } = this.state.timeRemaining;

    return (
      <div className="justify-between bg-primary py-12">
        <div className="grid  gap-2 justify-center items-center">
          <h3
            className="text-2xl text-center font-serif text-secondary text-title"
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
          >
            Save The Date
          </h3>
          <div className="flex gap-14  text-center">
            <div
              className="grid gap-1 items-center"
              data-aos="fade-up"
              data-aos-duration="250"
            >
              <h3 className="text-3xl text-selected font-serif">{days}</h3>
              <span className="text-sm text-readOnly">Hari</span>
            </div>
            <div
              className="grid gap-1 items-center"
              data-aos="fade-up"
              data-aos-duration="350"
            >
              <h3 className="text-3xl text-selected font-serif">{hours}</h3>
              <span className="text-sm text-readOnly">Jam</span>
            </div>
            <div
              className="grid gap-1 items-center"
              data-aos="fade-up"
              data-aos-duration="450"
            >
              <h3 className="text-3xl text-selected font-serif">{minutes}</h3>
              <span className="text-sm text-readOnly">Menit</span>
            </div>
            <div
              className="grid gap-1 items-center"
              data-aos="fade-up"
              data-aos-duration="550"
            >
              <h3 className="text-3xl text-selected font-serif">{seconds}</h3>
              <span className="text-sm text-readOnly">Detik</span>
            </div>
          </div>
        </div>
        {/* <div className="flex justify-between bottom-0 items-end">
                    <img alt="testing" src={Jav} className="lg:h-52 sm:h-40 opacity-75" data-aos="fade-down-right" />
                    <img alt="testing" src={Jav} className="lg:h-52 sm:h-24 lg:block" data-aos="fade-down-left" />
        </div> */}
      </div>
    );
  }
}

export default CountdownTimer;
