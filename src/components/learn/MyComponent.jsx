// () => {}
//JSX  : 1 parent
//component = html + csss + js
import './style.css'

const MyComponent = () => {
    return (
        //fragment (<>)
        <>
            <div className="">Crocodile update</div>
            <div className="child"
                style={
                    { borderRadius: "10px" }
                }>child</div>
        </>
    );
}

export default MyComponent;