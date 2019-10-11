import React, { Component } from 'react';
import Card from './Card';
import NavBar from './NavBar';
import FilterBar from './FilterBar';
import Config from './../config';
import './Container.css';


class Container extends Component {

  state = {
    initialProjects: [],
    projects: [],
    locations: [],
    start: 0,
    end: 0
  }

  componentDidMount() {
    fetch(Config.API)
      .then((resp) => resp.json())
      .then((data) => {
        this.setState({ projects: data, initialProjects: data });
        let locations = []
        data.forEach(project => {
          if (!locations.includes(project.location)) {
            locations.push(project.location);
          }
        });
        const end = data.length >= 10 ? 9 : data.length - 1;
        this.setState({ locations, end });
      });
    window.addEventListener('scroll', this.handleOnScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleOnScroll);
  }

  projectSearch = (term) => {
    const { initialProjects } = this.state;
    if (term.length > 0) {
      const projects = initialProjects.filter(project => project.title.match(new RegExp('\\b'+ term + '.*','i')));
      this.setState ({ projects });
    }
    else {
      this.setState({ projects: initialProjects });
    }
  }

  projectFilter = (term) => {
    const { initialProjects } = this.state;
    let projects = [];
    if (term === 'All') {
      projects = initialProjects;
    }
    else {
      projects = initialProjects.filter(project => project.location === term);
    }
    this.setState ({ projects });
  }

  sortBy = (e, toggle) => {
    const { initialProjects } = this.state;
    if (toggle) {
      this.setState({projects: initialProjects.sort((a, b) => {
        return a[e] === b[e] ? 0 : +(a[e] < b[e]) || -1;
        })
      });
    }
    else {
      this.setState({projects: initialProjects.sort((a, b) => {
        return a[e] === b[e] ? 0 : +(a[e] > b[e]) || -1;
        })
      });
    }
  }

  handleOnScroll = () => {
    const scrollTop = (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop;
    const scrollHeight = (document.documentElement && document.documentElement.scrollHeight) || document.body.scrollHeight;
    const clientHeight = document.documentElement.clientHeight || window.innerHeight;
    const scrolledToBottom = Math.ceil(scrollTop + clientHeight) >= scrollHeight;
    if (scrolledToBottom) {
      let newEnd = this.state.end + 10;
      if (newEnd >= this.state.projects.length) {
        newEnd = this.state.projects.length - 1;
      }
      this.setState ({
        end: newEnd
      });
    }
  }

  renderCards = () => {
    const { projects, start, end } = this.state;
    let cards = projects.slice(start, end + 1).map( project => <Card key={project['s.no']} {...project} />)
    return cards
  }

  render() {
    return (
      <div>
      <NavBar projectSearch={this.projectSearch} />
      <FilterBar
        locations={this.state.locations}
        projectFilter={this.projectFilter}
        sortBy={this.sortBy}/>
      <div id="columns">
        {this.renderCards()}
      </div>
    </div>
    );
  }
}

export default Container;
