export function Button({ count, onClick }) {
  return (
    <button 
        onClick={onClick}
        style={{
            padding: "10px",
            width: "100%",
            cursor: "pointer",
        }}
    >Times Clicked: {count}
    </button>
  )
}
