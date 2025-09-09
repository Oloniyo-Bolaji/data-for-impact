export const getRegistration = `*[_type == "registrationLink"]{
  _id,
  link,
}`;

export const getAnnouncement = `*[_type == "announcement"]{
  _id,
  newAnnouncement,
}`;

export const getSponsors = `*[_type == "sponsors"] {
  _id,
  name,
  logo,
}`;

export const getMentors = `*[_type == "mentors"] | order(order asc) {
  _id,
  name,
  slug,
  position,
  profilePicture,
  linkedIn
}`;

export const getGraduates = `*[_type == "graduates"]{
  _id,
  name,
  slug,
  picture,
  location,
  cohort,
}`;

export const getNote = `*[_type == "foundersnote"]{
  _id,
  name,
  slug,
  picture,
  position,
  content,
}`;

export const getTestimonials = `*[_type == "testimonials"]{
  _id,
  name,
  slug,
  picture,
  location,
  testimony,
}`;

export const getArticles = `*[_type == "articles"] | order(_createdAt desc){
  _id,
  title,
  "slug": slug.current,
  coverImage,
  content,
  mentor->{
    name,
    profilePicture
  },
  _createdAt,
  _updatedAt
}`;

export const getArticle = `*[_type == "articles" && slug.current == $slug][0]{
_id,
  title,
  "slug": slug.current,
  coverImage,
  content,
  mentor->{
    name,
    profilePicture
  },
  _createdAt,
  _updatedAt
}`;

export const getProjects = `*[_type == "projects"] | order(order asc){
_id,
  title,
  slug,
  description,
}`;
