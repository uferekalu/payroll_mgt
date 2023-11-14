import React, { useRef, useState } from 'react';
import Table from 'react-bootstrap/Table';
import sortIcon from '../../images/sort.png';
import eyeIcon from '../../images/eye.png';
import deleteIcon from '../../images/delete.png';
import editIcon from '../../images/edit.png';
import actionIcon from '../../images/actionicon.png';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
import classes from './ElementComp.module.scss';
import Pagination from '../pagination/Pagination';

const popoverData = ['View Element Links', 'Edit Element', 'Delete Element'];

const headerData = [
  'Name',
  'Element Category',
  'Element Classification',
  'Status',
  'Date & Time Modified',
  'Modified By',
  'Action',
];

const data = [
  {
    id: 1,
    name: "13th Month Allowance'",
    elementCategory: 'Deduction',
    elementClassification: 'Pre-Tax Deduction',
    status: 'Active',
    date: '4 - 02 - 2022 || 09:30 AM',
    modifiedBy: 'Samson Ayorinde',
  },
  {
    id: 2,
    name: "13th Month Allowance'",
    elementCategory: 'Deduction',
    elementClassification: 'Pre-Tax Deduction',
    status: 'Active',
    date: '4 - 02 - 2022 || 09:30 AM',
    modifiedBy: 'Samson Ayorinde',
  },
  {
    id: 3,
    name: "13th Month Allowance'",
    elementCategory: 'Deduction',
    elementClassification: 'Pre-Tax Deduction',
    status: 'Active',
    date: '4 - 02 - 2022 || 09:30 AM',
    modifiedBy: 'Samson Ayorinde',
  },
  {
    id: 4,
    name: "13th Month Allowance'",
    elementCategory: 'Deduction',
    elementClassification: 'Pre-Tax Deduction',
    status: 'Active',
    date: '4 - 02 - 2022 || 09:30 AM',
    modifiedBy: 'Samson Ayorinde',
  },
  {
    id: 5,
    name: "13th Month Allowance'",
    elementCategory: 'Deduction',
    elementClassification: 'Pre-Tax Deduction',
    status: 'Active',
    date: '4 - 02 - 2022 || 09:30 AM',
    modifiedBy: 'Samson Ayorinde',
  },
  {
    id: 6,
    name: "13th Month Allowance'",
    elementCategory: 'Deduction',
    elementClassification: 'Pre-Tax Deduction',
    status: 'Active',
    date: '4 - 02 - 2022 || 09:30 AM',
    modifiedBy: 'Samson Ayorinde',
  },
  {
    id: 7,
    name: "13th Month Allowance'",
    elementCategory: 'Deduction',
    elementClassification: 'Pre-Tax Deduction',
    status: 'Active',
    date: '4 - 02 - 2022 || 09:30 AM',
    modifiedBy: 'Samson Ayorinde',
  },
  {
    id: 8,
    name: "13th Month Allowance'",
    elementCategory: 'Deduction',
    elementClassification: 'Pre-Tax Deduction',
    status: 'Active',
    date: '4 - 02 - 2022 || 09:30 AM',
    modifiedBy: 'Samson Ayorinde',
  },
  {
    id: 9,
    name: "13th Month Allowance'",
    elementCategory: 'Deduction',
    elementClassification: 'Pre-Tax Deduction',
    status: 'Active',
    date: '4 - 02 - 2022 || 09:30 AM',
    modifiedBy: 'Samson Ayorinde',
  },
  {
    id: 10,
    name: "13th Month Allowance'",
    elementCategory: 'Deduction',
    elementClassification: 'Pre-Tax Deduction',
    status: 'Active',
    date: '4 - 02 - 2022 || 09:30 AM',
    modifiedBy: 'Samson Ayorinde',
  },
  {
    id: 11,
    name: "13th Month Allowance'",
    elementCategory: 'Deduction',
    elementClassification: 'Pre-Tax Deduction',
    status: 'Active',
    date: '4 - 02 - 2022 || 09:30 AM',
    modifiedBy: 'Samson Ayorinde',
  },
  {
    id: 12,
    name: "13th Month Allowance'",
    elementCategory: 'Deduction',
    elementClassification: 'Pre-Tax Deduction',
    status: 'Active',
    date: '4 - 02 - 2022 || 09:30 AM',
    modifiedBy: 'Samson Ayorinde',
  },
];

