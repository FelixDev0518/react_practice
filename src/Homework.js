import React, {useState} from "react";
import './Homework.css';

function Homework() {
    return (
    <div className="Homework">
        <h1>Homework</h1>
        <Counter default={0} />
    </div>
    );
}

function Counter(props){
    // var numberState = useState(props.default);
    // var number = numberState[0];
    // var setNumber = numberState[1];
    var [number, setNumber] = useState(props.default);
    
    return(
        <div className="Homework">
            <p className="number">Number : {number}</p>
            {/* 이 버튼들 재사용을 위해서 하나씩 함수로 쪼개는게 가능할까??? 
            basic button */}
            <input className="btn plus" type="button" value="plus 1" onClick={() => setNumber(number+=1)}/>
            <input className="btn default" type="button" value="reset" onClick={() => setNumber(0)}/>
            <input className="btn minus" type="button" value="minus 1" onClick={() => setNumber(number-=1)}/>
            <br/>
            {/* //text button */}
            <input className="txt btn plus" type="button" value="plus 1" onClick={() => setNumber(number+=1)}/>
            <input className="txt btn default" type="button" value="reset" onClick={() => setNumber(0)}/>
            <input className="txt btn minus" type="button" value="minus 1" onClick={() => setNumber(number-=1)}/>
            <br/>
            {/* //icon button */}
            <a className="fas fa-plus" class="button" href="#" onClick={() => setNumber(number+=1)}>
            <i class="fas fa-plus"></i>
            </a>
            <a className="icon btn default" class="button" href="#" onClick={() => setNumber(0)}>
            <i class="fab fa-creative-commons-zero"></i>
            </a>
            <a className="icon btn minus" class="button" href="#" onClick={() => setNumber(number-=1)}>
            <i class="fas fa-minus"></i>
            </a>
            
        </div>
    );
}

export default Homework;