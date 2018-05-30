import React from 'react';
import Header from './Header';
import Select from 'react-select';

const options = [
  { value: 'Aflatoun', label: 'Aflatoun' },
  { value: 'British International School', label: 'British International School' },
  { value: 'vanilla', label: 'Vanilla' }
]
const KidsPage = (props) => {
  props ={value:''}
return (
<article>
  <Header title="Kids"/>
  <h1 className="fw6 f3 f2-ns lh-title mt0 mb3">
    Kids
  </h1>
  <Select options={options} />
</article>);
}
export default KidsPage;

