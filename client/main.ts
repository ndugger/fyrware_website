import * as React from 'react';
import * as ReactDOM from 'react-dom';

import Root from 'client/ui/root';

function main (): void {
    ReactDOM.render(React.createElement(Root), window.document.getElementById('root'));
}

main();
