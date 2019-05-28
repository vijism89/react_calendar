import PickyDateTime from 'react-picky-date-time';

<PickyDateTime
  size="xs"
  mode={1}
  show={showPickyDateTime}
  locale="en-us"
  defaultTime={hour:minute:second meridiem} // "HH:MM:SS AM"
  defaultDate={month/date/year} // "MM/DD/YYYY"
  onClose={() => this.setState({ showPickyDateTime: false })}
  onYearPicked={res => this.onYearPicked(res)}
  onMonthPicked={res => this.onMonthPicked(res)}
  onDatePicked={res => this.onDatePicked(res)}
  onResetDate={res => this.onResetDate(res)}
  onResetDefaultDate={res => this.onResetDefaultDate(res)}
  onSecondChange={res => this.onSecondChange(res)}
  onMinuteChange={res => this.onMinuteChange(res)}
  onHourChange={res => this.onHourChange(res)}
  onMeridiemChange={res => this.onMeridiemChange(res)}
  onResetTime={res => this.onResetTime(res)}
  onResetDefaultTime={res => this.onResetDefaultTime(res)}
  onClearTime={res => this.onClearTime(res)}
/>
