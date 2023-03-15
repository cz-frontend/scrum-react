import React from 'react';

export default function TitleBar(props) {
  return (
    <div className="title-bar">
      <h1 className="module-name">{props.title}</h1>
      {props.children}
    </div>
  );
}
