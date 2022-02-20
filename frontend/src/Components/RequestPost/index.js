function RequestPost({ title, date, room, body, category, userName }) {
  return (
    <div>
      <p>{userName}</p>
      <p className="room-number">Room: {room} </p>
      <h2>{title}</h2>
      <p className="category">{category} </p>
      <p>{date}</p>
      <p>{body}</p>
      <br></br>
    </div>
  );
}

export default RequestPost;
