import React from 'react';
import { Component } from 'react';
import 'react-bootstrap/lib/NavbarHeader';
import { Panel, FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap';
import Header from './header';


export default class App extends Component {

  render() {

    const title = (
      <h3>Search</h3>
    );

    return (
      <div style={{ margin : "20px"}}>


        <div className="container">
          <div className="panel panel-default">

            <div className="panel-body">
              <form className="form-inline">
                <FormGroup>
                  <ControlLabel>Application</ControlLabel>
                  <FormControl componentClass="select" placeholder="select">
                    <option value="select">select</option>
                    <option value="other">...</option>
                  </FormControl>
                </FormGroup>
                <Button type="submit">
                  Submit
                </Button>
              </form>
            </div>
            <div className="panel-footer">
              <form className="form-inline">
                Selected apps:
                <span className="tag label label-info">
                  <span>LSS</span>
                  <a><i className="remove glyphicon glyphicon-remove glyphicon-white"></i></a>
                </span>
                <span className="tag label label-info">
                  <span>ESS</span>
                  <a><i className="remove glyphicon glyphicon-remove glyphicon-white"></i></a>
                </span>
              </form>
            </div>
          </div>




          <div className="row">
            <div className="col-xs-18 col-sm-6 col-md-4">
              <div className="thumbnail">
                <img src="http://placehold.it/500x250/EEE" />
                  <div className="caption">
                    <h4>Thumbnail label</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere, soluta, eligendi doloribus sunt minus amet sit debitis repellat. Consectetur, culpa itaque odio similique suscipit</p>
                    <a href="#" className="btn btn-default btn-xs pull-right" role="button">
                      <i className="glyphicon glyphicon-edit"></i>
                    </a>
                    <a href="#" className="btn btn-info btn-xs" role="button">Button</a>
                    <a href="#" className="btn btn-default btn-xs" role="button">Button</a>
                </div>
              </div>
            </div>

            <div className="col-xs-18 col-sm-6 col-md-4">
              <div className="thumbnail">
                <img src="http://placehold.it/500x250/EEE" />
                  <div className="caption">
                    <h4>Thumbnail label</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere, soluta, eligendi doloribus sunt minus amet sit debitis repellat. Consectetur, culpa itaque odio similique suscipit</p>
                    <a href="#" className="btn btn-default btn-xs pull-right" role="button"><i className="glyphicon glyphicon-edit"></i></a> <a href="#" className="btn btn-info btn-xs" role="button">Button</a> <a href="#" className="btn btn-default btn-xs" role="button">Button</a>
                </div>
              </div>
            </div>

            <div className="col-xs-18 col-sm-6 col-md-4">
              <div className="thumbnail">
                <img src="http://placehold.it/500x250/EEE" />
                  <div className="caption">
                    <h4>Thumbnail label</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere, soluta, eligendi doloribus sunt minus amet sit debitis repellat. Consectetur, culpa itaque odio similique suscipit</p>
                    <a href="#" className="btn btn-default btn-xs pull-right" role="button"><i className="glyphicon glyphicon-edit"></i></a> <a href="#" className="btn btn-info btn-xs" role="button">Button</a> <a href="#" className="btn btn-default btn-xs" role="button">Button</a>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    );
  }
}
