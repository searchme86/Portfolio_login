import React from 'react';
import IWidget from '../../interfaces/IWidget';
import Moment from 'react-moment';

function WidgetRenderer(props: IWidget) {
  const { isSpecialCard, title, description, rating, id, created, updated } =
    props;
  return (
    <div className="p-3 col-12">
      <div className={isSpecialCard ? 'card specialCard' : 'card'}>
        <div className="card-body">
          <h1 className="card-title">{title}</h1>
          <p className="card-text">{description}</p>
          <p className="card-text fotn-italic"> Rating : {rating}/10</p>
        </div>
        <div className="text-right card-footer text-muted ">
          <span className="float-left">#{id}</span> created:
          <Moment fromNow date={created} />
          updated: <Moment date={updated} />
        </div>
      </div>
    </div>
  );
}

export default WidgetRenderer;
