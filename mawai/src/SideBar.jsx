import { SidebarComponent } from '@syncfusion/ej2-react-navigations';
import * as React from 'react';
function App() {
    let sidebarObj;
    function onCreate() {
        sidebarObj.element.style.visibility = '';
    }
    return (<div className="control-section">
            <div id="wrapper">
                {/* Initializing the Sidebar component */}
                <SidebarComponent id="default-sidebar" ref={Sidebar => sidebarObj = Sidebar} created={onCreate} style={{ visibility: "hidden" }}>
                    <div className="title"> Sidebar content</div>
                </SidebarComponent>
                <div className="content">
                    <div className="title">Main content</div>
                    <div className="sub-title"> content goes here</div>
                </div>
            </div>
        </div>);
}
export default App;