import React from 'react';
import { connect } from 'react-redux';
import FileUpload from '../components/FileUpload';

const Account = ({ user }) => {
  return (
    <div>
      <FileUpload />
    </div>
  );
};

export default connect(({ user }) => user)(Account);
