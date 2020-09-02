import React, { Fragment } from 'react'
import ReactDOM from 'react-dom'
import List from './containers/list'
import 'bootswatch/dist/lux/bootstrap.min.css'

const App = () => {
    return (
        <Fragment>
            <nav className="navbar navbar-dark bg-dark border-bottom border-white justify-content-center">
                <a href="/" className="navbar-brand ">React OMDB App</a>
            </nav>

            <main className='bg-dark'>
                <div className='container'>
                    <List />
                </div>
            </main>
        </Fragment>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))