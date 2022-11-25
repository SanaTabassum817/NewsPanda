import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
import PropTypes from 'prop-types' // impt
import InfiniteScroll from 'react-infinite-scroll-component'


export class News extends Component {
  //   articles=[
  //     {
  //     "source": {
  //     "id": null,
  //     "name": "Gizmodo.jp"
  //     },
  //     "author": "巽英俊",
  //     "title": "ティム・クックがAppleのAR開発について「期待してほしい」と熱く語る",
  //     "description": "先日のWWDCではさらっとスルーされていたApple（アップル）のAR製品ですが、これに関してティム・クックCEOが自ら中国メディア「China Daily」の取材に応じています。",
  //     "url": "https://www.gizmodo.jp/2022/06/tim-cook-comments-ar.html",
  //     "urlToImage": "https://assets.media-platform.com/gizmodo/dist/images/2022/06/24/20220624_timcookchinadaily-w960.png",
  //     "publishedAt": "2022-06-24T07:00:00Z",
  //     "content": "WWDCAppleARCEOChina Daily\r\nApp Store14000ARARAR\r\nHaitong International Tech ResearchJeff PuApple Glasses20242023Apple GlassesHOYA\r\nARApple\r\nSource: CHINA DAILY via 9to5Mac"
  //     },
  //     {
  //     "source": {
  //     "id": null,
  //     "name": "Younghouselove.com"
  //     },
  //     "author": "John Petersik",
  //     "title": "How We Organized Our Small Kitchen (Hooray For Hidden Storage)",
  //     "description": "It’s time once again to throw open every cabinet, drawer, and door to show you how we organized our kitchen, which we slowly renovated over the last two years (more on that slow but steady reno here). This post should be an especially fun one because you’ll s…",
  //     "url": "https://www.younghouselove.com/small-ikea-kitchen-organization/",
  //     "urlToImage": "https://www.younghouselove.com/wp-content/uploads//2022/05/Small-Kitchen-Org-Full-Drawer-Open.jpg",
  //     "publishedAt": "2022-06-24T14:50:15Z",
  //     "content": "It’s time once again to throw open every cabinet, drawer, and door to show you how we organized our kitchen, which we slowly renovated over the last two years (more on that slow but steady reno here)… [+20738 chars]"
  //     },
  //     {
  //     "source": {
  //     "id": null,
  //     "name": "Microsiervos.com"
  //     },
  //     "author": "alvy@microsiervos.com (Alvy)",
  //     "title": "El 6502 como si fuera la novedad de una presentación de Apple",
  //     "description": "El gran Gregorio Naçu de C64 OS preparó esta infografía en el que el mítico procesador MOS 6502 se expone como si fuera el chip M2 de Apple –o algo mejor– en cualquiera de las presentaciones para público, desarrolladores y prensa de la compañía.\n\n\n\nRecordemos…",
  //     "url": "https://www.microsiervos.com/archivo/ordenadores/6502-como-novedad-presentacion-apple.html",
  //     "urlToImage": "https://img.microsiervos.com/images2022/gregnacu-MOS-6502.jpg",
  //     "publishedAt": "2022-06-24T22:56:04Z",
  //     "content": "Por @Alvy 25 de Junio de 2022\r\nEl gran Gregorio Naçu de C64 OS preparó esta infografía en el que el mítico procesador MOS 6502 se expone como si fuera el chip M2 de Apple o algo mejor en cualquiera d… [+746 chars]"
  //     },
  //     {
  //     "source": {
  //     "id": null,
  //     "name": "Journal du geek"
  //     },
  //     "author": "Tristan",
  //     "title": "Apple va lancer son casque de réalité virtuelle début 2023, assure Kuo",
  //     "description": "Apple pourrait bien se lancer dans le projet d'un casque de VR. Selon Ming-Chi Kuo, le produit sera disponible début 2023.\nApple va lancer son casque de réalité virtuelle début 2023, assure Kuo",
  //     "url": "https://www.journaldugeek.com/2022/06/24/apple-va-lancer-son-casque-de-realite-virtuelle-debut-2023-assure-kuo/",
  //     "urlToImage": "https://www.journaldugeek.com/content/uploads/2022/05/apple-view-realite-mixte-casque.jpg",
  //     "publishedAt": "2022-06-24T14:30:03Z",
  //     "content": "Apple pourrait bien se lancer dans le projet d'un casque de VR. Selon Ming-Chi Kuo, le produit sera disponible début 2023.Dans une toute récente interview, Tim Cook, le grand patron dApple a parlé br… [+2374 chars]"
  //     },
  //     {
  //     "source": {
  //     "id": null,
  //     "name": "Journal du geek"
  //     },
  //     "author": "Thomas Estimbre",
  //     "title": "iPhone 13 : Apple écrase la concurrence sur le marché du smartphone",
  //     "description": "Au mois d’avril 2022, Apple a dominé de la tête et des épaules les ventes mondiales de smartphones. Son iPhone 13 s’est mieux vendu que n’importe quel autre smartphone, confirmant le succès de la marque à la pomme. Elle place cinq de ses modèles dans le top 1…",
  //     "url": "https://www.journaldugeek.com/2022/06/24/iphone-13-apple-ecrase-la-concurrence-sur-le-marche-du-smartphone/",
  //     "urlToImage": "https://www.journaldugeek.com/content/uploads/2021/10/iphone-13-6.jpg",
  //     "publishedAt": "2022-06-24T13:30:13Z",
  //     "content": "Au mois davril 2022, Apple a dominé de la tête et des épaules les ventes mondiales de smartphones. Son iPhone 13 sest mieux vendu que nimporte quel autre smartphone, confirmant le succès de la marque… [+4036 chars]"
  //     },
  //     {
  //     "source": {
  //     "id": null,
  //     "name": "Journal du geek"
  //     },
  //     "author": "Sebastian Danila",
  //     "title": "Pour les soldes, l’iPhone 12 Pro Max 512 Go est à un prix FOU (-40%)",
  //     "description": "Affiché à ce prix dingue pour les soldes, l'iPhone 12 Pro Max d'Apple dans sa version 512 Go devient tout simplement le meilleur smartphone du moment. De la pure folie on vous dit ! \nPour les soldes, l’iPhone 12 Pro Max 512 Go est à un prix FOU (-40%)🔥",
  //     "url": "https://www.journaldugeek.com/bon-plan/pour-les-soldes-cdiscount-pulverise-le-prix-de-liphone-12-pro-max-512-go-40/",
  //     "urlToImage": "https://www.journaldugeek.com/content/uploads/2022/06/apple-iphone-12-pro-max-512go-graphite.jpg",
  //     "publishedAt": "2022-06-24T13:45:25Z",
  //     "content": "Affiché à ce prix dingue pour les soldes, l'iPhone 12 Pro Max d'Apple dans sa version 512 Go devient tout simplement le meilleur smartphone du moment. De la pure folie on vous dit !C’est indéniableme… [+5220 chars]"
  //     },
  //     {
  //     "source": {
  //     "id": null,
  //     "name": "Applesfera.com"
  //     },
  //     "author": "Miguel López",
  //     "title": "He hecho números con Apple One: de momento no me sale a cuenta para lo que necesito",
  //     "description": "Suelo vigilar muy bien cuánto dinero se me va cada mes en suscripciones, especialmente ahora que los precios de todo lo básico están subiendo. Si veo que puedo ahorrarme 3 euros al mes (36 euros al año), muevo hilos para que sea un hecho. Por eso los planes d…",
  //     "url": "https://www.applesfera.com/servicios-apple/he-hecho-numeros-apple-one-momento-no-me-sale-a-cuenta-para-que-necesito",
  //     "urlToImage": "https://i.blogs.es/5c0c44/4e21ac61-7edd-4ad3-af64-ae08d470222c/840_560.jpeg",
  //     "publishedAt": "2022-06-24T10:01:54Z",
  //     "content": "Suelo vigilar muy bien cuánto dinero se me va cada mes en suscripciones, especialmente ahora que los precios de todo lo básico están subiendo. Si veo que puedo ahorrarme 3 euros al mes (36 euros al a… [+1825 chars]"
  //     },
  //     {
  //     "source": {
  //     "id": null,
  //     "name": "Applesfera.com"
  //     },
  //     "author": "Jesús Quesada",
  //     "title": "Ofertones en iPhone 13 y iPhone 12, AirTag con descuento y más: Cazando Gangas",
  //     "description": "Bienvenidos una semana más a la sección Cazando Gangas, el espacio de Applesfera en el que publicamos cada viernes las mejores ofertas de dispositivos Apple. Si estás buscando un nuevo iPhone, Apple Watch, iPad, ordenador Mac, AirPods o accesorios a mejor pre…",
  //     "url": "https://www.applesfera.com/general/ofertones-iphone-13-iphone-12-airtag-descuento-cazando-gangas",
  //     "urlToImage": "https://i.blogs.es/3bd286/cazando-gangas-applesfera-viernes/840_560.jpg",
  //     "publishedAt": "2022-06-24T06:01:54Z",
  //     "content": "Bienvenidos una semana más a la sección Cazando Gangas, el espacio de Applesfera en el que publicamos cada viernes las mejores ofertas de dispositivos Apple. Si estás buscando un nuevo iPhone, Apple … [+5248 chars]"

