import { fullPicPath } from '@app/mock';

import classes from './frame.module.css';

type props = { shotNum: number };

export const Frame = ({ shotNum }: props) => (
  <div className={classes.frame}>
    <img src={`${fullPicPath}/img_${shotNum}.jpg`} />
  </div>
);
