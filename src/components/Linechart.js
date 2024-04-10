import { Chart } from 'react-google-charts';

function Linechart(props){

    const options = {
        title: 'Highest Temperature in last five years',
        backgroundColor: '#f7f7f7',
        hAxis: {
            title: 'Year',
        },
        vAxis: {
            title: 'Temperature °C',
        },
        colors: ['#007bff'],
        lineWidth: 2,
        pointSize: 6,
        animation: {
            startup: true,
            duration: 1000,
            easing: 'out',
        },
    };
    return (
        <div className='py-10'>
        <Chart
            chartType="LineChart"
            options = {options}
            data={props.data}
        />
    </div>
    )
}
export default Linechart;