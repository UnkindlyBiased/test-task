type CountryTitleProps = {
    commonName: string
    officialName: string
    flag: string
}

const CountryTitle = ({ commonName, officialName, flag }: CountryTitleProps) => {
    return (
        <div className="flex flex-col space-y-1">
            <div className="flex w-fit gap-3 items-center">
                <span className="text-3xl font-bold">{commonName}</span>
                <img className="h-8 rounded-md" src={flag} />
            </div>
            <span>{`Official name: ${officialName}`}</span>
        </div>
    )
}

export { CountryTitle }