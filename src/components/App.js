import React, {Component, useState} from "react";
import '../styles/App.css';

class App extends Component {
  let relativeList = ['relativeListItem1':'I will be visting Kasol','relativeListItem2':'I will be visting Himachal','relativeListItem3':'I will be visting Delhi'];
    render() {

        return(
            <div id="main">
              <ol>
                    {relativeList.map(list =>
                   
                   <li key={list.key}>{list.description}</li>
                        
                    )}
                </ol>
            </div>
        )
    }
}


export default App;
