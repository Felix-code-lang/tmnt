import './catalog.scss';
import Card from '../card/Card';
import data from '../../data';

const Catalog = () => {
  return (
    <div className='catalog'>
      <h2>Catalog</h2>
      <div className='catalog-items'>
        {data.map((item, index) => (
          <Card key={index} title={item.title} img={item.img} desc={item.desc} />
        ))}
      </div>
    </div>
  )
}

export default Catalog
