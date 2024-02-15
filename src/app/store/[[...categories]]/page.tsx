interface CategoryProps {
    params: {
        categories: string[],
        searchParams?: {},
    }
}

export default function Categories(props: CategoryProps) {
    const categories = props.params.categories
    return <h1>Category: { categories }</h1>
}