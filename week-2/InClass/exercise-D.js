function moodmessage (msg) {
    if (msg === 'happy') {
      return `${msg} "Good job, you're doing great!"`;
    } else if (msg === 'sad') {
      return `${msg} Every cloud has a silver lining`;
    } else if (msg === "number") {
      return `${msg} Beep beep boop`;
    } else {
      return `${msg} I'm sorry, I'm still learning about feelings! :(`;
    }
  }
  
  console.log(moodmessage('sad'));