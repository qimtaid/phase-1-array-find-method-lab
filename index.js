// code your solution here

const superbowlWin = (record) => {
    // Use the find method
    const winRecord = record.find((game) => game.result === "W");
  
    // If a win record is found, return the year. Otherwise, return undefined.
    return winRecord ? winRecord.year : undefined;
  };