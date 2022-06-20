import React from 'react';
import { ReactComponent as Icon } from 'assets/react_hook_form.svg';
export default function Header({ renderCount }) {
  return (
    <>
      <span className="counter">Render Count: {renderCount}</span>
      <span className="row top-80 font-24 padding-bottom-12">
        <Icon style={{ top: 9, position: 'relative', marginRight: 10 }} />
        <h1 className="white">React Hook Form - Controller</h1>
      </span>
      <p style={{ fontSize: 14, lineHeight: 1.3 }}>Components that are using Controller. Render count indicate how many re-renders triggered during user interaction at the form level.</p>
    </>
  );
}
