import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import { getTickets, reset } from '../features/tickets/ticketSlice';
import Spinner from '../components/Spinner';
import BackButton from '../components/BackButton';

const Tickets = () => {
  const { isLoading, tickets, isSuccess } = useSelector(
    (state) => state.tickets
  );

  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      if (isSuccess) {
        dispatch(reset());
      }
    };
  }, [dispatch, isSuccess]);

  useEffect(() => {
    dispatch(getTickets());
  }, [dispatch]);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div>
      <BackButton url='/' />
      <h1>Tickets</h1>
    </div>
  );
};
export default Tickets;
