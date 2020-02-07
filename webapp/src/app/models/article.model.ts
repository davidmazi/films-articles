export class Article {
  title: string;
  content: string;
  rating: number;
  authorName: string;
  creationDate: string;
  category: string;
  imageURL: string;

  //default constructor
  constructor() {
    this.title = "Example";
    this.content = "Lorem Ipsum";
    this.rating = 7;
    this.authorName = "John Doe";
    this.category = "Action";
    this.imageURL = "https://media.gettyimages.com/photos/colorful-powder-explosion-in-all-directions-in-a-nice-composition-picture-id890147976?s=612x612";
    this.creationDate = Date.now().toString();
  }


}
