import React from 'react';
import PropTypes from 'prop-types';
import UserListItem from 'components/molecules/UserListItem/UserListItem';
import { StyledList } from './UserList.styles';
import { Title } from 'components/atoms/Title/Title';

const UserList = ({ users }) => {
  return (
    <>
      <Title>Students list</Title>
      <StyledList>
        {users.map((userData) => (
          <UserListItem key={userData.name} userData={userData} />
        ))}
      </StyledList>
    </>
  );
};

UserList.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      average: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      attendance: PropTypes.string,
    })
  ),
  deleteUser: PropTypes.func,
};

export default UserList;
