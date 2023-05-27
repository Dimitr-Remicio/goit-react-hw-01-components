import PropTypes from 'prop-types';
import style from './statistics.module.css';


export const Statistics = ({data}) =>{
  return(
  <>
    <section className={style.statistics}>
  <h2 className={style.title}>Upload stats</h2>

  <ul className={style.statlist}>
    <li className={style.item} key={data.id}>
      <span className={style.label}>{data.label}</span>
      <span className={style.percentage}>{data.percentage}</span>
    </li>
    <li className={style.item} key={data.id}>
      <span className={style.label}>{data.label}</span>
      <span className={style.percentage}>{data.percentage}</span>
    </li>
    <li className={style.item} key={data.id}>
      <span className={style.label}>{data.label}</span>
      <span className={style.percentage}>{data.percentage}</span>
    </li>
    <li className={style.item} key={data.id}>
      <span className={style.label}>{data.label}</span>
      <span className={style.percentage}>{data.percentage}</span>
    </li>
    <li className={style.item} key={data.id}>
      <span className={style.label}>{data.label}</span>
      <span className={style.percentage}>{data.percentage}</span>
    </li>
  </ul>
</section>
  </>
)

}


Statistics.propTypes = {
  id: PropTypes.number.isRequired,
  label:PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};



