import React from 'react';
import IWidget from '../../interfaces/IWidget';
import Moment from 'react-moment';

function WidgetRenderer(props: IWidget) {
  const { isSpecialCard, title, description, rating, id, created, updated } =
    props;
  return (
    <div className="">
      <div className={isSpecialCard ? 'card specialCard' : 'card'}>
        <div className="">
          <h1 className="">{title}</h1>
          <p className="">{description}</p>
          <p className=""> Rating : {rating}/10</p>
        </div>
        <div className="">
          <span className="">#{id}</span> created:
          <Moment fromNow date={created} />
          updated: <Moment date={updated} />
        </div>
      </div>
    </div>
  );
}

export default WidgetRenderer;
