/* eslint-disable no-unused-vars */
/* eslint-disable prefer-const */
/* eslint-disable eqeqeq */
/* eslint-disable no-trailing-spaces */
/* eslint-disable indent */
/* eslint-disable quotes */
/* eslint-disable eol-last */
/* eslint-disable semi */
/* eslint-disable padded-blocks */
/* eslint-disable no-undef */
const todoList = () => {
    all = [];
    const add = (todoItem) => {
      all.push(todoItem);
    };
    const markAsComplete = (index) => {
      all[index].completed = true;
    };
  
    const overdue = () => {
      // Write the date check condition here and return the array
      // of overdue items accordingly.
      const overdueTasks = [];
        const currentDate = new Date().toLocaleDateString("en-CA");

        for (let i = 0; i < all.length; i++) {
            if (all[i].dueDate < currentDate) {
                overdueTasks.push(all[i]);
            }
        }

        return overdueTasks;
    };
  
    const dueToday = () => {
      const currentDate = new Date().toISOString().split("T")[0];
        return all.filter((item) => item.dueDate === currentDate);
    };
    const dueLater = () => {
      // Write the date check condition here and return the array
      // of todo items that are due later accordingly.
      const upcomingDueDates = [];
      const currentDate = new Date().toLocaleDateString("en-CA");

      for (let i = 0; i < all.length; i++) {
          if (all[i].dueDate > currentDate) {
              upcomingDueDates.push(all[i]);
          }
      }

      return upcomingDueDates;
    };
  
    const toDisplayableList = (list) => {
      // Format the To-Do list here, and return the output string
      // as per the format given above.
      return list
      .map((task) => {
          let checkbox = task.completed ? "[x]" : "[ ]";
          const formattedDate =
              task.dueDate !== new Date().toISOString().split("T")[0]
                  ? " " + task.dueDate
                  : "";
          return `${checkbox} ${task.title}${formattedDate}`;
      })
      .join("\n");
    };
  
    return {
      all,
      add,
      markAsComplete,
      overdue,
      dueToday,
      dueLater,
      toDisplayableList,
    };
  };
  module.exports = todoList;
  
  // // ####################################### #
  // // DO NOT CHANGE ANYTHING BELOW THIS LINE. #
  // // ####################################### #
  
  // module.exports = todoList;
  
  // // const todos = todoList();
  
  // const todos = todoList();
  
  // const formattedDate = (d) => {
  //   return d.toISOString().split("T")[0];
  // };
  
  // var dateToday = new Date();
  // const today = formattedDate(dateToday);
  // const yesterday = formattedDate(
  //   new Date(new Date().setDate(dateToday.getDate() - 1)),
  // );
  // const tomorrow = formattedDate(
  //   new Date(new Date().setDate(dateToday.getDate() + 1)),
  // );
  
  // // console.log("My Todo-list\n")
  // // console.log("My Todo-list\n")
  
  // console.log("My Todo-list\n");
  
  // console.log("Overdue");
  // var overdues = todos.overdue();
  // var formattedOverdues = todos.toDisplayableList(overdues);
  // console.log(formattedOverdues);
  // console.log("\n");
  
  // console.log("Due Today");
  // let itemsDueToday = todos.dueToday();
  // let formattedItemsDueToday = todos.toDisplayableList(itemsDueToday);
  // console.log(formattedItemsDueToday);
  // console.log("\n");
