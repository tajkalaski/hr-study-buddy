import React from 'react';
import PropTypes from 'prop-types';
import { ViewWrapper } from 'components/molecules/ViewWrapper/ViewWrapper';
import UserList from 'components/organisms/UserList/UserList';

const Dashboard = ({ users, deleteUser }) => {
  return (
    <ViewWrapper>
      <UserList users={users} deleteUser={deleteUser} />
    </ViewWrapper>
  );
};

Dashboard.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      average: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      attendance: PropTypes.string,
    })
  ),
  deleteUser: PropTypes.func,
};

export default Dashboard;
