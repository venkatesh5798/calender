import Calendar from "hubino-calendar";
 
function App() {
  const events = [
    {
      id: 1,
      title: "Meeting-With-Client",
      description: "Submit the project.",
      date: "2024-08-25",
      startTime: "2024-08-25T10:30:00Z",
      endTime: "2024-08-25T11:30:00Z",
      colorOptions: {
        color: "#2C5A41",
        bgColor: "#BDFFDB",
        borderColor: "#8FDCB2",
      },
    },
    {
      id: 2,
      title: "Lunch",
      description: "Lunch with Arun.",
      date: "2024-08-23",
      startTime: "2024-08-23T02:30:00Z",
      endTime: "2024-08-23T03:00:00Z",
      iconUrl:
        "https://images.emojiterra.com/google/noto-emoji/unicode-15.1/color/1024px/1f514.png",
      colorOptions: {
        color: "#684D08",
        bgColor: "#FFEBB7",
        borderColor: "#E7C160",
      },
    },
  ];
 
  const modifyEvent = (event = null) => {
    console.log(event);
  };
 
  return (
    <>
      <Calendar
        events={events} // The Events That you are Passing it as Props
        defaultView={"week"} // A Default View set to weekView ("day","week","month","year") views etc.
        accessibility={true} // a Boolean Value Which Allows the User from Viewing the Event popup etc.
        onEventClick={modifyEvent} // If the User clicks on a Events the Event Details is Provided
      />
    </>
  );
}
 
export default App;