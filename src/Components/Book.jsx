export function Book({ bookName = "Piyam Mashriq" }) {
  return (
    <div className="bookItem" style={{ backgroundColor: "lightblue" }}>
      THis is the new content I am a Book,My name is{" "}
      <span className="bookName">{bookName}</span> I am written by{" "}
      <span className="authorName">Allama Iqbal</span>
      <div className="image">
        <span>I am a child of Image (updated)</span>
        <img src={"https://api.dicebear.com/7.x/icons/svg?seed=" + bookName} />
        <button
          onMouseOver={function () {
            alert("mouse over");
          }}
          onClick={function () {
            alert("Hey you clicked");
          }}
        >
          Click me
        </button>
      </div>
    </div>
  );
}
