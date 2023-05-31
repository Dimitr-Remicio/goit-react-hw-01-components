import PropTypes from 'prop-types';
import style from './Statistics.module.css';

function randomHexColor() {
  return `#${Math.floor(Math.random() * 17215).toString(16)}`;
}

const listStyle = {
  display:'flex',
  flexDirection:'row',
  gap:'50px',
  margin:'0 auto',
  padding:'0',
}


export default function TableState({ stats }) {
  
  return (
    <>
    <section className={style.statistics}>
      <h2 className={style.title}>Upload stats</h2>
      <ul className={style.statlist} style={listStyle}>
         {stats.map(({ id, label, percentage }) => {
           return (
              <li className={style.item} key={id} style={{ backgroundColor: randomHexColor() }}>
                <span className={style.label}>{label}</span>
                <span className={style.percentage}>{percentage} %</span>
              </li>
         );
        })}
      </ul>

    </section>
    </>
  );
}



TableState.prototype = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};