type AppProps = {
  name: string
}

export default function App({ name }: AppProps): JSX.Element {
  return <div className="text-lg text-center">Hello {name}!</div>;
}
