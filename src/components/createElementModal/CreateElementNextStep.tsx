import React, { useState } from 'react';
import classes from './CreateElementModal.module.scss';
import calenderIcon from '../../images/calenderIcon.png';
import toggleBtn from '../../images/toggle-button.png';
import check from '../../images/check.png';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.module.css';
import Input from '../input/Input';
import Select from '../select/Select';
import Button from '../button/Button';
import SuccessModal from '../successModl/SuccessModal';

const months = [
  'Jan',
  'Feb',
  'March',
  'Apr',
  'May',
  'June',
  'July',
  'Aug',
  'Sept',
  'Oct',
  'Nov',
  'Dec',
];

interface INextStep {
  setNextStep: React.Dispatch<React.SetStateAction<boolean>>;
}

const CreateElementNextStep: React.FC<INextStep> = ({ setNextStep }) => {
  const [selectedStartDate, setSelectedStartDate] = useState<Date | null>(null);
  const [selectedEndDate, setSelectedEndDate] = useState<Date | null>(null);
  const [isStartDatePickerOpen, setStartDatePickerOpen] =
    useState<boolean>(false);
  const [isEndDatePickerOpen, setEndDatePickerOpen] = useState<boolean>(false);
  const [processingType, setProcessingType] = useState<string>('');
  const [monthlySelectedMonths, setMonthlySelectedMonths] =
    useState<string>('');

  const [selectedMonths, setSelectedMonths] = useState<string[]>([]);
  const [prorate, setProrate] = useState<string>('');

  const [createElement, setCreateElement] = useState<boolean>(false);

  const handleProrate = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProrate(e.target.value);
  };

  const removeMonth = (data: string) => {
    const allData = [...selectedMonths];
    const monthIndex = allData.findIndex((month) => month === data);
    allData.splice(monthIndex, 1);
    setSelectedMonths(allData);
  };

  const removeAllSelectedMonths = () => {
    setSelectedMonths([]);
    setMonthlySelectedMonths('');
  };

  const handleMonthlySelectedMonthsChange = (
    e: React.ChangeEvent<HTMLSelectElement>,
  ) => {
    setSelectedMonths((prevState) => [...prevState, e.target.value]);
  };

  const handleProcessingType = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProcessingType(e.target.value);
  };

  const handleMonthlySelectedMonths = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setMonthlySelectedMonths(e.target.value);
  };

  const handleStartDateIconClick = () => {
    setStartDatePickerOpen(!isStartDatePickerOpen);
  };

  const handleEndDateIconClick = () => {
    setEndDatePickerOpen(!isEndDatePickerOpen);
  };

  const handleCreateElement = () => {
    setCreateElement(true);
  };

  return (
    <>
      <div className={classes.createElement__nextstep}>
        <div className={classes.createElement__nextstep__datesection}>
          <div
            className={
              classes.createElement__nextstep__datesection__startdateprocessing
            }
          >
            <span
              className={
                classes.createElement__nextstep__datesection__startdateprocessing__date
              }
            >
              Effective Start Date
            </span>
            <DatePicker
              selected={selectedStartDate}
              onChange={(date) => {
                setSelectedStartDate(date);
                setStartDatePickerOpen(false);
              }}
              open={isStartDatePickerOpen}
              onClickOutside={() => setStartDatePickerOpen(false)}
              onInputClick={() =>
                setStartDatePickerOpen(!isStartDatePickerOpen)
              }
              placeholderText="Select Date"
              className={
                classes.createElement__nextstep__datesection__startdateprocessing__selectdate
              }
            />
            <img
              src={calenderIcon}
              alt="calender icon"
              className={
                classes.createElement__nextstep__datesection__startdateprocessing__calendericon
              }
              onClick={handleStartDateIconClick}
            />

            <span
              className={
                classes.createElement__nextstep__datesection__startdateprocessing__processing
              }
            >
              Processing Type
            </span>
            <div
              className={
                classes.createElement__nextstep__datesection__startdateprocessing__openclose
              }
            >
              <div
                className={
                  classes.createElement__nextstep__datesection__startdateprocessing__openclose__openholder
                }
              >
                <Input
                  type="radio"
                  value="Open"
                  checked={processingType === 'Open'}
                  onChange={handleProcessingType}
                  classname={
                    classes.createElement__nextstep__datesection__startdateprocessing__openclose__openholder__radio
                  }
                />
                <span
                  className={
                    classes.createElement__nextstep__datesection__startdateprocessing__openclose__openholder__text
                  }
                >
                  Open
                </span>
              </div>
              <div
                className={
                  classes.createElement__nextstep__datesection__startdateprocessing__openclose__closeholder
                }
              >
                <Input
                  type="radio"
                  value="Close"
                  checked={processingType === 'Close'}
                  onChange={handleProcessingType}
                  classname={
                    classes.createElement__nextstep__datesection__startdateprocessing__openclose__closeholder__radio
                  }
                />
                <span
                  className={
                    classes.createElement__nextstep__datesection__startdateprocessing__openclose__closeholder__text
                  }
                >
                  Close
                </span>
              </div>
            </div>
          </div>
          <div
            className={
              classes.createElement__nextstep__datesection__enddatepayfrequency
            }
          >
            <span
              className={
                classes.createElement__nextstep__datesection__enddatepayfrequency__date
              }
            >
              Effective End Date
            </span>
            <DatePicker
              selected={selectedEndDate}
              onChange={(date) => {
                setSelectedEndDate(date);
                setEndDatePickerOpen(false);
              }}
              open={isEndDatePickerOpen}
              onClickOutside={() => setEndDatePickerOpen(false)}
              onInputClick={() => setEndDatePickerOpen(!isEndDatePickerOpen)}
              placeholderText="Select Date"
              className={
                classes.createElement__nextstep__datesection__enddatepayfrequency__selectdate
              }
            />
            <img
              src={calenderIcon}
              alt="calender icon"
              className={
                classes.createElement__nextstep__datesection__enddatepayfrequency__calendericon
              }
              onClick={handleEndDateIconClick}
            />
            <span
              className={
                classes.createElement__nextstep__datesection__enddatepayfrequency__payfrequency
              }
            >
              Pay Frequency
            </span>
            <div
              className={
                classes.createElement__nextstep__datesection__enddatepayfrequency__monthlyselectedmonths
              }
            >
              <div
                className={
                  classes.createElement__nextstep__datesection__enddatepayfrequency__monthlyselectedmonths__monthlyholder
                }
              >
                <Input
                  type="radio"
                  value="Monthly"
                  checked={monthlySelectedMonths === 'Monthly'}
                  onChange={handleMonthlySelectedMonths}
                  classname={
                    classes.createElement__nextstep__datesection__enddatepayfrequency__monthlyselectedmonths__monthlyholder__radio
                  }
                />
                <span
                  className={
                    classes.createElement__nextstep__datesection__enddatepayfrequency__monthlyselectedmonths__monthlyholder__text
                  }
                >
                  Monthly
                </span>
              </div>
              <div
                className={
                  classes.createElement__nextstep__datesection__enddatepayfrequency__monthlyselectedmonths__selectedmonthsholder
                }
              >
                <Input
                  type="radio"
                  value="Selected Months"
                  checked={monthlySelectedMonths === 'Selected Months'}
                  onChange={handleMonthlySelectedMonths}
                  classname={
                    classes.createElement__nextstep__datesection__enddatepayfrequency__monthlyselectedmonths__selectedmonthsholder__radio
                  }
                />
                <span
                  className={
                    classes.createElement__nextstep__datesection__enddatepayfrequency__monthlyselectedmonths__selectedmonthsholder__text
                  }
                >
                  Selected Months
                </span>
              </div>
            </div>
          </div>
        </div>
        <div
          className={classes.createElement__nextstep__selectedmonth__prorate}
        >
          <span
            className={
              classes.createElement__nextstep__selectedmonth__prorate__heading
            }
          >
            Selected Pay Months
          </span>
          <div
            style={
              selectedMonths.length > 0
                ? {
                    background: 'white',
                    border: '1px solid #e1e1e1',
                  }
                : {
                    background: '#e1e1e1',
                  }
            }
            className={
              classes.createElement__nextstep__selectedmonth__prorate__resultholder
            }
          >
            <Select
              disabled={
                monthlySelectedMonths === 'Monthly' ||
                monthlySelectedMonths !== 'Selected Months'
              }
              onChange={handleMonthlySelectedMonthsChange}
              text={months}
              classname={
                classes.createElement__nextstep__selectedmonth__prorate__resultholder__select
              }
              defaultText={selectedMonths.length > 0 ? '' : 'Select'}
            />
            <div
              style={
                processingType === 'Monthly'
                  ? {
                      display: 'none',
                    }
                  : {
                      display: 'flex',
                      gap: '8px',
                      zIndex: 100,
                      marginLeft: 'auto',
                      marginTop: '-25px',
                      marginRight: '20px',
                    }
              }
            >
              <span
                style={{
                  fontSize: '10px',
                  color: 'gray',
                  cursor: 'pointer',
                }}
                onClick={removeAllSelectedMonths}
              >
                {'X'}
              </span>
              <span
                style={{
                  fontSize: '10px',
                  color: 'gray',
                }}
              >
                {'|'}
              </span>
            </div>
            <div
              style={
                selectedMonths.length < 1
                  ? {
                      display: 'none',
                    }
                  : {
                      display: 'block',
                      background: 'white',
                    }
              }
              className={
                classes.createElement__nextstep__selectedmonth__prorate__resultholder__list
              }
            >
              <div
                className={
                  classes.createElement__nextstep__selectedmonth__prorate__resultholder__list__text
                }
              >
                {selectedMonths &&
                  selectedMonths.map((month, idx) => (
                    <div
                      key={idx}
                      className={
                        classes.createElement__nextstep__selectedmonth__prorate__resultholder__list__text__valueholder
                      }
                    >
                      <span
                        className={
                          classes.createElement__nextstep__selectedmonth__prorate__resultholder__list__text__valueholder__val
                        }
                      >
                        {month}
                      </span>
                      <span
                        onClick={() => removeMonth(month)}
                        className={
                          classes.createElement__nextstep__selectedmonth__prorate__resultholder__list__text__valueholder__remove
                        }
                      >
                        {'X'}
                      </span>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
        <div className={classes.createElement__nextstep__lastsection}>
          <div className={classes.createElement__nextstep__lastsection__part1}>
            <span
              className={
                classes.createElement__nextstep__lastsection__part1__text
              }
            >
              Prorate
            </span>
            <div
              className={
                classes.createElement__nextstep__datesection__startdateprocessing__openclose
              }
            >
              <div
                className={
                  classes.createElement__nextstep__datesection__startdateprocessing__openclose__openholder
                }
              >
                <Input
                  type="radio"
                  value="Yes"
                  checked={prorate === 'Yes'}
                  onChange={handleProrate}
                  classname={
                    classes.createElement__nextstep__datesection__startdateprocessing__openclose__openholder__radio
                  }
                />
                <span
                  className={
                    classes.createElement__nextstep__datesection__startdateprocessing__openclose__openholder__text
                  }
                >
                  Yes
                </span>
              </div>
              <div
                className={
                  classes.createElement__nextstep__datesection__startdateprocessing__openclose__closeholder
                }
              >
                <Input
                  type="radio"
                  value="No"
                  checked={prorate === 'No'}
                  onChange={handleProrate}
                  classname={
                    classes.createElement__nextstep__datesection__startdateprocessing__openclose__closeholder__radio
                  }
                />
                <span
                  className={
                    classes.createElement__nextstep__datesection__startdateprocessing__openclose__closeholder__text
                  }
                >
                  No
                </span>
              </div>
            </div>
          </div>
          <div className={classes.createElement__nextstep__lastsection__part2}>
            <span
              className={
                classes.createElement__nextstep__lastsection__part2__text
              }
            >
              Status
            </span>
            <div
              className={
                classes.createElement__nextstep__lastsection__part2__status
              }
            >
              <div
                className={
                  classes.createElement__nextstep__lastsection__part2__status__activeicon
                }
              >
                <img
                  src={toggleBtn}
                  alt="toggle"
                  className={
                    classes.createElement__nextstep__lastsection__part2__status__activeicon__btn
                  }
                />
                <span
                  className={
                    classes.createElement__nextstep__lastsection__part2__status__activeicon__text
                  }
                >
                  Active
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className={classes.createElement__btnaction}>
          <Button
            type="reset"
            btnClassName={classes.createElement__btnaction__cancel}
            onClick={() => setNextStep(false)}
            btnText="Back"
          />
          <Button
            type="submit"
            btnClassName={classes.createElement__btnaction__next}
            onClick={() => handleCreateElement()}
            btnText="Create New Element"
            // disabled
          />
        </div>
      </div>
      <SuccessModal
        successModal={createElement}
        setSuccessModal={setCreateElement}
        imgSrc={check}
        alt="Success"
        onClick={() => setCreateElement(false)}
        successMsg={'Element has been created successfully'}
        btnText={'Close to continue'}
      />
    </>
  );
};

export default CreateElementNextStep;
