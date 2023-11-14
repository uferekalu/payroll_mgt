import React from 'react';
import Table from 'react-bootstrap/Table';
import classes from './ElementComp.module.scss';
import sortIcon from '../../images/sort.png';
import actionIcon from '../../images/actionicon.png';

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
];

interface IElementTb {}

const ElementTable: React.FC<IElementTb> = () => {
  return (
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
        {data.map((dt, idx) => (
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
              <img
                style={
                  {
                    // width: '10px',
                    // height: '10px',
                  }
                }
                src={actionIcon}
                alt="sort"
              />
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default ElementTable;
