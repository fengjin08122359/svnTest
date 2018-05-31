import React,{ Component } from "react";
import { Router,Route,browserHistory,IndexRoute } from "react-router";
import { Provider } from "react-redux";
import store from "../store";
import config from '../config';
import {
	App,
	Openfire,
	Ucc,
  Image,
  Ump,
  Redis,
  Cassandra,
  Application,
  Mongo,
  QA,
  UnUsed,
  Other,
  ExportHtml
} from "./components.js"

export default class ROOT extends Component{
  render(){
		return(
			<Provider store = { store.store }>
				<Router history={ browserHistory }>
					<Route path={ config.url } component = { App }>
						<IndexRoute component = { Ucc } />
						<Route path="openfire" component = { Openfire }></Route>
            <Route path="ucc" component = { Ucc }></Route>
            <Route path="img" component = { Image }></Route>
            <Route path="ump" component = { Ump }></Route>
            <Route path="redis" component = { Redis }></Route>
            <Route path="cassandra" component = { Cassandra }></Route>
            <Route path="app" component = { Application }></Route>
            <Route path="mongo" component = { Mongo }></Route>
            <Route path="qa" component = { QA }></Route>
            <Route path="other" component = { Other }></Route>
            <Route path="unused" component = { UnUsed }></Route>
            <Route path="export" component = { ExportHtml }></Route>
					</Route>
				</Router>
			</Provider>
		);
	}
}