import css from './Statistics.module.css'
import PropTypes from "prop-types";

export const Statistics = ({title, stats}) => {
    return (
        <section className={css.statistics}>
            {title && <h2 className={css.title}>{title}</h2>}
            <ul className={css.statList}>
                {stats.map((el) =>
                (
                    <li key={el.id} className={css.item} style={{ backgroundColor:getRandomHexColor()}}>
                        <span className={css.label}>{el.label}</span>
                        <span className={css.percentage}>{el.percentage}%</span>
                    </li>
                ))}
            </ul>          
        </section>
    );
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    label: PropTypes.string,
    percentage: PropTypes.number,
  }))
};