import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { StyledAverage, StyledInfo, Wrapper } from './UserListItem.styles';
import DeleteButton from 'components/atoms/DeleteButton/DeleteButton';
import { UsersContext } from 'providers/UsersProvider';

const UserListItem = ({ userData: { average, name, attendance = '0%' } }) => {
  const { deleteUser } = useContext(UsersContext);
  return (
    <Wrapper>
      <StyledAverage value={average}>{average}</StyledAverage>
      <StyledInfo>
        <p>
          {name}
          <DeleteButton onClick={() => deleteUser(name)} />
        </p>
        <p>attendance: {attendance}</p>
      </StyledInfo>
    </Wrapper>
  );
};

UserListItem.propTypes = {
  userData: PropTypes.shape({
    average: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    attendance: PropTypes.string,
  }),
};

export default UserListItem;
