import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Request from "./Requests/Request.tsx";

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<Request url="https://www.a38.hu/hu/programok" />
	</React.StrictMode>
)
