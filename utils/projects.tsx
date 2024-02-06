type ProjectProps = {
  id: number;
  img: string;
  thumbn: string;
  alt: string;
};

const projects: ProjectProps[] = [
  {
    id: 1,
    img: "/project_img/vocabDojo.jpeg",
    thumbn: "/project_thumb/vocabDojo_thumb.jpeg",
    alt: "vocabDojo",
  },
  {
    id: 2,
    img: "/project_img/newsletter.jpg",
    thumbn: "/project_thumb/newsletter_thumb.jpg",
    alt: "newsletter",
  },
  {
    id: 3,
    img: "/project_img/everest.jpg",
    thumbn: "/project_thumb/everest_thumb.jpg",
    alt: "newsletter",
  },
];

export default projects;
