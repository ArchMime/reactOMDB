import React, { Fragment } from 'react'
import Card from '../components/card/card'

const API = 'http://www.omdbapi.com/?i=tt3896198&apikey=ecd3b19c'

class List extends React.Component {

    constructor() {
        super()
        this.state = {
            data: [],
            searchTerm: '',
            error: ''
        }
    }

    async componentDidMount() {
        const res = await fetch(`${API}&s=spider`)
        const resJSON = await res.json()
        this.setState({ data: resJSON.Search })
    }

    async handleSubmit(e){
        e.preventDefault()
        if (!this.state.searchTerm){
            return this.setState({error: 'please enter a valid text'})
        }
        this.setState({error: '', searchTerm:''})
        
        const res = await fetch(`${API}&s=${this.state.searchTerm}`)
        const resJSON = await res.json()

        if('Error'in resJSON){
            return this.setState({error: resJSON.Error})
        }

        this.setState({ data: resJSON.Search })
    }

    render() {
        return (

            <Fragment>
                <div className="row">
                    <div className="col-md-4 offset-md-4 p-4">
                        <form onSubmit={(e)=>this.handleSubmit(e)}>
                            <input type="text" className="form-control" placeholder="Search" onChange={e=>
                               this.setState({searchTerm: e.target.value})} value={this.state.searchTerm} autoFocus />
                        </form>
                            <p className="text-white" >{this.state.error ? this.state.error : ''}</p>
                    </div>
                </div>
                <div className="row">
                    {
                        this.state.data.map((movie, i) => {
                            return <Card movie={movie} key= {i} />
                        })
                    }
                </div>
            </Fragment>
        )
    }
}

export default List