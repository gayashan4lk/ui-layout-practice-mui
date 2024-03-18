type Props = {
  params: { tourid: string }
}

export default function Page({ params }: Props) {
  const { tourid } = params

  return <h1>View tour details of {tourid}</h1>
}
