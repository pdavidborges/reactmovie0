
import { BannerApp } from './styles';

export default function Banner(props) {

  return (
    <BannerApp>
      <h1>{props.title}</h1>
      <p>{props.description}</p>
    </BannerApp>
  )

}