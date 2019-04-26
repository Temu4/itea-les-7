import AllTodo from './components/AllTodo';
import DoneTodo from './components/DoneTodo';
import OpenedTodo from './components/OpenedTodo';
import Error404 from './components/Error404';

const rootRoute = [
  {
    exact: true,
    path: '/',
    component: AllTodo
  },
  {
    exact: false,
    path: '/done',
    component: DoneTodo
  },
  {
    exact: false,
    path: '/opened',
    component: OpenedTodo
  },
  {
    exact: false,
    path: '',
    component: Error404
  }
];

export default rootRoute;