interface IElementTb {}

const ElementTable: React.FC<IElementTb> = () => {
  const imgRef = useRef<HTMLImageElement>(null);
  const [noOfItems, setNoOfItems] = useState<number>(5);
  const [outOfRange, setOutOfRange] = useState<boolean>(false);

  const handleNoOfItems = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (Number(e.target.value) > data.length) {
      setOutOfRange(true);
      return;
    }
    setNoOfItems(Number(e.target.value));
  };

  return (
    <>
      <Pagination
        handleNoOfItems={handleNoOfItems}
        outOfRange={outOfRange}
        items={data}
        itemsPerPage={noOfItems}
        render={(
          displayedItems: {
            id: number;
            name: string;
            elementCategory: string;
            elementClassification: string;
            status: string;
            date: string;
            modifiedBy: string;
          }[],
        ) => (
          <div>
            <Table responsive>
              <thead
                style={{
                  height: '40px',
                  // width: '100%',
                }}
              >
                <tr>
                  {headerData.map((header, idx) => (
                    <th
                      style={{
                        background: '#2d416f',
                        padding: '5px',
                      }}
                      key={idx}
                    >
                      <span
                        style={{
                          display: 'flex',
                          gap: '7px',
                          padding: '2px',
                        }}
                      >
                        <h3
                          style={{
                            fontSize: '12px',
                            color: 'white',
                          }}
                        >
                          {header}
                        </h3>
                        <img
                          style={{
                            width: '10px',
                            height: '10px',
                            marginTop: '3px',
                          }}
                          src={sortIcon}
                          alt="sort"
                        />
                      </span>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {displayedItems.map((dt, idx) => (
                  <tr key={`${idx}-table126`}>
                    <td
                      style={{
                        fontSize: '11px',
                      }}
                    >
                      {dt.name}
                    </td>
                    <td
                      style={{
                        fontSize: '11px',
                      }}
                    >
                      {dt.elementCategory}
                    </td>
                    <td
                      style={{
                        fontSize: '11px',
                      }}
                    >
                      {dt.elementClassification}
                    </td>
                    <td
                      style={{
                        fontSize: '11px',
                      }}
                    >
                      {dt.status}
                    </td>
                    <td
                      style={{
                        fontSize: '11px',
                      }}
                    >
                      {dt.date}
                    </td>
                    <td
                      style={{
                        fontSize: '11px',
                      }}
                    >
                      {dt.modifiedBy}
                    </td>
                    <td>
                      <>
                        <OverlayTrigger
                          placement="top"
                          trigger="click"
                          rootClose
                          overlay={
                            <Popover>
                              <Popover.Body>
                                <span className={classes.popover}>
                                  {popoverData.map((pop, idx) => (
                                    <span
                                      key={idx}
                                      className={classes.popover__container}
                                    >
                                      <img
                                        className={
                                          classes.popover__container__img
                                        }
                                        src={
                                          pop === 'View Element Links'
                                            ? eyeIcon
                                            : pop === 'Edit Element'
                                            ? editIcon
                                            : deleteIcon
                                        }
                                        alt="eye icon"
                                      />
                                      <span
                                        className={
                                          classes.popover__container__text
                                        }
                                      >
                                        {pop}
                                      </span>
                                    </span>
                                  ))}
                                </span>
                              </Popover.Body>
                            </Popover>
                          }
                        >
                          <img
                            ref={imgRef}
                            // onClick={handleTogglePopup}
                            style={{
                              cursor: 'pointer',
                            }}
                            src={actionIcon}
                            alt="sort"
                          />
                        </OverlayTrigger>
                      </>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>

            {/* Render any additional components or controls you need */}
          </div>
        )}
      />
    </>
  );
};

export default ElementTable;
