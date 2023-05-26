import React from 'react';
import IPerson from '../../interfaces/IPerson';
import Moment from 'react-moment';

function PeopleRenderer(props: IPerson) {
  const { firstName, lastName, birthday, eyeColor } = props;
  return (
    <div className="">
      <div className="">
        <div className="">
          <h3 className="">
            {firstName} {lastName}
          </h3>
          <ul>
            <li>
              Has <b>{eyeColor}</b> eyes
            </li>
            <li>
              Birthday:
              <b>
                <Moment date={birthday} format="MMM D, YYYY" />
              </b>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default PeopleRenderer;
