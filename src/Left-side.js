import react from "react";
import './Left-side.css';

const LeftSide = () => {
    return (
        <aside className="left-side">
            <nav className="questions-container" style={{backgroundColor: "white"}}>

                <h2>Questions</h2>
                <ul className="questions-list"></ul>
            </nav>
        </aside>
    )

};

export default LeftSide;