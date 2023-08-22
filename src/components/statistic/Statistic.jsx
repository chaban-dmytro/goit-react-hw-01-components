import PropTypes from 'prop-types';
import css from './Statistic.module.css'

export const Statistic = ( props ) => {
  const { title, stats } = props;
  return (
    <section className={css.statistic}>
      {title.length > 0 && (<h2 className={css.title}>{title}</h2>) }
      <ul className={css.statsList}>
        {stats.map( ({id, label, percentage}) => (
          <li key={id} className={css.item} style={{
            backgroundColor: generateRandomColor(),
          }}>
            <span className={css.label}>{label}</span>
            <span className={css.percentage}>{percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  )
}

function generateRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

Statistic.propTypes = {
  title: PropTypes.string,
  id: PropTypes.string,
  label: PropTypes.string,
  percentage: PropTypes.number,
}

