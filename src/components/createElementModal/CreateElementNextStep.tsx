import React, { useState, useEffect } from 'react';
import classes from './CreateElementModal.module.scss';
import calenderIcon from '../../images/calenderIcon.png';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.module.css';
import Input from '../input/Input';
import Select from '../select/Select';
import Button from '../button/Button';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { createElement } from '../../slices/createElementSlice';
import { RootState } from '../../store';

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
  lookUpValueIds: {
    payRunValueId: string;
    classificationValueId: string;
    categoryValueId: string;
  };
  setNextStep: React.Dispatch<React.SetStateAction<boolean>>;
  setCreateElementSuccess: React.Dispatch<React.SetStateAction<boolean>>;
  setCreateElement: React.Dispatch<React.SetStateAction<boolean>>;
  errors: {
    name: string;
    elementCategory: string;
    elementClassification: string;
    payrun: string;
    description: string;
    reportingName: string;
    effectiveStartDate: string;
    effectiveEndDate: string;
    processingType: string;
    payFrequency: string;
    selectedPayMonths: string;
    prorate: string;
  };
  setErrors: React.Dispatch<
    React.SetStateAction<{
      name: string;
      elementCategory: string;
      elementClassification: string;
      payrun: string;
      description: string;
      reportingName: string;
      effectiveStartDate: string;
      effectiveEndDate: string;
      processingType: string;
      payFrequency: string;
      selectedPayMonths: string;
      prorate: string;
    }>
  >;
  stepTwoFormData: {
    effectiveStartDate: Date | null;
    effectiveEndDate: Date | null;
    processingType: string;
    payFrequency: string;
    selectedPayMonths: string[];
    prorate: string;
    status: boolean;
  };
  setStepTwoFormData: React.Dispatch<
    React.SetStateAction<{
      effectiveStartDate: Date | null;
      effectiveEndDate: Date | null;
      processingType: string;
      payFrequency: string;
      selectedPayMonths: string[];
      prorate: string;
      status: boolean;
    }>
  >;
  selectedStartDate: Date | null;
  setSelectedStartDate: React.Dispatch<React.SetStateAction<Date | null>>;
  selectedEndDate: Date | null;
  setSelectedEndDate: React.Dispatch<React.SetStateAction<Date | null>>;
  processingType: string;
  setProcessingType: React.Dispatch<React.SetStateAction<string>>;
  monthlySelectedMonths: string;
  setMonthlySelectedMonths: React.Dispatch<React.SetStateAction<string>>;
  selectedMonths: string[];
  setSelectedMonths: React.Dispatch<React.SetStateAction<string[]>>;
  prorate: string;
  setProrate: React.Dispatch<React.SetStateAction<string>>;
  stepOneFormData: {
    name: string;
    elementCategory: string;
    elementClassification: string;
    payrun: string;
    description: string;
    reportingName: string;
  };
  setStepOneFormData: React.Dispatch<
    React.SetStateAction<{
      name: string;
      elementCategory: string;
      elementClassification: string;
      payrun: string;
      description: string;
      reportingName: string;
    }>
  >;
}

const CreateElementNextStep: React.FC<INextStep> = ({
  setNextStep,
  setCreateElementSuccess,
  setCreateElement,
  stepTwoFormData,
  setStepTwoFormData,
  errors,
  setErrors,
  selectedStartDate,
  setSelectedStartDate,
  selectedEndDate,
  setSelectedEndDate,
  processingType,
  setProcessingType,
  monthlySelectedMonths,
  setMonthlySelectedMonths,
  selectedMonths,
  setSelectedMonths,
  prorate,
  setProrate,
  stepOneFormData,
  lookUpValueIds,
}) => {
  const [isStartDatePickerOpen, setStartDatePickerOpen] =
    useState<boolean>(false);
  const [isEndDatePickerOpen, setEndDatePickerOpen] = useState<boolean>(false);

  const dispatch = useAppDispatch();
  const createdElement = useAppSelector(
    (state: RootState) => state.createElement,
  );

  useEffect(() => {
    if (createdElement.createElementStatus === 'success') {
      setCreateElementSuccess(true);
    }
  }, [createdElement.createElementStatus, setCreateElementSuccess]);

  const handleProrate = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProrate(e.target.value);
  };

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
      | React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;

    if (name === 'status') {
      setStepTwoFormData({
        ...stepTwoFormData,
        [name]: !stepTwoFormData.status,
      });
    } else {
      setStepTwoFormData({
        ...stepTwoFormData,
        [name]: value,
      });
    }
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

  const handleCreateElement = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = {
      data: {
        name: stepOneFormData.name,
        description: stepOneFormData.description,
        payRunId: Number(stepOneFormData.payrun),
        payRunValueId: Number(lookUpValueIds.payRunValueId),
        classificationId: Number(stepOneFormData.elementClassification),
        classificationValueId: Number(lookUpValueIds.classificationValueId),
        categoryId: Number(stepOneFormData.elementCategory),
        categoryValueId: Number(lookUpValueIds.categoryValueId),
        reportingName: stepOneFormData.reportingName,
        processingType: processingType,
        status: stepTwoFormData.status ? 'Active' : 'Inactive',
        prorate: prorate,
        effectiveStartDate:
          selectedStartDate && selectedStartDate?.toISOString(),
        effectiveEndDate: selectedEndDate && selectedEndDate?.toISOString(),
        selectedMonths,
        payFrequency: monthlySelectedMonths,
        modifiedBy: 'Kalu Ufere',
      },
    };
    await dispatch(createElement(data));
    setCreateElement(false);
  };

  return (
    <form onSubmit={handleCreateElement}>
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
            {errors.effectiveStartDate && (
              <span className={classes.createElement__nextstep__errors}>
                {errors.effectiveStartDate}
              </span>
            )}
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
            {errors.processingType && (
              <span className={classes.createElement__nextstep__errors}>
                {errors.processingType}
              </span>
            )}
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
            {errors.effectiveEndDate && (
              <span className={classes.createElement__nextstep__errors}>
                {errors.effectiveEndDate}
              </span>
            )}
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
            {errors.payFrequency && (
              <span className={classes.createElement__nextstep__errors}>
                {errors.payFrequency}
              </span>
            )}
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
        {errors.selectedPayMonths && (
          <span className={classes.createElement__nextstep__errors}>
            {errors.selectedPayMonths}
          </span>
        )}
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
            {errors.prorate && (
              <span className={classes.createElement__nextstep__errors}>
                {errors.prorate}
              </span>
            )}
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
                <input
                  type="checkbox"
                  checked={stepTwoFormData.status}
                  onChange={handleChange}
                  name="status"
                />
                <span
                  className={
                    classes.createElement__nextstep__lastsection__part2__status__activeicon__text
                  }
                >
                  {stepTwoFormData.status ? 'Active' : 'Inactive'}
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
            onClick={() => {}}
            btnText="Create New Element"
          />
        </div>
      </div>
    </form>
  );
};

export default CreateElementNextStep;
