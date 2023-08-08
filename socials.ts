export interface Social {
 id: number;
 name: string;
 url: string;
 icon: string;
}

const socials: Social[] = [
 {
  id: 1,
  name: 'Github',
  url: 'https://github.com/AayushMohan',
  icon: 'github',
 },
 {
  id: 2,
  name: 'LinkedIn',
  url: 'https://www.linkedin.com/in/AayushMohan/',
  icon: 'linkedin',
 },
 {
  id: 3,
  name: 'Twitter',
  url: 'https://twitter.com/AayushMohan',
  icon: 'twitter',
 },
 {
  id: 4,
  name: 'Instagram',
  url: 'https://www.instagram.com/thisisaayushmohan/',
  icon: 'instagram',
 }

]

export default socials;