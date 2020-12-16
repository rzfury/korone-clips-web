import { Fragment } from 'react';
import Link from 'next/link';
import conclass from '../../utility/conclass';

export default function NavBrand(props: RazorWindProps.Navigation.Brand) {
  return <Link href="/" passHref><a className={conclass('navbar-brand', props.show ? 'opacity-100' : 'opacity-0')}>{props.children}</a></Link>;
}
