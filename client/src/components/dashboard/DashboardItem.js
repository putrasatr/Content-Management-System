import React from 'react';
import history from '../../history';

export default function DashboardItem(props) {
    return (
        <div>
            <a href="/line" className="nav-link"><button type="button" onClick={() => history.push('/line')} className="btn btn-danger btn-lg btn-block"><i className="fa fa-line-chart"></i><br />Line</button></a>
            <a href="/pie" className="nav-link"><button type="button" onClick={() => history.push('/pie')} className="btn btn-warning btn-lg btn-block"><i className="fa fa-pie-chart"></i><br />Pie</button></a>
            <a href="/bar" className="nav-link"><button type="button" onClick={() => history.push('/bar')} className="btn btn-primary btn-lg btn-block"><i className="fa fa-bar-chart"></i><br />Bar</button></a>
            <a href="/map" className="nav-link"><button type="button" onClick={() => history.push('/map')} className="btn btn-success btn-lg btn-block"><i className="fa fa-map"></i><br />Maps</button></a>
            <a href="/login" className="nav-link"><button type="button" onClick={() => history.push('/login')} className="btn btn-info btn-lg btn-block"><i className="fa fa-user-circle"></i>  Admin Panel</button></a>
        </div>
    )
}