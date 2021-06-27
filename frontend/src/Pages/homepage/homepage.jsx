import React from 'react';
import Drawer from '../../components/drawer/drawer.component';

export default function homepage({ currentUser }) {
  console.log(currentUser);
  return (
    <div>
      <Drawer currentUser={currentUser} />
    </div>
  );
}
