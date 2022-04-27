import { Component } from "react";
// import * as basicLightbox from "basiclightbox";
import axios from "axios";
import Searchbar from "./Searchbar/Searchbar";
import ImageGallery from "./ImageGallery/ImageGallery";
import MyLoader from "./Loader/Loader";
import Button from "./Button/Button";
import Modal from "./Modal/Modal";
import { disablePageScroll, enablePageScroll } from 'scroll-lock';



axios.defaults.baseURL = "https://pixabay.com/api/";

export class App extends Component {
  state = {
    articles: [],
    isLoading: false,
    q: "",
    page: 1,
    totalHits: 0,
    error: null,
    lastQ: "",
    openModal: false,
    largeImageURL:"",
  };

  async componentDidMount() {
    this.setState({ isLoading: true });
    try {
      const response = await axios.get(
        `?q=${this.state.q}&page=${this.state.page}&key=25099977-05a832f59cefe7e3a7990f935&image_type=photo&orientation=horizontal&per_page=12`
      );
      this.setState({ articles: response.data.hits });
      this.setState({ totalHits: response.data.totalHits });
    } catch (error) {
      this.setState({ error });
    } finally {
      this.setState({ isLoading: false });
    }
    document.addEventListener("keydown", this.handleModalCloseEsc, false);

  }
  componentWillUnmount(){
    document.addEventListener("keydown", this.handleModalCloseEsc, false);
  }

  async componentDidUpdate(_, prevState) {
    if (prevState.page !== this.state.page) {
      // this.setState({ isLoading: true });
      let last = this.state.articles;
      try {
        const response = await axios.get(
          `?page=${this.state.page}&key=25099977-05a832f59cefe7e3a7990f935&image_type=photo&orientation=horizontal&per_page=12`
        );
        last.push(...response.data.hits);
        this.setState({ articles: last });
      } catch (error) {
        this.setState({ error });
      }
      // } finally {
      //   this.setState({ isLoading: false });
      // }
    }
  }

  loadMore = () => {
    this.setState((prevState) => ({
      page: prevState.page + 1,
    }));
  };

  handelChange = (e) => {
    this.setState({
      q: e.target.value,
    });
  };
  handleSubmit = async (e) => {
    e.preventDefault();
    if (this.state.q !== this.state.lastQ) {
      try {
        const response = await axios.get(
          `?q=${this.state.q}&page=1&key=25099977-05a832f59cefe7e3a7990f935&image_type=photo&orientation=horizontal&per_page=12`
        );
        this.setState({ articles: response.data.hits });
        this.setState({ totalHits: response.data.totalHits });
        this.setState({ lastQ: this.state.q });
      } catch (error) {
        this.setState({ error });
      }
    } else {
      alert("Ви вже ввели це слово");
    }
  };
  handleModalOpen = (e) => {
    this.setState({ openModal: true });
    const largeImageURL = this.state.articles.find(Image =>Image.id.toString() === e.target.alt).largeImageURL 
    this.setState({ largeImageURL: largeImageURL })

    disablePageScroll();



  };
  handleModalClose = () => {
    this.setState({ openModal: false });
    enablePageScroll();
  };
  handleModalCloseEsc = (e) => {  
    console.log(e.key)
    if (e.key === "Escape") { this.setState({ openModal: false });
    enablePageScroll()}
    
  }

  render() {
    const { articles, isLoading, q, totalHits, openModal } = this.state;

    return (
      <div>
        <Searchbar
          handelChange={this.handelChange}
          value={q}
          handleSubmit={this.handleSubmit}
        />
        {isLoading ? (
          <MyLoader />
        ) : (
          <ImageGallery
            articles={articles}
            openModal={openModal}
            handleModalOpen={this.handleModalOpen}
            handleModalClose={this.handleModalClose}
          />
        )}{" "}
        {openModal === true && (
          <Modal  handleModalClose={this.handleModalClose} largeImageURL = {this.state.largeImageURL} handleModalCloseEsc = {this.handleModalCloseEsc} />
        )}
        {totalHits !== articles.length ? (
          <Button loadMore={this.loadMore} />
        ) : (
          <p> No more results</p>
        )}
      </div>
    );
  }
}
