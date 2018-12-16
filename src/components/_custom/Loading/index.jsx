
import React from 'react'
import Loadable from 'react-loadable';
import ReactLoading from 'react-loading'
import {Row,Col} from 'react-bootstrap'
const Loading= (props)=>
  props.pastDelay ? (
    
      <Row>
        <Col>
          <ReactLoading type='spin' color='#fff' height={'20%'} width={'20%'}/>
        </Col>
      </Row>
    
  ):null;


export default Loading