  // }
  // ]
  static defaultProps = {
    country: "in",
    pageSize: 6,
    category: 'general'
  }
  static propsTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  }
  constructor(props) {
    super();   // always call super in constructor
    // console.log("Me constructor:) from news");
    this.state = {
      // articles:this.articles,
      articles: [],
      loading: false,
      page: 1,
      totalResults: 0


    }
    // document.title=`${this.props.category}-NewsPanda`;
  }
  async updateNews() {
    this.props.setProgress(0);
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true })
    let data = await fetch(url);
    this.props.setProgress(30);
    let parseData = await data.json();
    this.props.setProgress(70);
    //   console.log(parseData);
    this.setState({
      articles: parseData.articles, totalResults: parseData.totalResults,
      loading: false
    });
    this.props.setProgress(100);
  }
  // async and await is used to make the function sync with inner statements
  async componentDidMount()  // runs after the render function
  {
    this.updateNews();

  }
  // handlePreviousClick=async()=>
  // {
  //    this.setState({
  //     page:this.state.page-1
  // })
  // this.updateNews();
  // }
  // handleNextClick =async()=>
  // {
  //      this.setState({
  //         page:this.state.page+1
  //     })
  //     this.updateNews();

  // }
  fetchMoreData = async () => {
    // this.setState({page:this.state.page+1});
    this.state.page += this.state.page;
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    //    this.setState({loading:true})
    let data = await fetch(url);
    let parseData = await data.json();
    //   console.log(parseData);
    this.setState({
      articles: this.state.articles.concat(parseData.articles), totalResults: parseData.totalResults,
      // loading:false
    });

  };
  render() {
    return (
      <>
        {/* <div className="container my-3"> */}
        <h1 className='text-center'>NewsPanda-Top {this.props.category}</h1>
        {this.state.loading && <Spinner />}
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<Spinner />}

        >
          <div className="container">
            <div className="row" >
              {!this.state.loading&&this.state.articles.map((element)=>{
                    return  <div className="col-md-4" key={element.url} >
                    <NewsItem title={element.title?element.title?.slice(0,45):""} description={element.description?element.description?.slice(0,88):""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name}></NewsItem>
                </div>
              //  {!this.state.loading && this.state.articles.map((element, index) => {
              //   return <div className="container col-md-4" key={index}>

              //     <NewsItem title={element.title ? element.title?.slice(0, 45) : ""} description={element.description ? element.description?.slice(0, 88) : ""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name}></NewsItem>
              //     </div> 

              })}


            </div></div></InfiniteScroll>
        {/* <div className="container d-flex justify-content-between">
<button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePreviousClick}>&larr; Previous</button>
<button disabled={this.state.page+1>Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className="btn btn-dark " onClick={this.handleNextClick}>Next &rarr;</button>
</div> */}

        {/* </div> */}
      </>
    )
  }
}

export default News
