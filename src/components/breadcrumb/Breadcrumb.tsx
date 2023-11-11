import React, { useState } from 'react';
import classes from './Breadcrumb.module.scss';
import { Link, useLocation } from 'react-router-dom';
import arrowRight from '../../images/arrowright.png';

const data = ['Payroll Management', 'Element Setup', 'Elements'];

interface IBreadCrumb {}

const Breadcrumb: React.FC<IBreadCrumb> = () => {
  const [breadcrumData, setBreadcrumbData] = useState<string[]>(data);
  const location = useLocation();

  return (
    <div className={classes.breadcrum}>
      {breadcrumData?.map((dt, idx) => (
        <div className={classes.breadcrum__holder} key={idx}>
          <Link
            style={
              dt === 'Elements' && location.pathname === ('/' || '/elements')
                ? {
                    fontWeight: 700,
                    color: 'black',
                  }
                : breadcrumData[breadcrumData.length - 1] === dt &&
                  dt === 'Elements' &&
                  location.pathname === ('/elements')
                ? {
                    fontWeight: 700,
                    color: 'black',
                  }
                : {
                    fontWeight: 'normal',
                  }
            }
            to={
              dt === 'Elements'
                ? '/elements'
                : dt === 'Element Links'
                ? '/element-links'
                : '/'
            }
            className={classes.breadcrum__holder__link}
          >
            {dt}
          </Link>
          <img
            style={
              idx === breadcrumData.length - 1
                ? {
                    display: 'none',
                  }
                : {
                    display: 'block',
                  }
            }
            src={arrowRight}
            alt="arrow"
            className={classes.breadcrum__holder__arrow}
          />
        </div>
      ))}
    </div>
  );
};

export default Breadcrumb;
