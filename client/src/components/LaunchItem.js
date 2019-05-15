import React from 'react';
import classNames from 'classnames';
import Moment from 'react-moment';

 export default class LaunchItem extends React.Component{
    render(){
        
        const {flight_number,launch_date_local,launch_year,mission_name,launch_sucesss} = this.props && this.props.launch;
        console.log(flight_number);
        return(
       <div className="card card-body mb-3">   
         <div className="row">
         <div className="col-md-9">
         <h4>
            Mission:{' '}
            <span
              className={classNames({
                'text-success': launch_sucesss,
                'text-danger': !launch_sucesss
              })}
            >
              {mission_name}
            </span>
          </h4>
          <p> Date: <Moment format="YYYY-MM-DD HH:mm">{launch_date_local}</Moment></p>
           
           </div>

           <div className="col-md-3">


            </div>

         
         
         
         
         </div>
       </div>



        );
    }
}