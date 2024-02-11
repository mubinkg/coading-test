import React, {useState} from 'react';

const Problem1 = () => {
    const [show, setShow] = useState('all');
    const [data, setData] = useState([])
    const [viewData, setViewData] = useState([])
    const [name, setName] = useState('')
    const [status, setStatus] = useState('')

    const ACTIVE = 'active'
    const COMPLETED = 'completed'
    const ALL = 'all'

    const handleAll = (data)=>{
        const activeTask = data.filter(d => d.status === ACTIVE)
        const completedTask = data.filter(d =>d.status === COMPLETED)
        const otherTask = data.filter(d => (d.status !== ACTIVE && d.status !== COMPLETED))
        setViewData([...activeTask, ...completedTask, ...otherTask])
    }

    const handleActive = (data)=>{
        setViewData(data.filter(d => d.status === ACTIVE))
    }

    const handleCompleted = (data)=>{
        setViewData(data.filter(d => d.status === COMPLETED))
    }

    const handleClick = (val) =>{
        setShow(val)
        if(val === ALL){
            handleAll(data)
        }
        if(val === ACTIVE){
            handleActive(data)
        }
        if(val === COMPLETED){
            handleCompleted(data)
        }
    }

    const handleSubmit = (e)=>{
        e.preventDefault()
        if(name && status){
            setData([...data, {name,status}])
            setName("")
            setStatus("")

            if(show === ALL){
                handleAll([...data, {name,status}])
            }
            if(show === ACTIVE){
                handleActive([...data, {name,status}])
            }
            if(show === COMPLETED){
                handleCompleted([...data, {name,status}])
            }
        }
    }

    return (

        <div className="container">
            <div className="row justify-content-center mt-5">
                <h4 className='text-center text-uppercase mb-5'>Problem-1</h4>
                <div className="col-6 ">
                    <form className="row gy-2 gx-3 align-items-center mb-4">
                        <div className="col-auto">
                            <input value={name} onChange={(e)=>setName(e.target.value)} type="text" className="form-control" placeholder="Name"/>
                        </div>
                        <div className="col-auto">
                            <input value={status} onChange={(e)=>setStatus(e.target.value)} type="text" className="form-control" placeholder="Status"/>
                        </div>
                        <div className="col-auto">
                            <button onClick={handleSubmit} type="submit" className="btn btn-primary">Submit</button>
                        </div>
                    </form>
                </div>
                <div className="col-8">
                    <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                        <li className="nav-item">
                            <button  className={`nav-link ${show==='all' && 'active'}`} type="button" onClick={()=>handleClick('all')}>All</button>
                        </li>
                        <li className="nav-item">
                            <button className={`nav-link ${show==='active' && 'active'}`} type="button" onClick={()=>handleClick('active')}>Active</button>
                        </li>
                        <li className="nav-item">
                            <button  className={`nav-link ${show==='completed' && 'active'}`} type="button" onClick={()=>handleClick('completed')}>Completed</button>
                        </li>
                    </ul>
                    <div className="tab-content"></div>
                    <table className="table table-striped ">
                        <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Status</th>
                        </tr>
                        </thead>
                        <tbody>
                            {viewData.map((d, i)=>(
                                <tr key={d.name+d.status+i}>
                                    <th scope="col">{d?.name}</th>
                                    <th scope="col">{d?.status}</th>
                                </tr>
                            ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Problem1;