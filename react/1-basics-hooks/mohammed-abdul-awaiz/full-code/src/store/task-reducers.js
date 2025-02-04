import { actions } from "../conf/conf";

export const reducer = (state, action) => {
  console.log('reducer ran');
  
  switch (action.type) {
    case actions.addTask:
      return {
        ...state,
        taskGroups: {
          ...state.taskGroups,
          allTasks: [...state.taskGroups.allTasks, action.payload],
        },
      };
    case actions.toggleTask:
      return {
        ...state,
        taskGroups: {
          ...state.taskGroups,
          allTasks: state.taskGroups.allTasks.map((task) => {
            if (action.payload.id == task.id)
              return { ...task, completed: !task.completed };

            return task;
          }),
        },
      };
    case actions.removeTask:
      return {
        ...state,
        taskGroups: {
          ...state.taskGroups,
          allTasks: state.taskGroups.allTasks.filter((task) => {
            return action.payload.id !== task.id;
          }),
        },
      };
    default:
      return state;
  }
};
