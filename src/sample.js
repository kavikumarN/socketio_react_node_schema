#fe5974
#3599d3



.SDRTable span{
    font-size: 1em;
    font-weight: 450;
    text-align: center;
    border-radius: 5px;
    background-color: #ffffff;
}

onContextMenu = {this.ContextMenuHandle.bind(this)}
onClick = {this.order.bind(this)}
onClick = {this.order.bind(this)}




{this.state.showComponent ? <ContextMenu /> : null }

onClick ={this.myfunc.bind(this)}

myfunc(){
  console.log('Clicked');
} 



<!DOCTYPE html>
<html>

<body onresize="myFunction()">

<p>Try to resize the browser window.</p>

<script>
function myFunction() {
  alert("You have changed the size of the browser window!");
}
</script>

</body>
</html>


document.getElementById("myBtn").addEventListener("click", function(){
  document.getElementById("demo").innerHTML = "Hello World";
});












    class ContextMenu extends React.Component {
    state = {
        visible: false,
    };
    
    componentDidMount() {
        document.addEventListener('contextmenu', this._handleContextMenu);
        document.addEventListener('click', this._handleClick);
        document.addEventListener('scroll', this._handleScroll);
    };

    componentWillUnmount() {
      document.removeEventListener('contextmenu', this._handleContextMenu);
      document.removeEventListener('click', this._handleClick);
      document.removeEventListener('scroll', this._handleScroll);
    }
    
    _handleContextMenu = (event) => {
        event.preventDefault();
        
        this.setState({ visible: true });
        
        const clickX = event.clientX;
        const clickY = event.clientY;
        const screenW = window.innerWidth;
        const screenH = window.innerHeight;
        const rootW = document.getElementById("master").offsetWidth;
        const rootH = document.getElementById('master').offsetHeight;
        console.log("OffSet : "+rootH+" "+rootW);
        
        const right = (screenW - clickX) > rootW;
        console.log(right);
        const left = !right;
        console.log(left);
        const top = (screenH - clickY) > rootH;
        console.log(top);
        const bottom = !top;
        console.log(bottom);
        console.log("Click x and y : "+clickX+" "+clickY);
        console.log("window : "+screenW+" "+screenH);
        var elmnt = document.getElementById('master');
        if (right) {
        	console.log(`${clickX + 5}px`);
            elmnt.style.left = `${clickX + 5}px`;
            console.log("right");
        }
        
        if (left) {
        	console.log(`${clickX - rootW - 5}px`);
            elmnt.style.left = `${clickX - rootW - 5}px`;
            console.log("left");
        }
        
        if (top) {
        	console.log(`${clickY + 5}px`);
            elmnt.style.top = `${clickY + 5}px`;
            console.log("top");
        }
        
        if (bottom) {
        	console.log(`${clickY - rootH - 5}px`);
            elmnt.style.top = `${clickY - rootH - 5}px`;
            console.log("bottom");
        }
    };

    _handleClick = (event) => {
        const { visible } = this.state;
        const wasOutside = !(event.target.contains === this.root);
        
        if (wasOutside && visible) this.setState({ visible: false, });
    };

    _handleScroll = () => {
        const { visible } = this.state;
        
        if (visible) this.setState({ visible: false, });
    };
    
    render() {
        const { visible } = this.state;
        return(
        		<div className = "master" id ="master">

        		</div>
        	);
        
        return(visible || null) && 
            <div id="contextMenu" className="contextMenu">
                <div className="contextMenu--option">Create Entry Order...</div>
                <div className="contextMenu--option">Create Market Order...</div>
                <div className="contextMenu--option">Create Contingent Order...</div>
                <div className="contextMenu--option contextMenu--option__disabled">View full version</div>
                <div className="contextMenu--option">Settings</div>
                <div className="contextMenu--separator" />
                <div className="contextMenu--option">About this app</div>
            </div>
    };




.master{
    width :500px;
    height: 500px;
    border:5px solid #fff;
    background-color:#000 
}
.contextMenu {
    border : 5px solid white;
    position: fixed;
    background-color: white;
    box-shadow: 20px 20px 20px #ffffff;
}
    
.contextMenu--option{
        padding: 6px 50px 5px 10px;
        min-width: 160px;
        cursor: default;
        font-size: 12px;
}
.contextMenu--option:hover {
            background: linear-gradient(to top, #555, #333);
            color: white;
        }
        
.contextMenu--option:active {
            color: #e9e9e9;
            background: linear-gradient(to top, #555, #444);
        }
        
.contextMenu--option contextMenu--option__disabled{
            color: #999999;
            pointer-events: none;
        }

    
.contextMenu--separator{
        width: 100%;
        height: 1px;
        background: #CCCCCC;
        margin: 0 0 0 0;
    }


#root {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background: linear-gradient(75deg, #00E39F, #00C4E1);
}
    
#root::before {
        content: '';
        font-family: sans-serif;
        font-size: 12px;
        color: white;
    }


{this.state.showComponent ? <ContextMenu /> : null }
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showComponent: false,
    };
    this._onButtonClick = this._onButtonClick.bind(this);
  }

  _onButtonClick() {
    this.setState({
      showComponent: true,
    });
  }

  render() {
    return (
      <div>
        <Button onClick={this._onButtonClick}>Button</Button>
        {this.state.showComponent ?
           <NewComponent /> :
           null
        }
      </div>
    );
  }
}
