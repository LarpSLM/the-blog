import React, {Component} from 'react';
import style from './style.css';
import * as Actions from './actions';
import {connect} from "react-redux";
import AuthorItem from "../../components/author-item";
import Loader from "../../components/loader/loader";

class About extends Component {
    componentDidMount() {
        this.props.getUsers();
    }

    componentWillUnmount() {
        this.props.setDefault()
    }

    getRandomAuthors = () => {
        const result = [];
        const authArr = this.props.authors;
        if (authArr.length !== 0) {
            for (let i = 0; i < 4; i++) {
                const elem = authArr[Math.floor(Math.random() * Math.floor(authArr.length))]
                if(!result.includes(elem)) {
                    result.push(elem);
                } else {
                    i--;
                }
            }
        }
        return result;
    }

    render() {
        const {authors} = this.props;
        return (
            <div className={style.page}>
                <h1>About Us</h1>
                <div className={style.profit}>
                    <div>
                        <i className="far fa-comments"></i>
                        <h2>Clean & Clear Content</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ultricies eu metus non
                            bibendum. Maecenas volutpat magna tristique ex vulputate.</p>

                    </div>
                    <div>
                        <i className="fas fa-users"></i>
                        <h2>A Lot Of Readers</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ultricies eu metus non
                            bibendum. Maecenas volutpat magna tristique ex vulputate.</p>
                    </div>
                    <div>
                        <i className="fas fa-chart-line"></i>
                        <h2>Drive SEO Result</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ultricies eu metus non
                            bibendum. Maecenas volutpat magna tristique ex vulputate.</p>
                    </div>
                </div>
                <h2 className={style.header}>Meet Our Authors</h2>
                <p className={style.description}>A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone.</p>
                <div className={style.authors}>
                    {authors.length > 0 ? this.getRandomAuthors().map(item => {
                        return <AuthorItem avatar={item.avatar}
                                           key={item.id}
                                           login={item.login}
                                           firstName={item.firstName}
                                           email={item.email}
                                           registration={item.registrationDate.slice(0, 10)}
                        />
                    }) : <Loader/>}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        authors: state.about.authors
    }
}

export default connect(mapStateToProps, Actions)(About);