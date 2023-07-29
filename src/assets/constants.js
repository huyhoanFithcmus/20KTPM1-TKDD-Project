import {
  HiOutlineHashtag,
  HiOutlineHome,
  HiOutlinePhotograph,
  HiOutlineUserGroup,
  HiOutlineMusicNote,
} from 'react-icons/hi';

export const links = [
  { name: 'Play Now', to: '/', icon: HiOutlineHome },
  { name: 'Explore ', to: '/around-you', icon: HiOutlinePhotograph },
  { name: 'Artists', to: '/top-artists', icon: HiOutlineUserGroup },
  { name: 'Albums', to: '/top-charts', icon: HiOutlineHashtag },
  { name: 'Songs', to: '/top-charts', icon: HiOutlineMusicNote },
];
